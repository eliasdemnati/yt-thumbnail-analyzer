from sqlalchemy.orm import Session
from .. import models, schemas


def get_thumbnails(db: Session):
    return db.query(models.Thumbnail).order_by(models.Thumbnail.score.desc()).all()


def insert_thumbnail(db: Session, file: bytes, output_groq: schemas.thumbnail.OutputGroq):
    thumbnail_to_add = models.thumbnail.Thumbnail(thumbnail=file, score=output_groq.score, comment=output_groq.comment)
    db.add(thumbnail_to_add)
    db.commit()
    db.refresh(thumbnail_to_add)
    return thumbnail_to_add
