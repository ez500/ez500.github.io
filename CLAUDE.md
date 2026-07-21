# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Eugene Zhang's personal website — a static Astro site deployed to GitHub Pages at https://ez500.github.io. Five pages (Home, Projects, About, Contact, Resume) sharing one layout.

## Commands

```bash
npm run dev       # local dev server with HMR
npm run build     # static build to dist/ (also the acceptance check)
npm run preview   # serve the built dist/ locally
```

There are no tests, linter, or formatter configured.

**Run these inside WSL, not from the Windows side.** npm/node break when invoked against the `\\wsl.localhost\...` UNC path. `cd` into the project via the Linux path (`/home/bigfatmidget/Projects/ez500`) first.

## Architecture

Astro 5, static output, zero runtime JS framework — the only client JS is small inline `<script>` blocks. No UI dependencies beyond `astro` itself.

- **`astro.config.mjs`** — this is a GitHub *user* site (served from the domain root), so only `site` is set and there is intentionally no `base` path. Don't add one; internal links assume root-relative paths.
- **`src/layouts/BaseLayout.astro`** — the single wrapper for every page. Owns `<head>` (SEO/OG tags, fonts), the pre-paint theme init script (reads `localStorage.theme` before render to avoid FOUC), the `.reveal` IntersectionObserver scroll animation, and slots in `Header` + `Footer`. Pages pass `title`/`description` props.
- **`src/styles/global.css`** — all design tokens are CSS custom properties on `:root`, overridden under `[data-theme="dark"]`. Theme is toggled by setting the `data-theme` attribute on `<html>` (see `ThemeToggle.astro`). Component styles live in scoped `<style>` blocks; global tokens/typography/reduced-motion live here.
- **`src/components/Icon.astro`** — dependency-free inline-SVG icon set (lucide-style paths keyed by name). Add new icons by extending the `name` union and the `paths` map. Icons inherit color via `currentColor`.
- **`src/data/projects.ts`** — typed content source (`Project[]`) for the Projects page. Edit project content here, not in markup.

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml` (`withastro/action@v6` → `actions/deploy-pages@v5`). GitHub Pages Source must be set to "GitHub Actions" in repo settings.

## Notes

- The contact form posts to a live Formspree endpoint hardcoded in `src/pages/contact.astro`.
- Keep the site responsive to 375px and respect `prefers-reduced-motion` (reveal animations must no-op).
