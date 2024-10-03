from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "yt-thumbnail-analyzer backend running"}
