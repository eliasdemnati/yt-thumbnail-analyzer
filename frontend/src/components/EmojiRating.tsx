import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  score: number;
}

function EmojiRating({ score }: Props) {
  const getScoreEmoji = (score: number) => {
    switch (true) {
      case score >= 9:
        return "😍";
      case score >= 7 && score < 9:
        return "😃";
      case score >= 5 && score < 7:
        return "🙂";
      case score >= 3 && score < 5:
        return "😐";
      case score >= 1 && score < 3:
        return "😵";
    }
  };

  return (
    <>
      {getScoreEmoji(score)}{" "}
      <span
        className={cn({
          "text-lime-500": score >= 9,
          "text-green-700": score >= 7 && score < 9,
          "text-yellow-700": score >= 5 && score < 7,
          "text-orange-700": score >= 3 && score < 5,
          "text-red-700": score >= 1 && score < 3,
        })}
      >
        {score} / 10
      </span>
    </>
  );
}

export { EmojiRating };
