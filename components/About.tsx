import SectionHeader from "./SectionHeader";
import { profile } from "@/lib/content";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32"
    >
      <SectionHeader eyebrow="About" title="More info." />
      <div className="max-w-3xl space-y-5 text-base sm:text-lg text-cream-soft leading-relaxed">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
