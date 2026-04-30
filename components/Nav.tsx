import Link from "next/link";
import { navLinks, profile } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-ink/60 border-b border-line/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-display text-lg tracking-tight text-cream hover:text-sage transition-colors"
        >
          {profile.initials}
        </Link>
        <ul className="hidden sm:flex items-center gap-8 text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeHref}
          className="hidden sm:inline-flex items-center rounded-full border border-line px-4 py-1.5 text-sm text-cream hover:border-sage hover:text-sage transition-colors"
        >
          Résumé
        </a>
      </nav>
    </header>
  );
}
