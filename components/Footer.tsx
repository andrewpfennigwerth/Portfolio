import { profile } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-line/60">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-2 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p>
          Built with Next.js & Tailwind · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
