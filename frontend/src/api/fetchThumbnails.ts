import ky from "ky";
import { z } from "zod";
import { Thumbnail, ThumbnailSchema } from "../types";

export const fetchThumbnails = async (): Promise<Thumbnail[]> => {
  const response = await ky.get(`${import.meta.env.VITE_API_URL}/thumbnails/`).json();
  const thumbnails = z.array(ThumbnailSchema).parse(response);
  return thumbnails;
};
