import DashboardShell from "@/components/dashboard/DashboardShell";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Course } from "@/lib/types";

export default async function HomePage() {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050507] px-6 text-white">
        <section className="max-w-xl rounded-3xl border border-red-500/20 bg-red-500/10 p-8 text-center">
          <h1 className="text-2xl font-semibold">Database connection failed</h1>

          <p className="mt-3 text-sm text-red-100/70">
            Please check your Supabase URL, anon key, and courses table.
          </p>

          <pre className="mt-6 overflow-auto rounded-2xl bg-black/40 p-4 text-left text-xs text-red-100">
            {JSON.stringify(error, null, 2)}
          </pre>
        </section>
      </main>
    );
  }

  return <DashboardShell courses={(data ?? []) as Course[]} />;
}