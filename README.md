# ElevateCross — Microsoft Power Platform & AI Solutions

A modern, premium marketing site for a Microsoft Power Platform, SharePoint, and AI automation
consultancy, built with React, TypeScript, Vite, Tailwind CSS, React Router, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

Other scripts:

```bash
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint       # run oxlint
```

## Project Structure

```
src/
  components/
    ui/         reusable primitives (Button, Badge, Container, Reveal, ThemeToggle, ...)
    layout/     Navbar, Footer, Layout, PageHero, ScrollToTop
    cards/      ServiceCard, CaseStudyCard, IndustryCard, BlogCard
    forms/      ContactForm
    home/       homepage-only sections (Hero, TrustStrip, CopilotSection, ...)
    icons/      brand/social icon glyphs not covered by lucide-react
  pages/        one component per route
  data/         mock content, separated from UI (siteConfig, services, caseStudies, ...)
  hooks/        useTheme (light/dark context), useSEO (per-page meta tags)
  lib/          cn (className helper), api (contact form submission)
  types/        shared TypeScript interfaces
```

## Content & Configuration

Company info, navigation, and social links live in `src/data/siteConfig.ts`. All other page
content (services, solutions, industries, case studies, training, blog posts) is defined in
`src/data/*.ts` as typed mock data, kept separate from the UI components that render it.

Case studies are explicitly labeled **Concept Project** — they are illustrative builds, not
commissioned client work, and no clients, testimonials, certifications, or statistics are
represented on this site.

## Future Integration Points

The architecture is intentionally decoupled from any backend so real data sources can be wired in
later without UI changes:

- `src/lib/api.ts` — swap the mock `submitContactForm` implementation for a Power Automate HTTP
  trigger, Azure Function, or Microsoft Graph call.
- `src/data/blog.ts` / `src/pages/Blog.tsx` / `src/pages/BlogPost.tsx` — designed to be replaced by
  content fetched from SharePoint or Microsoft Graph.
- `src/types/index.ts` — shared types to keep future API responses aligned with the UI.

## Design System

- Light/dark theming via CSS custom properties and a `.dark` class toggle (`src/hooks/useTheme.tsx`,
  tokens defined in `src/index.css`), respecting the user's saved preference and system setting.
- Motion via Framer Motion, with `prefers-reduced-motion` respected globally.
- Tailwind CSS v4 (CSS-first `@theme` configuration, no `tailwind.config.js`).
