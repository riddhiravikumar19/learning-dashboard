"use client";

import { motion } from "framer-motion";

const activity = [
  0, 1, 2, 1, 3, 2, 0,
  1, 3, 2, 2, 0, 1, 2,
  2, 1, 3, 3, 2, 1, 0,
  0, 2, 1, 3, 2, 2, 1,
  1, 0, 2, 3, 3, 1, 2,
  2, 3, 1, 0, 2, 1, 3,
];

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.012, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(168,85,247,0.16),transparent_35%)]" />

      <div className="relative z-10">
        <p className="text-sm text-white/50">Weekly activity</p>

        <h2 className="mt-1 text-2xl font-semibold">
          Learning heatmap
        </h2>

        <p className="mt-2 text-sm text-white/50">
          Your recent study consistency across modules.
        </p>

        <div className="mt-8 grid grid-cols-7 gap-2">
          {activity.map((level, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.01,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={[
                "h-7 rounded-lg border border-white/5",
                level === 0 && "bg-white/5",
                level === 1 && "bg-cyan-300/20",
                level === 2 && "bg-cyan-300/40",
                level === 3 && "bg-violet-400/50",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
}