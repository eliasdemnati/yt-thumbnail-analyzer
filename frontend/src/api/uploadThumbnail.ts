import ky from "ky";
import { Thumbnail, ThumbnailSchema } from "../types";

export const uploadThumbnail = async (file: File): Promise<Thumbnail> => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await ky
    .post(`${import.meta.env.VITE_API_URL}/thumbnails/`, {
      body: formData,
    })
    .json();
  const thumbnail = ThumbnailSchema.parse(response);
  return thumbnail;
};
