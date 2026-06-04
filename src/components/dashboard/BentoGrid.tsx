"use client";

import { motion } from "framer-motion";
import type { Course } from "@/lib/types";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";

interface BentoGridProps {
  courses: Course[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 24,
    },
  },
};

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <section aria-label="Student dashboard" className="mx-auto max-w-7xl">
      <header className="mb-6">
        <p className="text-sm text-cyan-200/70">Student Dashboard</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-5xl">
          Your learning universe
        </h1>
      </header>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 xl:col-span-2"
        >
          <HeroTile />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="md:col-span-2 xl:col-span-2"
        >
          <ActivityTile />
        </motion.div>

        {courses.map((course) => (
          <motion.div key={course.id} variants={itemVariants}>
            <CourseCard course={course} />
          </motion.div>
        ))}
      </motion.section>
    </section>
  );
}