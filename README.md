# Swaraj Reddy: Engineering Portfolio

[View the live portfolio](https://swarajreddy10.github.io/)

This repository contains the source for my engineering portfolio. It presents selected work across backend, full-stack, cloud, search, and applied AI engineering.

## Portfolio Contents

- Professional experience and engineering case studies, led by SpotMyJob and Osulo
- Project stories connecting technical constraints, implementation decisions, and measured results
- Selected technologies, certifications, résumé, and contact channels

## Implementation

| Area | Approach |
|---|---|
| Rendering | Server-rendered HTML with a Next.js static export |
| Styling | Responsive CSS with accessible color and focus tokens |
| Navigation | Semantic fragment links, keyboard-accessible mobile menu, and fixed-header offsets |
| Contact | Native HTML form with progressive Formspree submission |
| Metadata | Self-hosted fonts, canonical metadata, and generated Open Graph images |
| Delivery | GitHub Pages through the `gh-pages` branch |

The professional content is present in the exported HTML and remains readable without client-side JavaScript. Interactive behavior is limited to the mobile navigation and inline contact-form feedback.

## Run Locally

Requires Node.js 22, npm, and Git.

```bash
git clone https://github.com/swarajreddy10/swarajreddy10.github.io.git
cd swarajreddy10.github.io
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run build
npm audit
```

The production build is generated in `out/` as a static export.

## Deployment

```bash
npm run deploy
```

This builds the static site and publishes `out/` to the `gh-pages` branch.

## Repository Structure

```text
app/          Page composition, metadata, social images, and global styles
assets/       Portfolio and shared navigation data
components/   Semantic content sections and interactive controls
public/       Downloadable résumé and GitHub Pages assets
```

## Contact

Contact details and the inquiry form are available on the [live portfolio](https://swarajreddy10.github.io/#contact).