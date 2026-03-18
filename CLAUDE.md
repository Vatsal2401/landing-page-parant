# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Next.js dev server on :3000
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is configured.

## What This Is

**Sparq** — a portfolio/showcase site for a web design studio. It presents demo websites built for clients across different industries, with a full marketing landing page and a filterable project gallery.

## Architecture

**Next.js 15 App Router, React 19, Tailwind CSS v4, TypeScript. No external state management, no API routes, no database.**

### Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Marketing landing page (Navbar → sections → Footer) |
| `/work` | `app/work/page.tsx` + `WorkClient.tsx` | Filterable project gallery (server shell + client component for interactivity) |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | Project detail page, statically generated via `generateStaticParams` |

### Data Layer

All project data lives in **`data/projects.ts`** as a static array of `Project` objects (typed in `types/project.ts`). `getProjectBySlug` is a helper exported from the same file. There is no CMS or external data source.

Adding a new project = adding an entry to `data/projects.ts`. The `[slug]` page auto-generates from this array at build time.

### Filtering

`lib/filters.ts` provides pure utility functions (`applyFilters`, `countByCategory`, `countByIndustry`) and label/constant exports for categories and industries. The `WorkClient` component owns filter state client-side and calls these helpers.

### Demo Embeds

Static HTML demo sites live under `public/demos/<slug>/index.html`. The `BrowserFrame` component renders them in an `<iframe>` when `demoPath` is set on a project. Screenshots live under `public/screenshots/`.

### Styling

- **Tailwind v4** via `@import "tailwindcss"` in `globals.css`
- CSS custom properties (defined in `:root`) are used throughout for colors and spacing — prefer these over hard-coded values
- Two Google Fonts: `Inter` (body, `--font-body`) and `Plus Jakarta Sans` (display/headings, `--font-display`)
- Animation utility classes: `.animate-fade-up`, `.animate-fade-in`, `.animate-scale-in` — apply via `className`, control delay with inline `animationDelay` style

### Key Components

- `BrowserFrame` / `PhoneFrame` — decorative device frames wrapping demo iframes or images
- `ScreenshotGallery` — lightbox-style image gallery for multi-screenshot projects
- `ProjectCard` — card used in both `/work` grid and "More Projects" section on detail pages
- `ThumbnailFallback` — gradient + emoji placeholder when no thumbnail image exists
- `StickyWhatsApp` — floating WhatsApp CTA button (marketing page only)

### Project Type Shape

```ts
interface Project {
  id, slug, title, tagline, description
  category: 'landing-page' | 'saas' | 'mobile-app' | 'desktop-app' | 'ecommerce' | 'website'
  industry: 'healthcare' | 'fitness' | 'education' | 'food-beverage' | 'tech' | 'finance' | 'retail'
  featured, accentColor, gradientFrom, gradientTo, emoji
  thumbnail?       // public path to image
  screenshots?     // array of public paths, shown in ScreenshotGallery
  demoPath?        // "/demos/[slug]/index.html" — loaded in BrowserFrame iframe
  liveUrl?
  techStack, year
  highlights: [string, string, string]   // exactly 3
  status: 'live' | 'demo' | 'concept'
}
```
