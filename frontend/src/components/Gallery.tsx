import React from "react";
import { useQuery } from "react-query";
import { EmojiRating } from "./EmojiRating";
import { LoadingGallery } from "./LoadingGallery";
import { fetchThumbnails } from "../api";

function Gallery() {
  const thumbnailsQuery = useQuery({
    queryKey: ["thumbnails"],
    queryFn: fetchThumbnails,
  });

  return (
    <>
      {thumbnailsQuery.isLoading && <LoadingGallery />}
      {thumbnailsQuery.data?.length === 0 && <div className="flex items-center justify-center text-gray-700">❌ No thumbnails uploaded yet.</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-h-96 overflow-auto">
        {thumbnailsQuery.data?.map((thumbnail) => (
          <div
            key={thumbnail.id}
            className="w-52 flex flex-col items-center justify-between p-4 gap-2 rounded-md bg-zinc-700"
          >
            <img
              alt="uploaded-thumbnail"
              className="w-2xs aspect-video rounded-md"
              src={`data:image/png;base64,${thumbnail.thumbnail}`}
            />
            <div className="flex gap-2 text-2xl font-black">
              <EmojiRating score={thumbnail.score} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export { Gallery };
