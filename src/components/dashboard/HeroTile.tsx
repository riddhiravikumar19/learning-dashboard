"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";

export default function HeroTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.015, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.22),transparent_32%)]" />

      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
            <Sparkles className="h-3.5 w-3.5" />
            AI-powered learning path active
          </div>

          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Welcome back, Riddhi
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
            Your dashboard is tuned for deep focus, fast progress tracking, and
            smooth learning momentum.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400/15 text-orange-200 shadow-[0_0_30px_rgba(251,146,60,0.25)]">
            <Flame className="h-7 w-7" />
          </div>

          <div>
            <p className="text-2xl font-semibold">12 days</p>
            <p className="text-sm text-white/50">Daily learning streak</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}