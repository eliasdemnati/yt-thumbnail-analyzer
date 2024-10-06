CREATE DATABASE yt_thumbnail_analyzer;

USE yt_thumbnail_analyzer;

CREATE TABLE thumbnails (
  id                INTEGER NOT NULL AUTO_INCREMENT,
  thumbnail         LONGTEXT,
  score             INTEGER,
  comment           TEXT,
  created_at        DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
