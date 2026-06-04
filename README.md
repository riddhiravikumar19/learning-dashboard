# NovaLearn — Next-Gen Learning Dashboard

A futuristic, dark-mode-only student dashboard built for the Frontend Intern Challenge. The dashboard uses a Bento Grid layout, animated Framer Motion interactions, and live course data fetched from Supabase using Next.js Server Components.

## Live Demo

Vercel link will be added after deployment.

## Tech Stack

* Next.js App Router
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React

## Features

* Dark futuristic Bento Grid dashboard
* Slim responsive sidebar
* Mobile bottom navigation
* Supabase-powered dynamic course cards
* Server Component data fetching
* Loading skeleton using `loading.tsx`
* Graceful database error handling
* Staggered page entrance animations
* Spring-based hover interactions
* Sidebar active-state animation using Framer Motion `layoutId`
* Animated course progress bars
* Responsive desktop, tablet, and mobile layouts

## Supabase Schema

The dashboard expects a `courses` table with the following fields:

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default now()
);
```

## Example Seed Data

```sql
insert into courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 75, 'Atom'),
  ('AI Foundations', 58, 'Brain'),
  ('Database Design', 82, 'Database'),
  ('Motion Design Systems', 43, 'Sparkles');
```

## Environment Variables

Create a `.env.local` file using `.env.example`.

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Do not commit your real `.env.local` file.

## Architecture

The project uses the Next.js App Router with a clear server/client component split.

`src/app/page.tsx` is a Server Component. It connects to Supabase, fetches course data from the `courses` table, handles database errors, and passes the typed course payload to the dashboard UI.

The animated UI components are Client Components because they use Framer Motion. Components such as `DashboardShell`, `Sidebar`, `BentoGrid`, `HeroTile`, `ActivityTile`, and `CourseCard` are separated for modularity and readability.

## Animation Strategy

Animations are designed to avoid layout shifts. Entrance animations and hover states use transform and opacity-based changes. Bento tiles stagger in sequentially after data is loaded. Hover interactions use Framer Motion spring physics for a smooth, natural feel.

The sidebar uses Framer Motion `layoutId` to animate the active navigation background between items.

## Responsive Design

* Desktop: full sidebar and four-column Bento Grid
* Tablet: compact icon sidebar and two-column grid
* Mobile: bottom navigation and single-column stacked cards

## Run Locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
```

## Challenges Faced

The main challenge was balancing rich animations with performance. To avoid layout shifts, the animation system uses transform and opacity instead of layout-changing properties. Another key decision was keeping Supabase data fetching inside a Server Component while isolating Framer Motion interactions inside Client Components.
