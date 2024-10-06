import { z } from "zod";

export const ThumbnailFormSchema = z.object({
  file: z.any()
    .refine((file) => file, "Image is required.")
    .refine((file) => file?.size <= 15000000, `Max file size is 20MB.`)
    .refine(
      (file) => ["image/jpeg", "image/jpg", "image/png"].includes(file?.type),
      ".jpg, .jpeg and .png files are accepted."
    ),
});

export const ThumbnailSchema = z.object({
  id: z.number(),
  thumbnail: z.string(),
  score: z.number(),
  comment: z.string(),
});

export type Thumbnail = z.infer<typeof ThumbnailSchema>;
