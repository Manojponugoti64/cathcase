import { notFound } from "next/navigation";
import Link from "next/link";
import { getLesson, lessons } from "@/lib/lessons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Lesson not found" };
  return {
    title: `${lesson.title} — CathLab Mentor`,
    description: lesson.subtitle,
  };
}

export default async function WatchLessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <p className="eyebrow mb-3 text-coral">WATCH / VOICED LESSON</p>
      <h1 className="mentor-display text-3xl font-light tracking-[-0.07em] text-warm sm:text-4xl">
        {lesson.title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
        {lesson.subtitle}
      </p>
      <p className="mt-2 text-xs text-quiet">
        {lesson.durationLabel} · voiced walkthrough
      </p>

      <div className="mt-8 overflow-hidden border border-card-border bg-black">
        <video
          className="aspect-video w-full"
          controls
          playsInline
          preload="metadata"
          poster={lesson.poster}
        >
          <source src={lesson.videoSrc} type="video/mp4" />
          Your browser does not support this video.
        </video>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="border border-card-border bg-card p-5">
          <p className="eyebrow mb-3 text-cyan">Sources in this film</p>
          <ul className="space-y-2 text-sm text-muted">
            {lesson.sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="border border-card-border bg-card p-5">
          <p className="eyebrow mb-3 text-coral">Next</p>
          <p className="text-sm leading-6 text-muted">
            {lesson.disclaimer}
          </p>
          {lesson.relatedCaseSlug && (
            <Link
              href={`/cases/${lesson.relatedCaseSlug}`}
              className="mentor-cta mt-5"
            >
              Practice the LAD–OM1 case <span>↗</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
