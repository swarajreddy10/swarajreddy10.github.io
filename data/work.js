export const workData = [
    {
        title: 'SpotMyJob',
        featured: true,
        tagline: 'Job Intelligence & Matching Platform',
        description: 'Backend / Full Stack / Data',
        tech: ['Go', 'PostgreSQL', 'AWS', 'React', 'TypeScript', 'pgvector', 'Terraform'],
        impact: 'Started and own the two Go microservices of a three-stage job-data pipeline (discovery, processing, search), each with its own database and versioned contracts, and contributed core search, matching, and React features to the job-search service.',
        stats: [
            { value: '64%', label: 'higher throughput, no new infrastructure' },
            { value: '17x', label: 'faster vector ingestion, 98.2% recall kept' },
            { value: '~40%', label: 'fewer Workable board reads per run on QA' },
        ],
        highlights: [
            'Re-sized a slow stage on measured database load instead of an assumed CPU count, raising its throughput 64% as peak database CPU fell from 99.7% to 65%.',
            'Moved the vector index to half precision, then dropped the full-precision index every write still maintained: feed ingestion became 17x faster on QA, from about 238 to 13.7 seconds per page.',
            'Cut recurring Workable board reads about 40% (roughly 78 instead of 128 minutes a run) by reading every board that serves a job each run and rotating the empty ones every two days, which also removed a third-party feed dependency.',
        ],
        details: [
            'The half-precision HNSW expression index fit in memory where the full-precision one did not, at 98.2% recall@10 versus 98.3%.',
            'Loaded postal-reference data in 2 min 34 s with PostgreSQL COPY and set-based deduplication, versus 30.2 min projected for batched ORM inserts.',
            'Rewrote the feed cleanup as a hash anti-join after measuring a latent 175-second generic-plan path; it ran in 162 ms under the same forced plan.',
            'Shipped React features with their Fastify APIs: "Did you mean" search that never auto-applies, draft-then-apply filters, and onboarding gated on the answers a match needs.',
            'Hardened the discovery service\'s outbound fetching against SSRF and DNS rebinding, including NAT64 addresses, and pinned the Go services\' GitHub Actions references to commit SHAs with a CI guard.',
        ],
    },
    {
        title: 'Osulo',
        tagline: 'Patient-Care Document Intelligence',
        description: 'Backend / Healthcare AI',
        tech: ['Go', 'Step Functions', 'Gemini', 'Vertex AI', 'Azure OpenAI', 'Amazon Bedrock', 'PostgreSQL', 'Terraform'],
        impact: 'April to June 2026: built the document-ingestion service and Clinical Document Intelligence Service, which scanned and validated healthcare files, extracted structured fields with recorded model provenance, and flagged uncertain documents for human review, validated in a development environment.',
        metrics: ['62s Clean File to Result', '10.6s p50 Extraction', '0.2s Service Handoff'],
        highlights: [
            'Built Gemini API, Vertex AI, Azure OpenAI, and Amazon Bedrock adapters behind one provider-neutral extraction gate that checked structure, the lab-report schema, and a 0.85 classification-confidence bar before accepting a document; the development pipeline ran Gemini 2.5 Flash-Lite.',
            'Traced a silent handoff failure between the two services to a queue encryption mismatch, fixed it, and proved the fix with a replay and a fresh canary upload.',
        ],
        details: [
            'Before the first Go commit, compared six LLM endpoints on the same documents, replaced an OCR-then-LLM design with a single extraction call, and chose the AWS event, workflow, and runtime design against official documentation.',
            'Direct-to-S3 uploads through signed POST policies, then quarantine, GuardDuty malware scanning, and promotion to a trusted bucket.',
            'Orchestrated extraction as a Step Functions workflow over page chunks: a multi-page lab report went from malware-cleared file to structured result in 62 s with a 0.2 s handoff between services, and the extraction workflow\'s p50 was 10.6 s over nine development runs.',
            'Kept both services independently deployable through versioned events, idempotent requests, an event outbox in the extraction service, SQS dead-letter queues, and stale-job reconcilers.',
        ],
    },
    {
        title: 'ResumeCanvas',
        tagline: 'AI Resume Builder',
        description: 'AI / Full Stack',
        link: 'https://www.resumecanvas.live/',
        github: 'https://github.com/swarajreddy10/Resume_Canvas',
        tech: ['Next.js 16', 'TypeScript', 'MongoDB', 'Groq AI', 'Puppeteer'],
        impact: 'Built a full-stack AI resume builder combining resume authoring, real-time preview, Puppeteer PDF export, ATS analysis, job matching, and public sharing.',
        metrics: ['118 Tests', '81.6% Line Coverage'],
        highlights: [
            'Built AI features on Groq Llama 3.3 70B for resume review, keyword analysis, bullet and cover-letter generation, interview questions, and job matching.',
            'Shipped 5 templates with live preview, Puppeteer PDF export, Zod validation, and public sharing through custom slugs.',
        ],
        details: [
            '118 unit and performance tests reach 81.6% line coverage of the modules under test (Bun, measured October 2026).',
            'Modeled MongoDB with compound indexes on the per-user read paths and added an in-memory cache.',
        ],
    },
];
