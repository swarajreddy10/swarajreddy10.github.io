# Swaraj Reddy — Personal Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://swarajreddy10.github.io/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12-purple)](https://motion.dev/)
[![Bun](https://img.shields.io/badge/Bun-1.3-FBF0DF)](https://bun.sh/)

Live at [swarajreddy10.github.io](https://swarajreddy10.github.io/)

## Lighthouse Scores

| Metric | Score |
|---|---|
| Performance | 92 |
| Accessibility | 96 |
| Best Practices | 100 |
| SEO | 100 |
| FCP | 1.0s |
| LCP | 1.7s |
| TBT | 20ms |
| CLS | 0 |

## Tech Stack

- **Framework**: Next.js 16 (static export)
- **UI**: React 19, Tailwind CSS v4
- **Animations**: Motion v12 (useScroll, useTransform, AnimatePresence)
- **Smooth scroll**: Lenis
- **Forms**: @formspree/react
- **Package manager**: Bun
- **Deployment**: GitHub Pages via gh-pages

## Features

- Scroll-driven stacking cards for Projects, Skills, and About timeline
- Split-panel preloader with 11-language sequence (EN, HI, TE, BN, MR, TA, FR, ES, DE, IT, PT)
- SVG pathLength draw timeline in About section with alternating flip cards
- Color-coded experience badges (Full-time = green, Internship = gold, Education = muted)
- Creative social link cards in Contact with icon badge, hint text, and hover animations
- CSS custom property design system — golden olive palette, 8 tokens, zero runtime JS for theming
- Dynamic imports for all below-fold sections — reduces initial JS payload
- Accent-colored custom cursor with dual spring trailing ring
- WCAG AA contrast ratios throughout
- Fully responsive — mobile, tablet, desktop
- Static export — no server required, deploys to GitHub Pages

## Run Locally

Requires [Bun](https://bun.sh/) and [Git](https://git-scm.com/).

```bash
git clone https://github.com/swarajreddy10/swarajreddy10.github.io.git
cd swarajreddy10.github.io
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

```bash
bun run deploy
```

Builds the static export and pushes the `out` directory to the `gh-pages` branch.

## Contact

- **Email**: [swarajchandra22@gmail.com](mailto:swarajchandra22@gmail.com)
- **LinkedIn**: [linkedin.com/in/swarajreddy](https://linkedin.com/in/swarajreddy)
- **GitHub**: [@swarajreddy10](https://github.com/swarajreddy10)
