export default function DashboardSkeleton() {
    return (
      <main className="min-h-screen bg-[#050507] p-6 text-white">
        <section className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="h-4 w-40 animate-pulse rounded-full bg-white/10" />
            <div className="mt-4 h-12 w-80 animate-pulse rounded-2xl bg-white/10" />
          </div>
  
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="h-[260px] animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.06] md:col-span-2" />
            <article className="h-[260px] animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.06] md:col-span-2" />
  
            <article className="h-[230px] animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.06]" />
            <article className="h-[230px] animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.06]" />
            <article className="h-[230px] animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.06]" />
            <article className="h-[230px] animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.06]" />
          </section>
        </section>
      </main>
    );
  }