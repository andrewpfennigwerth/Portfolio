/**
 * AnimatedBackground
 * ------------------
 * This component is mounted once in `app/layout.tsx` and sits behind every
 * section (fixed, full-viewport, z-index 0). The actual animated effect is
 * intentionally left empty so you can drop in whatever you find — a Three.js
 * scene, a `<canvas>`-driven particle system, an SVG noise field, etc.
 *
 * Notes for whatever you drop in:
 *   - Wrap any client-only logic in a component with `"use client"` at the top
 *     and import it here. This wrapper itself stays a Server Component so it
 *     ships zero JS until you opt-in.
 *   - Keep it visually quiet — the design assumes a subtle background.
 *   - Respect `prefers-reduced-motion`.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(167,184,155,0.08),_transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,_rgba(62,92,70,0.10),_transparent_70%)]" />
      {/* DROP ANIMATION HERE */}
    </div>
  );
}
