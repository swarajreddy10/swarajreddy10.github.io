# Swaraj Chandra Reddy M — Professional Knowledge Base

> Reference file for AI tools, recruiters, and collaborators. Last updated: April 2026.

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

- Owned end-to-end delivery of Osulo's patient file upload ingestion service in Go 1.26: designed the OpenAPI 3.1.0 contract, implemented a 6-state file lifecycle, presigned S3 URL generation, EventBridge + Step Functions orchestration, 7 Terraform 1.14.8 modules across ECS Fargate/SQS/KMS, and a 5-stage GitHub Actions pipeline — from greenfield to production with no external ops dependency
- Designed mobile auth microservice for Osulo using AWS Cognito with OAuth2 and JWT; defined service boundaries, API contracts, and token lifecycle flows documented with Mermaid UML diagrams
- Built Node.js/TypeScript microservices in Docker at 99.5% uptime and 85% test coverage; configured GitHub Actions CI/CD pipelines and automated contact workflows using Botpress
- Engineered a Python/FastAPI document-intelligence pipeline for Osulo routing across Vertex AI Gemini, Azure OpenAI, and AWS Bedrock by document complexity, reaching 90%+ accuracy on FHIR R4 output

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

### Osulo Upload Ingestion Service — Dexaminds (Client: Osulo)
- **Stack:** Go 1.26, PostgreSQL 18, pgx v5, Goose v3, AWS ECS Fargate, S3, EventBridge, Step Functions, SQS, ALB, KMS, Secrets Manager, ECR, CloudWatch, Terraform 1.14.8, Docker multi-stage (golang:1.26 → distroless/base-debian12:nonroot), GitHub Actions, OpenAPI 3.1.0, JSON Schema
- **Key metrics:** 5 Go binaries (api, db-migrate, promotion-task, sanitization-worker, workflow-callback), 7 Terraform modules, 6 REST endpoints, 8 DB migrations, 5-stage CI/CD; ~85% container image footprint reduction; ~90% infra provisioning time reduction; ~90% developer setup time reduction; 100% manual upload promotion steps eliminated
- **Features:** 6-state file lifecycle (prepared → uploaded → malware_scanned → promoted → processing_ready → blocked), presigned S3 URL generation, idempotency-key enforcement via 24-hr PostgreSQL TTL with conflict-safe two-phase claim, EventBridge custom bus with malware-verdict-filtered rules, Step Functions orchestration (300s timeout, 3-retry 2x exponential backoff), SQS DLQ (3 max-receive-count, KMS-encrypted), 4-MIME validation (PDF/JPEG/PNG/HEIC) with configurable size bounds, immutable JSONB event history indexed by item_id + occurred_at DESC, trigger-based session rollups, X-Correlation-ID tracing, Bearer token circuit breaker (5-failure threshold, 30s open window), least-privilege IAM per ECS task type, KMS encryption across all 3 S3 bucket tiers, no public IPs on any task, single `make up` local dev entrypoint via Docker Compose + Makefile + built-in Swagger UI

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
Go (net/http, pgx v5), Node.js (Express), FastAPI, Spring Boot, REST APIs, Microservices, JWT/OAuth2, OpenAPI 3.1.0, idempotency patterns, circuit breaker

### Databases
PostgreSQL 18, MongoDB, pgx v5, Goose v3, JPA/Hibernate, Flyway, JSONB event sourcing, indexing and query optimisation

### Infrastructure & Cloud
Terraform 1.14.8, Docker multi-stage builds, GitHub Actions CI/CD, AWS (ECS Fargate, S3, EventBridge, Step Functions, SQS, ALB, KMS, Secrets Manager, ECR, CloudWatch, Cognito, Bedrock, EC2, IAM)

### AI / LLM Integration
Vertex AI Gemini, Azure OpenAI, AWS Bedrock, Groq AI, multi-LLM routing, structured output pipelines, Botpress

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

## Resume Achievement Bullets — Osulo Upload Ingestion Service @ Dexaminds (by JD Theme)

> Work done for the Osulo client at Dexaminds. Copy-paste ready bullets targeted at specific JD types. All version numbers reflect latest stable open-source releases (Go 1.26, PostgreSQL 18, Terraform 1.14.8) verified April 2026.

### Full-Stack Ownership / E2E Scaffolding
*(Founding engineer, generalist SWE, platform engineer JDs)*

- Took full ownership of a greenfield patient file ingestion platform — from OpenAPI 3.1.0 contract design through Go 1.26 service implementation, Docker containerization, Terraform IaC, and GitHub Actions CI/CD — delivering across the entire stack in a fast-paced environment.
- Structured the service from initial scaffold to production-ready state: 5 Go binaries (api, db-migrate, promotion-task, sanitization-worker, workflow-callback), 7 Terraform modules, 6 REST endpoints, 8 database migrations, and a 5-stage CI/CD pipeline — with no external ops dependency at any stage.
- Streamlined local development by wiring Docker Compose, Makefile targets, and a built-in Swagger UI into a single `make up` entrypoint, giving any developer a fully running stack in minutes without manual environment setup.

### Backend / API Design
*(Backend SWE, API engineer JDs)*

- Designed a 6-endpoint REST API in Go 1.26 with presigned S3 URL generation, idempotency-key enforcement via 24-hour PostgreSQL TTL, versioned event contracts, and a structured error catalog — giving every failure mode a defined response and removing ambiguity for downstream consumers.
- Implemented a 6-state file ingestion lifecycle (prepared, uploaded, malware_scanned, promoted, processing_ready, blocked) with trigger-based PostgreSQL session rollups, eliminating manual status derivation and reducing stale-read inconsistencies.
- Enforced file policy validation across 4 MIME types (PDF, JPEG, PNG, HEIC) with configurable size bounds (10 KB min, 2 MB image cap, 5 MB PDF cap), intercepting policy violations at the validation layer before files reached S3 and removing downstream processing overhead for malformed uploads.
- Built conflict-safe idempotency with two-phase PostgreSQL claim (INSERT with conflict detection, exponential retry backoff) and 24-hour TTL cleanup, reducing duplicate write consumption and ensuring exactly-once semantics under concurrent retries.

### Event-Driven Architecture
*(Distributed systems, cloud-native engineer JDs)*

- Designed an event-driven ingestion pipeline using AWS EventBridge custom bus with malware-verdict-filtered rules and Step Functions orchestration (300s timeout, 3-retry exponential backoff at 2x rate), removing manual file promotion touchpoints entirely through automated rule evaluation and state-machine transitions.
- Defined 6 versioned event types as JSON Schema contracts (prepared, uploaded, malware_scanned, promoted, processing_ready, blocked), enabling decoupled downstream consumers and reducing integration breakages from schema drift.
- Configured an SQS dead-letter queue (3 max-receive-count, KMS-encrypted) as a reliability backstop for the sanitization worker, reducing unrecoverable message loss and enabling post-mortem replay without data loss.

### Infrastructure as Code / Terraform
*(Platform engineer, cloud engineer, SRE JDs)*

- Authored 7 reusable Terraform 1.14.8 modules (upload_api, upload_workers, upload_storage, upload_eventing, upload_workflow, iam, observability) composable across dev, staging, and prod, cutting infrastructure provisioning from manual console steps to a repeatable `terraform apply`.
- Modeled least-privilege IAM roles per ECS task type (S3 read/write scoped per bucket tier, EventBridge publish, SQS consume, Secrets Manager read), reducing IAM blast radius and validating policy-as-code in CI on every pull request.

### CI/CD and DevOps
*(DevOps, build and release engineer JDs)*

- Built a 5-stage GitHub Actions pipeline (unit+contracts, e2e, integration, schema-migrations, terraform) with OIDC-based AWS role assumption, pushing 5 Docker images to ECR and applying Terraform conditionally — automating the full release path from test validation to deployment with no manual intervention.
- Enforced contract-first testing by validating OpenAPI and JSON Schema event contracts in CI before integration or e2e stages ran, catching schema violations at PR time and reducing contract-breaking changes from reaching staging.

### Containerization / Docker
*(Full-stack, cloud-native, DevOps JDs)*

- Reduced container image footprint by ~85% by implementing multi-stage Go builds (golang:1.26 compile to distroless/base-debian12:nonroot runtime) across 5 service images, shrinking attack surface and improving ECS Fargate cold-start efficiency.
- Compiled all binaries with CGO_ENABLED=0 GOOS=linux GOARCH=amd64, producing portable dependency-free images with consistent runtime behavior across local Docker, CI runners, and ECS Fargate.

### Security and Compliance
*(Healthtech, regulated industry, security-conscious SWE JDs)*

- Contained cascading auth-failure propagation by implementing an externalized Bearer token circuit breaker (5-failure threshold, 30-second open window), paired with per-task least-privilege IAM roles scoped to the minimum required S3, EventBridge, and SQS operations.
- Encrypted all data at rest using AWS KMS across 3 S3 bucket tiers and SQS queues, stored PostgreSQL credentials exclusively in Secrets Manager, and assigned no public IPs to any ECS task, eliminating plaintext secret exposure across the full pipeline.

### Data and Database Engineering
*(Backend, data engineer JDs)*

- Designed a PostgreSQL 18 schema with immutable JSONB event history (indexed by item_id + occurred_at DESC), trigger-based session status rollups, and idempotency key deduplication (24-hour TTL), reducing audit query complexity and ensuring replayable event trails.
- Managed 8 schema migrations with Goose v3 validated in a dedicated CI stage against PostgreSQL 18-alpine, reducing migration-induced outage risk and catching schema regressions before reaching any deployed environment.

### Observability and Reliability
*(SRE, production-focused SWE JDs)*

- Improved mean-time-to-identify failures by enforcing X-Correlation-ID propagation across all 5 services, structured slog-based logging (debug local, info prod), and dedicated CloudWatch log groups per service with 30-day configurable retention.
- Designed liveness (/healthz) and readiness (/ready, PostgreSQL-checked) probes on all services, enabling ALB health-gate routing and reducing traffic to unhealthy tasks during deployments or dependency outages.

### Impact / Business Framing
*(Startup, high-ownership, product-focused JDs)*

- Reduced integration risk by defining all service boundaries as versioned contracts (OpenAPI 3.1.0, JSON Schema events, structured error catalogs) before writing implementation, enabling downstream consumers to develop in parallel with clear, stable interfaces.
- Designed and shipped a production-grade patient file ingestion platform in a fast-paced environment, eliminating 100% of manual upload promotion steps through full-stack automation spanning API contract design, service implementation, and cloud infrastructure deployment.

### Raw Tech Stack (keyword-matching JD scanners)
Go 1.26, PostgreSQL 18, pgx v5, Goose v3, AWS ECS Fargate, S3, EventBridge, Step Functions, SQS, ALB, KMS, Secrets Manager, ECR, CloudWatch, Terraform 1.14.8, Docker multi-stage, GitHub Actions, OpenAPI 3.1.0, JSON Schema

---

## Soft Skills & Working Style

- Owns features end-to-end from requirement to production
- Communicates clearly with stakeholders, internal and external
- Keeps pace with the field by reading, building, and engaging with dev communities daily
- Genuinely curious about how things are built and always trying something new
- Open to constructive feedback during code reviews
- Adapts quickly to new stacks and changing requirements
- Available for remote, hybrid, or on-site roles
