# Swaraj Reddy — Engineering Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://swarajreddy10.github.io/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-38B2AC)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.38.0-purple)](https://motion.dev/)
[![Bun](https://img.shields.io/badge/Bun-1.3.14-FBF0DF)](https://bun.sh/)

Production site: [swarajreddy10.github.io](https://swarajreddy10.github.io/)

## Summary

I built this portfolio as the public home for my work. It shows the systems I ship across Go, Python, React, AWS, and the patient care application platform at Dexaminds, while keeping the presentation concise, quantified, and easy to scan.
The site follows the same structure I use when I present my work: direct, selective, and backed by a static-exported Next.js app with a reusable design system.

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

- **Framework**: Next.js 16.2.1 (static export)
- **UI**: React 19.2.4, Tailwind CSS v4.2.2
- **Animations**: Motion v12.38.0 (useScroll, useTransform, AnimatePresence)
- **Smooth scroll**: Lenis
- **Forms**: @formspree/react
- **Package manager**: Bun 1.3.14
- **Deployment**: GitHub Pages via gh-pages

## Highlights

- I built scroll-driven stacking cards for Projects, Skills, and the About timeline
- I added a split-panel preloader with an 11-language sequence that sets the tone fast
- I designed the SVG pathLength timeline with alternating cards and Motion-powered reveal states
- I created a CSS custom property design system with a golden olive palette and zero runtime theme switching
- I lazy-loaded below-fold sections to reduce initial JS payload
- I kept WCAG AA contrast, responsive layouts, and production-friendly accessibility defaults in place
- I added an accent-colored custom cursor and contact cards for a more distinctive visual system
- I ship the site as a static export on GitHub Pages

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

I build the static export and push the `out` directory to the `gh-pages` branch.

## Contact

- **Email**: [swarajchandra22@gmail.com](mailto:swarajchandra22@gmail.com)
- **LinkedIn**: [linkedin.com/in/swarajreddy](https://linkedin.com/in/swarajreddy)
- **GitHub**: [@swarajreddy10](https://github.com/swarajreddy10)
