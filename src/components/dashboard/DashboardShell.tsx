"use client";

import type { Course } from "@/lib/types";
import Sidebar from "./Sidebar";
import BentoGrid from "./BentoGrid";

interface DashboardShellProps {
  courses: Course[];
}

export default function DashboardShell({ courses }: DashboardShellProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050507] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.14),transparent_35%)]" />

      <div className="relative flex min-h-screen">
        <Sidebar />

        <main className="flex-1 px-4 pb-24 pt-5 md:px-6 lg:pl-4 lg:pr-8">
          <BentoGrid courses={courses} />
        </main>
      </div>
    </div>
  );
}