import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32"
    >
      <SectionHeader eyebrow="Projects" title="Things I'm working on." />
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className="group relative flex flex-col gap-4 rounded-2xl border border-line bg-ink-soft/60 p-6 transition-colors hover:border-sage/60"
          >
            <div className="flex items-center gap-3">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-sm object-contain"
              />
              <h3 className="font-display text-2xl text-cream">
                {project.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-cream-soft leading-relaxed">
              {project.blurb}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.links.length > 0 ? (
              <div className="flex flex-wrap gap-4 pt-2 text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sage hover:text-cream transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
