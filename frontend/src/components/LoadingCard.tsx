import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "./ui/skeleton";

function LoadingCard() {
  return (
    <AnimatePresence>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Skeleton className="w-1/2 rounded-md bg-zinc-500" />
        <div className="flex flex-col items-start gap-4 w-1/2">
          <Skeleton className="h-24 w-full bg-zinc-500" />
          <Skeleton className="h-48 w-full bg-zinc-500" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export { LoadingCard };
