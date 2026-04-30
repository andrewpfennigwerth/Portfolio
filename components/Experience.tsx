import SectionHeader from "./SectionHeader";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32"
    >
      <SectionHeader eyebrow="Experience" title="Where I've worked." />
      <ol className="relative space-y-10 border-l border-line/60 pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.dates}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-2 size-2.5 rounded-full bg-sage ring-4 ring-ink"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display text-2xl text-cream">{job.role}</h3>
              <span className="text-sm text-muted">{job.dates}</span>
            </div>
            <p className="mt-1 text-sm text-cream-soft">
              {job.company}
              {job.location ? ` · ${job.location}` : null}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
