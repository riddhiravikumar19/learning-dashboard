"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
}

function getIcon(iconName: string): LucideIcon {
  const iconMap = Icons as unknown as Record<string, LucideIcon>;
  return iconMap[iconName] ?? Icons.BookOpen;
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = getIcon(course.icon_name);

  return (
    <motion.article
      whileHover={{ scale: 1.018, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative min-h-[230px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.13),transparent_28%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.16),transparent_30%)] opacity-80" />

      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[inset_0_0_0_1px_rgba(34,211,238,0.22),0_0_40px_rgba(34,211,238,0.12)]" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
            <Icon className="h-6 w-6 text-cyan-100" />
          </div>

          <h3 className="text-lg font-semibold leading-tight">
            {course.title}
          </h3>

          <p className="mt-2 text-sm text-white/50">
            Continue your current module
          </p>
        </div>

        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-white/50">Progress</span>
            <span className="font-medium text-cyan-100">
              {course.progress}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}