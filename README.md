# Swaraj Reddy — Engineering Portfolio

[View the live portfolio](https://swarajreddy10.github.io/)

This repository contains the source for my engineering portfolio. It presents selected work across backend systems, data platforms, search, healthcare document processing, and product engineering through concise project case studies.

## Portfolio Contents

- Professional experience and engineering case studies, led by SpotMyJob and Osulo
- System constraints, architecture decisions, implementation work, and measurable outcomes
- Selected projects, certifications, résumé, and direct contact channels

## Implementation

| Area | Approach |
|---|---|
| Application | Next.js and React with a static export |
| Styling | Tailwind CSS and a custom-property design system |
| Interaction | Motion, GSAP, and Lenis |
| Contact | Formspree-backed contact form with client-side validation |
| Delivery | Static deployment to GitHub Pages |

The site uses section-level dynamic imports to keep the initial page focused, structured metadata for search and social previews, and native scrolling on mobile, coarse-pointer, and reduced-motion environments.

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
