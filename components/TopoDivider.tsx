/**
 * Subtle topographic-style divider — a few stacked, irregular sine-ish lines
 * meant to evoke contour lines on a topo map. Decorative only.
 */
export default function TopoDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-5xl px-6"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-10 w-full text-sage/25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 30 C 200 10, 400 50, 600 30 S 1000 10, 1200 30" />
        <path d="M0 38 C 220 22, 420 52, 600 38 S 980 22, 1200 38" opacity="0.7" />
        <path d="M0 22 C 180 8, 380 40, 600 22 S 1020 6, 1200 22" opacity="0.5" />
      </svg>
    </div>
  );
}
