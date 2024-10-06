import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { EmojiRating } from "./EmojiRating";
import { Thumbnail } from "../types";

interface Props {
  thumbnail: Thumbnail;
  reset: () => void;
}

function ResultCard({ thumbnail, reset }: Props) {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-4 items-center justify-between"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <img
        alt="uploaded-thumbnail"
        className="max-w-56 sm:max-w-64 rounded-md"
        src={`data:image/png;base64,${thumbnail.thumbnail}`}
      />
      <div className="flex flex-col md:items-start items-center gap-4 max-w-sm m-auto">
        <div className="text-4xl space-x-4 font-black">
          <EmojiRating score={thumbnail.score} />
        </div>
        <div className="text-sm text-justify">{thumbnail.comment}</div>
        <Button onClick={reset}>Try another</Button>
      </div>
    </motion.div>
  );
}

export { ResultCard };
