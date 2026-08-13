import Link from "next/link";
import { lessons } from "@/lib/lessons";

export const metadata = {
  title: "Watch — CathLab Mentor",
  description: "Voiced cath-lab lessons for cardiology trainees.",
};

export default function WatchIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <p className="eyebrow mb-3 text-coral">THE SCREENING ROOM</p>
      <h1 className="mentor-display text-4xl font-light tracking-[-0.07em] text-warm mb-2">
        Watch, then decide.
      </h1>
      <p className="mb-8 text-sm text-muted">
        Voiced lessons from the Cardiology Assistant textbook library.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/watch/${lesson.slug}`}
            className="group block overflow-hidden border border-card-border bg-card hover:border-accent/40"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lesson.poster}
              alt=""
              className="aspect-video w-full object-cover"
            />
            <div className="p-5">
              <p className="text-xs tracking-[0.16em] text-cyan">
                {lesson.durationLabel}
              </p>
              <h2 className="mt-2 text-xl font-normal tracking-[-0.04em] text-warm group-hover:text-cyan">
                {lesson.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {lesson.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
