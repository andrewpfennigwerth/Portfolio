import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { profile } from "@/lib/content";

type IconProps = SVGProps<SVGSVGElement>;

function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.71 1.27 3.37.97.1-.75.4-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.78 0c2.21-1.5 3.18-1.19 3.18-1.19.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55 4.56-1.54 7.85-5.85 7.85-10.94C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

export default function Contact() {
  const channels: {
    label: string;
    href: string;
    value: string;
    Icon: ComponentType<IconProps>;
  }[] = [
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      value: profile.email,
      Icon: Mail as unknown as ComponentType<IconProps>,
    },
    {
      label: "GitHub",
      href: profile.github,
      value: profile.github.replace("https://", ""),
      Icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      value: profile.linkedin.replace("https://www.", ""),
      Icon: LinkedinIcon,
    },
  ];

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32"
    >
      <SectionHeader eyebrow="Contact" title="Reach out." />
      <div className="grid gap-12 md:grid-cols-5">
        <p className="md:col-span-3 text-base sm:text-lg text-cream-soft leading-relaxed">
          I&apos;m interested in all types of opportunities from freelancing to full time positions. I am also open to collaboration on projects. Please don't hesitate to reach out!
        </p>
        <ul className="md:col-span-2 space-y-3">
          {channels.map(({ label, href, value, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-xl border border-line px-4 py-3 transition-colors hover:border-sage/60"
              >
                <Icon className="size-4 text-sage" />
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-muted">
                    {label}
                  </span>
                  <span className="text-sm text-cream group-hover:text-sage transition-colors">
                    {value}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
