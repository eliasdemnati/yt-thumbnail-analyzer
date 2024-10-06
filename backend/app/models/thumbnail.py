from sqlalchemy import Column, Text, Integer, String

from ..database import Base


class Thumbnail(Base):
    __tablename__ = "thumbnails"
    id = Column(Integer, primary_key=True, autoincrement=True)
    thumbnail = Column(Text)
    score = Column(Integer)
    comment = Column(String)
