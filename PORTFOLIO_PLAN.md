# Portfolio — Current Codebase Reference
**Target:** swarajreddy10.github.io
**Stack:** Next.js 16 · React 19 · Motion (v12) · Tailwind v4 · Lenis
**Last updated:** 2026-07-14

---

## Design System

| Token | Value | Use |
|---|---|---|
| Base | `#FAF8F5` | Page background |
| Surface | `#F2EDE8` | Cards, panels, footer |
| Accent | `#C8622A` | Brand color (terracotta) |
| Signal | `#16A34A` | Status dot only |
| FG | `#1C1917` | Primary text (warm ink) |
| Muted | `#78716C` | Secondary text |
| Border | `#E7E2DC` | Hairlines |
| Shadow | `rgba(28,25,23,0.07)` | Card shadows |
| Display | `Playfair Display` | Serif — editorial, italic |
| Body | `Inter` | Clean, modern, readable |
| Mono | `JetBrains Mono` | Labels, tags, code |

### Motion Principles
| Interaction | Technique | Timing |
|---|---|---|
| Preloader exit | Two-panel vertical split | 0.75s `[0.76,0,0.24,1]` |
| Section heading reveals | Horizontal `clipPath` wipe | 0.7s `[0.33,1,0.68,1]` |
| Card reveals | `y: 20→0` + opacity | 0.5s `easeOut` |
| Stacking cards | `position: sticky` + `useScroll` scale `0.95→1` | Scroll-driven |
| Timeline SVG draw | `pathLength` on `motion.line` via `useTransform` | Scroll-driven |
| Cursor | Dual spring, `mixBlendMode: difference` | 100ms / 140ms spring |
| Preloader language switch | `y: 20→0` slide in, `y: -16` slide out | 0.2s per word |

`prefers-reduced-motion`: Preloader skips language cycle, exits instantly.

---

## Known Warnings / Non-Issues

| Warning | Root Cause | Status |
|---|---|---|
| Turbopack workspace root | Two `bun.lock` files: root `C:\Users\swara\` + project | Cosmetic, left unfixed |
| Lenis non-static position | Scroll offset calc needs positioned container | Fixed: `html { position: relative }` in `globals.css` |

---

## Section Architecture

### 1. PRELOADER
- Full-screen `var(--base)`, `z-index: 9999`
- 11-language sequence: EN, FR, ES, DE, IT, PT, HI, BN, TE, MR, TA
- Each word: `y: 20→0` slide in, `y: -16` slide out via `AnimatePresence mode="wait"`
- Name + role reveal after sequence with clip-from-below
- Exit: two panels (top `y:'-100%'` + bottom `y:'100%'`) — 0.75s
- Progress bar at bottom tracks count-up to 100
- `prefers-reduced-motion`: skips language cycle, shows name directly

### 2. NAV
- Full-width `position: fixed`, transparent until `scrollY > 40` then frosted (`rgba(250,248,245,0.92)` + `blur(16px)`)
- Left: "Swaraj Reddy" in Playfair Display italic — scrolls to top on click
- Right: links in page order (About, Work, Skills, Contact) + single pulsing green dot
- Active section tracking via `IntersectionObserver` on all section IDs
- Mobile: hamburger toggles a dropdown below the bar (not full-screen overlay)
- No "Available" text anywhere — dot is self-explanatory

### 3. HERO
- Full viewport height, centered single column, `max-width: 680px`
- Sequence: Name (Playfair italic, `clamp(52px,9vw,120px)`) → role line → one-liner → two CTAs → social icons
- Name animates via `y: '100%'→0` clip reveal
- No background canvas, no status pill, no facts panel
- `padding-top: 60px` to clear the fixed nav

### 4. ABOUT
- Single column, `max-width: 760px`, centered
- Bio: section label + italic heading + 2-sentence paragraph
- Timeline: SVG draw via `useScroll` + `useTransform` pathLength, 3 entries
- Each timeline card: role, company, period, badge pill, 1-2 bullet highlights
- Responsive: stacks naturally (already single column)

Timeline entries:
```
Sep 2025–Present | Full-Stack Software Developer | Dexaminds       | Full-time
Jun–Sep 2025     | Software Engineering Intern   | Dexaminds       | Internship
2021–2025        | B.Tech Computer Science       | GITAM University | Education
```

### 5. PROJECTS
- `StackCard` — `position: sticky`, `top: 72 + index * 18px`, scale `0.94→1` on scroll
- Watermark index number behind card (6% opacity)
- Each card: category badge, title, tagline, impact sentence, metric pills, tech tags, CTAs
- Live button (filled accent) + Code button (ghost) — Live hidden when URL equals GitHub

Projects:
| # | Title | Tagline |
|---|---|---|
| 01 | ResumeCanvas | AI-Powered Resume Builder |
| 02 | StageWay | Enterprise Event Management Platform |
| 03 | Portfolio | This website |

### 6. SKILLS
- Same stacking card pattern as Projects (`position: sticky`, scale on scroll)
- 6 domain cards, each: index, name, tagline left / skill pills right
- No repetition across domains — each skill appears exactly once

| # | Domain | Skills |
|---|---|---|
| 01 | Languages | Python, TypeScript, JavaScript, Java, SQL |
| 02 | Backend | FastAPI, Node.js/Express, Spring Boot, PostgreSQL, MongoDB, OAuth2/JWT |
| 03 | Frontend | React/Next.js, Tailwind CSS, Motion |
| 04 | DevOps & Cloud | Git/GitHub, Docker, GitHub Actions, CI/CD, AWS (EC2, S3, IAM, CloudWatch, Cognito, Bedrock) |
| 05 | Testing | Unit Testing, Integration Testing, JUnit, Pytest, Puppeteer |
| 06 | AI Integration & Tooling | Vertex AI Gemini, AWS Bedrock, Azure OpenAI, Groq AI, Claude Code, GitHub Codex, NotebookLM, Prompt Engineering, LLM Evaluation |

### 7. CONTACT
- Full-width headline: "Got a role, project, or idea? Let's talk."
- Two-column grid (stacks at 680px): left = 3 plain link rows, right = form
- Link rows: label + value + copy button (email) + arrow link button
- No contact cards, no status pill, no "Available" text
- Form: Name + Email grid, Message textarea, Send button
- Submits to Formspree `xpwzdrgo`

### 8. FOOTER
- Three-column grid: brand+tagline+socials | navigation links | contact links
- Copyright bar below: copyright text left, "Back to top" text button right
- Responsive: 3-col → 2-col at 700px → 1-col at 480px
- Copy: "Built with Next.js and Motion."

---

## Component Status

| File | Status | Notes |
|---|---|---|
| `app/layout.js` | Done | Playfair Display + Inter + JetBrains Mono |
| `app/globals.css` | Done | Light-mode tokens, `section + section` border, `html { position: relative }` |
| `app/page.js` | Done | `Hero → About → Projects → Skills → Contact → Footer` |
| `components/Preloader.jsx` | Done | 11-language sequence (EN+EU5+IN5), split-panel exit |
| `components/Nav.jsx` | Done | Full-width bar, About/Work/Skills/Contact order, dot only |
| `components/Hero.jsx` | Done | Centered, minimal, no canvas |
| `components/About.jsx` | Done | Bio + SVG draw timeline |
| `components/Projects.jsx` | Done | Stacking cards, 3 projects |
| `components/Skills.jsx` | Done | Stacking cards, 6 domains, no repetition |
| `components/Contact.jsx` | Done | Link rows + form, two-column |
| `components/Footer.jsx` | Done | 3-column grid, copyright bar |
| `components/Cursor.jsx` | Done | Dual spring, mixBlendMode difference |
| `components/SmoothScroll.jsx` | Done | Lenis wrapper |
| `assets/assets.js` | Done | 3 projects: ResumeCanvas, StageWay, Portfolio |
| `components/HeroCanvas.jsx` | Deleted | Three.js removed — not used |
| `components/IdentityStrip.jsx` | Deleted | Redundant stats section removed |
| `next.config.mjs` | Done | Static export, `output: 'export'` |
| `postcss.config.mjs` | Done | `@tailwindcss/postcss: {}` |

## Removed Dependencies
| Package | Reason |
|---|---|
| `three` | HeroCanvas deleted, no longer used |
| `@react-three/fiber` | HeroCanvas deleted |
| `@react-three/drei` | HeroCanvas deleted |
| `@react-three/postprocessing` | HeroCanvas deleted |
| `postprocessing` | HeroCanvas deleted |
