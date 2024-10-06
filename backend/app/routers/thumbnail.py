import os
import json
import base64
from fastapi import APIRouter, HTTPException, Depends, UploadFile
from typing import List
from sqlalchemy.orm import Session
from groq import Groq
from .. import schemas, crud
from ..database import SessionLocal

router = APIRouter()
groq_client = Groq(api_key=os.environ.get("GROQ_API_KEY"))


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/", response_model=List[schemas.thumbnail.OutputThumbnail])
def get_all_thumbnails(db: Session = Depends(get_db)):
    users = crud.thumbnail.get_thumbnails(db)
    return users


@router.post("/", response_model=schemas.thumbnail.OutputThumbnail)
async def post_thumbnail(file: UploadFile, db: Session = Depends(get_db)):
    file_data = await file.read()
    file_base64 = base64.b64encode(file_data).decode("utf-8")
    try:
        chat_completion = groq_client.chat.completions.create(
            model="llama-3.2-11b-vision-preview",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": f"""
                                This is a YouTube thumbnail. How would your rate it from 1 to 10 ? Give detailed comments and suggestions about it. Output in a JSON object that must use the schema: {json.dumps(schemas.thumbnail.OutputGroq.model_json_schema(), indent=2)}
                            """
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{file_base64}",
                            },
                        },
                    ],
                },
                {
                    "role": "user",
                    "content": ""
                }
            ],
            temperature=0.5,
            max_tokens=1024,
            top_p=1,
            stream=False,
            response_format={"type": "json_object"},
            stop=None,
        )
        groq_data = schemas.thumbnail.OutputGroq.model_validate_json(chat_completion.choices[0].message.content)
    except Exception:
        return HTTPException(status_code=500, detail="Couldn't get valid JSON data from Groq")
    return crud.thumbnail.insert_thumbnail(db, file_base64, groq_data)
