# Swaraj Reddy: Engineering Portfolio

[View the live portfolio](https://swarajreddy10.github.io/)

This repository contains the source for my engineering portfolio. It presents selected work in Go backend services, PostgreSQL search, AWS deployment, AI-assisted clinical document extraction, and React/Next.js interfaces.

## Portfolio Contents

- Professional experience and engineering case studies, led by SpotMyJob and Osulo
- Project case studies that connect technical constraints, implementation decisions, and measured results
- Selected projects, certifications, résumé, and direct contact channels

## Implementation

| Area | Approach |
|---|---|
| Application | Next.js and React with a static export |
| Styling | Tailwind CSS and a custom-property design system |
| Interaction | Motion, GSAP, and Lenis |
| Contact | Formspree-backed contact form with client-side validation |
| Delivery | Static deployment to GitHub Pages |

Below-fold sections are split into separate client bundles. Structured metadata supports search and social previews. Mobile, coarse-pointer, and reduced-motion users receive native scrolling.

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
```

The production build is generated in `out/` as a static export.

## Deployment

```bash
npm run deploy
```

This builds the static site and publishes `out/` to the `gh-pages` branch.

## Repository Structure

```text
app/          Application entry point, metadata, and global styles
components/   Portfolio sections and interactive UI
public/       Static assets, favicon, and résumé
```

## Contact

Contact details and the enquiry form are available on the [live portfolio](https://swarajreddy10.github.io/#contact).
