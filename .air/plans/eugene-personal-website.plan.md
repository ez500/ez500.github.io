Full plan at C:\Users\eugen\.claude\plans\create-a-futuristic-modern-prancy-aurora.md

## Goal
Astro static site, 5 pages, shared header/footer, clean minimal futuristic light/dark theme, automated GitHub Pages deploy at https://ez500.github.io.

## Confirmed decisions
- Framework: Astro (root user site — `site` only, no `base`)
- Aesthetic: clean minimal futuristic (light/dark toggle, whitespace, sleek sans-serif, subtle motion)
- Contact: Formspree form (placeholder endpoint; Eugene supplies real one)
- Pages: lean — Home, Projects, About Me, Contact, Resume
- About page leads with Eugene's LinkedIn "About" paragraph (provided verbatim) + résumé education/languages/hobbies

## File Changes (all Create — greenfield repo)
- Config: package.json, astro.config.mjs, tsconfig.json, .gitignore, .github/workflows/deploy.yml (withastro/action@v6 + actions/deploy-pages@v5)
- src/layouts/BaseLayout.astro; src/components/{Header,Footer,ThemeToggle,ProjectCard,Icon}.astro
- src/data/projects.ts — 6 projects: GreatStudier Rewrite for Web, Gatherpack (gatherpack.com), Rowdy/FRC461 (github.com/frc461), WL Hack Club (wl.hackclub.com), game plugins (Manhunt/Weaponmaster/greatbedoverlay), bigfatstudier (Discord app)
- src/styles/global.css (light/dark tokens, typography, cards/buttons, reduced-motion)
- src/pages/{index,projects,about,contact,resume}.astro
- public/resume.pdf (copied from OneDrive), public/favicon.svg

## Steps
1. Scaffold config + npm install (lockfile for withastro/action)
2. global.css → Icon/ThemeToggle → Header/Footer → BaseLayout
3. projects.ts → index (hero+summary+skills+awards) → projects → about (LinkedIn bio lead) → contact → copy resume.pdf + favicon → resume page
4. deploy.yml; manual: Pages Source = "GitHub Actions", swap Formspree endpoint

## Acceptance Criteria
- `npm run build` clean; dist/ has all 5 page HTMLs
- Shared Header (Home house icon, Projects, About Me, Contact Me, Resume) + Footer (LinkedIn, GitHub, ez500/ez500.github.io) on every page
- Theme toggle persists, no FOUC
- Projects lists all six with working links where available; About opens with LinkedIn paragraph
- Contact: Formspree form + mailto; Resume: embedded PDF + download
- Responsive at 375px; respects prefers-reduced-motion

## Verification
npm run dev click-through; npm run build && preview; confirm footer links + resume download; after push confirm Actions run + live site.

## Manual steps for Eugene
1. Repo Settings → Pages → Source = "GitHub Actions"
2. Sign up at Formspree, replace PLACEHOLDER endpoint in contact.astro