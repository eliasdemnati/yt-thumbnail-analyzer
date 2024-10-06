import React from "react";
import { Skeleton } from "./ui/skeleton";

function LoadingGallery() {
  return (
    <div className="flex gap-4">
      <Skeleton className="w-52 aspect-square rounded-md bg-zinc-700" />
      <Skeleton className="w-52 aspect-square rounded-md bg-zinc-700" />
      <Skeleton className="w-52 aspect-square rounded-md bg-zinc-700" />
      <Skeleton className="w-52 aspect-square rounded-md bg-zinc-700" />
    </div>
  );
}

export { LoadingGallery };
