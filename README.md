# Portfolio

A sleek, minimal one-page portfolio built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS. Dark base with sage / moss / clay accents — quiet, editorial, with a hint of outdoors.

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first, configured in `app/globals.css`)
- **Icons:** `lucide-react` (with inline SVGs for GitHub / LinkedIn)
- **Fonts:** Inter (sans) + Fraunces (display serif), via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Editing your content

All copy lives in **one file**: `lib/content.ts`. Edit it and the whole site updates.

It exports:

| Export       | What it controls                                          |
| ------------ | --------------------------------------------------------- |
| `profile`    | Name, tagline, location, summary, about paragraphs, links |
| `skills`     | Toolkit chips grouped by category                         |
| `navLinks`   | Top-nav anchor links                                      |
| `projects`   | Project cards (title, blurb, tags, links)                 |
| `experience` | Timeline entries (role, company, dates, bullets)          |

Anything containing `PLACEHOLDER` is fill-in-the-blank.

Drop your résumé at `public/resume.pdf` and the nav button + Hero will pick it up automatically.

## Animated background

The site renders a single `<AnimatedBackground />` (in `app/layout.tsx`) that sits behind every section.

Currently it's just a soft sage/moss radial glow. To add your effect, edit `components/AnimatedBackground.tsx` and replace the `{/* DROP ANIMATION HERE */}` slot with your animation (e.g. a Three.js scene, particle canvas, SVG noise, etc.).

If your effect needs browser APIs, put it in a separate component with `"use client"` at the top and import it into `AnimatedBackground.tsx`.

## Theme tokens

Palette and fonts are defined as CSS variables in `app/globals.css` and exposed to Tailwind via `@theme`. To change colors, edit the `:root` block. The available utility classes are:

- Colors: `bg-ink`, `bg-ink-soft`, `text-cream`, `text-cream-soft`, `text-muted`, `text-sage`, `text-moss`, `text-clay`, `border-line`
- Fonts: `font-sans` (Inter), `font-display` (Fraunces)

## Project structure

```
app/
  layout.tsx          # fonts, metadata, mounts <AnimatedBackground/>
  page.tsx            # composes sections in scroll order
  globals.css         # tailwind + theme tokens
components/
  Nav.tsx
  Hero.tsx
  About.tsx
  Projects.tsx
  Experience.tsx
  Contact.tsx
  Footer.tsx
  AnimatedBackground.tsx
  SectionHeader.tsx
  TopoDivider.tsx
lib/
  content.ts          # single source of truth for all copy
public/
  resume.pdf          # add your résumé here
```

## Deploying

The fastest path is [Vercel](https://vercel.com):

1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Accept the defaults — Next.js is detected automatically.

It will also deploy fine on Netlify or Cloudflare Pages. For static-only hosting (e.g. GitHub Pages) add `output: "export"` to `next.config.ts`.
