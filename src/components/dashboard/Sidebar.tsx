"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  User,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Courses", icon: BookOpen },
  { label: "Analytics", icon: BarChart3 },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      <nav className="hidden border-r border-white/10 bg-white/[0.03] backdrop-blur-2xl md:flex md:w-20 lg:w-64">
        <div className="flex w-full flex-col px-3 py-5">
          <section className="mb-8 flex h-12 items-center gap-3 px-3">
            <div className="h-9 w-9 rounded-2xl bg-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.35)]" />
            <span className="hidden text-lg font-semibold tracking-tight lg:block">
              NovaLearn
            </span>
          </section>

          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.label;

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setActive(item.label)}
                    className="relative flex h-12 w-full items-center gap-3 rounded-2xl px-3 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-active"
                        className="absolute inset-0 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_28px_rgba(34,211,238,0.18)]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}

                    <Icon className="relative z-10 h-5 w-5 shrink-0" />
                    <span className="relative z-10 hidden lg:block">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <nav className="fixed bottom-4 left-4 right-4 z-50 rounded-3xl border border-white/10 bg-[#09090d]/90 p-2 backdrop-blur-2xl md:hidden">
        <ul className="flex justify-between">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => setActive(item.label)}
                  className="relative flex h-12 w-16 items-center justify-center rounded-2xl text-white/70"
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobile-active"
                      className="absolute inset-0 rounded-2xl bg-cyan-300/15"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <Icon className="relative z-10 h-5 w-5 text-white" />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}