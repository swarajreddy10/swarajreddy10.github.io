# Professional Knowledge Base : Swaraj Chandra Reddy M

> Public-safe reference for recruiters and collaborators. Last updated: September 2026.

---

## Identity

| Field | Value |
|---|---|
| Name | Swaraj Chandra Reddy M |
| Email | swarajchandra22@gmail.com |
| LinkedIn | https://linkedin.com/in/swarajreddy |
| GitHub | https://github.com/swarajreddy10 |
| Portfolio | https://swarajreddy10.github.io |
| Location | Hyderabad, India |
| Availability | Open to remote, hybrid, or on-site |

---

## Current Role

**Software Engineer @ Dexaminds** (Sep 2025 – Present)

### SpotMyJob

- Architected 3 independently deployable microservices for job-source governance, canonical job processing, and seeker search; owned the first 2 Go backends and delivered major search-engine work.
- Increased transformation throughput by 64% under fixed compute limits and improved vector-ingestion throughput by 17x while preserving measured search quality.
- Integrated Cloudflare Workers AI's Qwen3 0.6B model through an OpenAI-compatible gateway, generating 1,024-dimensional job and seeker vectors for pgvector hybrid retrieval.
- Reduced recurring external fetches by 43% while preserving replay-safe updates through evidence-age rotation, durable cursors, idempotent writes, and reconciliation.

### Osulo

- Built 2 independently deployable Go service planes for healthcare-document ingestion and Clinical Document Intelligence Service as the primary contributor across architecture, implementation, and AWS delivery.
- Integrated Vertex AI Gemini and Azure OpenAI GPT models through APIs to convert sanitized prescriptions and laboratory reports into schema-validated clinical fields within the measured 48.088-second extraction stage.
- Delivered a 100.613-second end-to-end workflow comprising 52.332-second ingestion, a 0.193-second handoff, provenance, review gates, idempotent state, and DLQ-backed recovery.
- Protected retries with 24-hour idempotency, PostgreSQL JSONB event history, versioned contracts, and reconciler-backed recovery across both service planes.

---

## Previous Experience

**Software Engineer Intern @ Dexaminds** (Jun 2025 – Sep 2025)
- Built reusable React/TypeScript components with lazy loading and code splitting; shipped tested code in Agile sprints across the full UI-to-API layer
- Tracked down and fixed 15+ production bugs across frontend and backend using Chrome DevTools and server logs, tracing each to root cause and deploying fixes to production

---

## Education

**GITAM University** — B.Tech in Computer Science (Aug 2021 – Jun 2025)
- CGPA: 8.2 / 10
- Location: Hyderabad

---

## Projects

### SpotMyJob — Job Intelligence and Matching Platform
- **Stack:** Go, TypeScript, Fastify, PostgreSQL, pgvector, Cloudflare AI Gateway, Workers AI, Qwen3 Embeddings, AWS, Terraform, Docker, GitHub Actions
- Designed an extensible backend that separates source governance, canonical job truth, and seeker-facing search through versioned contracts.
- Increased transformation throughput by 64% within fixed compute limits and improved vector ingestion by 17x without reducing measured retrieval quality.
- Integrated Cloudflare-hosted embeddings through an OpenAI-compatible API for versioned job and seeker vectors used in hybrid retrieval.
- Built hybrid retrieval, snapshot-based lifecycle processing, structured extraction, feed publication, and replay-safe downstream reconciliation.

### Osulo — Patient-Care Document Intelligence
- **Stack:** Go, PostgreSQL, Vertex AI Gemini, Azure OpenAI GPT models, AWS ECS, S3, EventBridge, Step Functions, SQS/DLQ, Terraform, Docker, GitHub Actions
- Built the document path from secure upload and sanitization through Vertex AI Gemini and Azure OpenAI GPT extraction in Clinical Document Intelligence Service.
- Processed prescriptions, laboratory reports, and related records through schema validation, provenance capture, and review gating before publication.
- Measured 52.332s ingestion and 48.088s clinical-document extraction, with a 0.193s handoff and 100.613s end-to-end runtime.

### ResumeCanvas — AI-Powered Resume Builder
- **Live:** https://www.resumecanvas.live/
- **GitHub:** https://github.com/swarajreddy10/Resume_Canvas
- **Stack:** Next.js 16, React 19, MongoDB, TypeScript, Bun, Groq AI (Llama 3.3 70B), Puppeteer, NextAuth.js, Zod, React Hook Form
- **Key metrics:** 95.2% test coverage (129 tests, 220 assertions), sub-100ms responses via caching, 60% query load reduction via 7 indexes
- **Features:** 8 AI features (ATS scoring, keyword analysis, cover letter generation, job matching), 5 resume templates, real-time preview and PDF export via Puppeteer, public sharing with custom slugs

### StageWay — Full-Stack Event Management Platform
- **Live:** https://stage-way.vercel.app/
- **GitHub:** https://github.com/swarajreddy10/StageWay
- **Stack:** Spring Boot 3.2, PostgreSQL, Next.js 16, Docker, OAuth2, JWT, Spring Security, Flyway, JPA/Hibernate, ZXing, Recharts
- **Key metrics:** 100% API test coverage, 3 permission roles, 12 Flyway migrations, QR code check-ins via ZXing
- **Features:** 12 RESTful endpoints with Spring Security, HikariCP connection pooling, Recharts analytics, automated waitlist management, Docker multi-stage builds and CI/CD

## Working Style

- Wrote ADRs and architecture notes so boundary decisions, workflow rules, and rollout assumptions stayed reviewable.
- Carried features from design to implementation to runtime verification instead of handing them off between separate owners.
- Debugged across browser, API, worker, queue, database, and infra layers using logs, Step Functions history, queue state, and deployment metadata.
- Used AI as a drafting and exploration aid, while keeping architecture, code review, testing, and deployment decisions under direct control.
- Moved between frontend, backend, and infrastructure work as requirements changed, which kept delivery coherent across the full stack.

## ATS / Market Patterns

- Present SpotMyJob first and Osulo second; both represent primary-contributor work.
- Target each role from the same verified proof points, then reorder backend, platform, search, reliability, and healthcare evidence around the job description.
- Use a standard, easy-to-scan format with strong action verbs, tight bullet lines, and no decorative clutter that can distract humans or ATS parsers.
- Lead with accomplishments and impact, not responsibilities; describe what changed, how it was built, and what is now true because of the work.
- Use durable relative improvements and benchmark results without exposing confidential platform scale or infrastructure details.
- Keep the highest-signal nouns visible: Go, PostgreSQL, pgvector, Fastify, AWS, Terraform, CI/CD, EventBridge, SQS/DLQ, hybrid search, contracts, idempotency, provenance, observability, and recovery.
- For enterprise or regulated screens, emphasize auditability, replay safety, boundary control, and recoverable async processing.
- For product/backend screens, emphasize ownership, shipping speed, cross-layer debugging, and end-to-end delivery.
- Follow MIT-style resume principles: tailor to the posting, use a standard format, write with specificity and strong action verbs, quantify accomplishments, and proofread carefully.

### Portfolio — swarajreddy10.github.io
- **Live:** https://swarajreddy10.github.io
- **GitHub:** https://github.com/swarajreddy10/swarajreddy10.github.io
- **Stack:** Next.js 16, React 19, Motion v12, Tailwind CSS v4, Lenis, @formspree/react
- **Lighthouse:** 96 Accessibility, 100 Best Practices, 100 SEO — 1.0s FCP, 1.7s LCP, 20ms TBT, 0 CLS
- **Features:** Scroll-driven stacking cards (Projects, Skills, About timeline), SVG pathLength timeline, 11-language preloader, CSS custom property design system (golden olive palette), dynamic imports for below-fold sections, WCAG AA contrast, creative social link cards in Contact, accent-colored custom cursor

---

## Technical Skills

### Languages
Go, Python, TypeScript, JavaScript, Java, SQL

### Frontend
React, Next.js, Tailwind CSS, Motion (Framer Motion), Responsive Design, WCAG/ARIA Accessibility

### Backend
Go (net/http, pgx v5), Fastify, Node.js, FastAPI, Spring Boot, REST APIs, Microservices, JWT/OAuth2, OpenAPI 3.1.0, idempotent processing, cursor pagination

### Databases
PostgreSQL, pgvector, full-text search, GIN and HNSW indexing, Prisma, pgx v5, Goose v3, MongoDB, JPA/Hibernate, Flyway, JSONB workflow history, query optimization

### Infrastructure & Cloud
Terraform, Docker multi-stage builds, GitHub Actions CI/CD with OIDC, AWS (ECS, RDS, S3, EventBridge Scheduler, Step Functions, SQS/DLQ, Service Connect, ALB, KMS, Secrets Manager, ECR, CloudWatch, IAM)

### Search and Data Processing
Hybrid retrieval, Reciprocal Rank Fusion, semantic search, structured skill matching, snapshot lifecycle, deduplication, keyset pagination, bounded concurrency, streaming ingestion

### AI / LLM Integration
Cloudflare AI Gateway, Workers AI, Qwen3 Embeddings, embedding APIs, OpenAI-compatible APIs, LLM API integration, structured document extraction, schema-validated outputs, Vertex AI Gemini models, Azure OpenAI GPT models, AWS Bedrock, Groq AI, multi-LLM routing, Botpress

### AI-Assisted Development
Claude Code, GitHub Codex, NotebookLM, Prompt Engineering, LLM Evaluation

### Testing
Unit Testing, Integration Testing, JUnit, Pytest, Puppeteer, Bun Test, Playwright E2E

---

## Certifications

- IBM Full Stack Software Developer (Coursera, Jan 2025) — https://drive.google.com/file/d/1I9ggwsrVswrxcgNPkRfWYNjdp3h5xorv/view
- AWS Cloud Foundations & Cloud Architecting (AWS Academy, May–Jun 2024) — https://drive.google.com/file/d/1I9ggwsrVswrxcgNPkRfWYNjdp3h5xorv/view
- MongoDB Python Developer Path (MongoDB University, Nov 2025) — https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/2fef1e9a-2ef7-45ea-bdf7-9fde67df65a8-swaraj-chandra-reddy-m-2b64be3a-1a61-4210-9354-4051d4ad0677-certificate.pdf

---

## Soft Skills & Working Style

- Owns features end-to-end from requirement to production
- Communicates clearly with stakeholders, internal and external
- Keeps pace with the field by reading, building, and engaging with dev communities daily
- Genuinely curious about how things are built and always trying something new
- Open to constructive feedback during code reviews
- Adapts quickly to new stacks and changing requirements
- Available for remote, hybrid, or on-site roles
