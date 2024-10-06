from pydantic import BaseModel


class OutputGroq(BaseModel):
    score: int
    comment: str


class OutputThumbnail(BaseModel):
    id: int
    thumbnail: str
    score: int
    comment: str
