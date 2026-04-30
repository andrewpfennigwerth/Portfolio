import { ArrowDown, MapPin } from "lucide-react";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[88vh] w-full max-w-5xl flex-col justify-center px-6 py-24"
    >
      <p className="mb-6 inline-flex items-center gap-2 text-sm text-muted">
        <MapPin className="size-3.5 text-sage" aria-hidden="true" />
        {profile.location}
      </p>
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-cream">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl font-display text-2xl sm:text-3xl text-cream-soft italic">
        {profile.tagline}
      </p>
      <p className="mt-8 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
        {profile.summary}
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-ink hover:bg-sage transition-colors"
        >
          See projects
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-cream hover:border-sage hover:text-sage transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
