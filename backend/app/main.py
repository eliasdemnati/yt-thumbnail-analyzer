from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from . import routers

app = FastAPI()
load_dotenv()

app.include_router(routers.thumbnail.router, prefix="/thumbnails")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "yt-thumbnail-analyzer backend running"}
