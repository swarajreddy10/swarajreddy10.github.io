export const workData = [
    {
        title: 'SpotMyJob',
        featured: true,
        tagline: 'Job Intelligence & Matching Platform',
        description: 'Backend / Full Stack / Data',
        tech: ['Go', 'PostgreSQL', 'AWS', 'React', 'TypeScript', 'pgvector', 'Terraform'],
        impact: 'Built and own the two Go microservices of a three-stage job-data pipeline (discovery, processing, search), each with its own database and versioned contracts, and contributed core search, matching, and React features to the job-search service.',
        stats: [
            { value: '64%', label: 'higher throughput, no new infrastructure' },
            { value: '17x', label: 'faster vector ingestion, 98.2% recall kept' },
            { value: '43%', label: 'fewer external fetches, with an alarmed fallback' },
        ],
        highlights: [
            'Re-sized a slow stage on measured database load instead of an assumed CPU count, raising its throughput 64% as peak database CPU fell from 99.7% to 65%.',
            'Found an index no query read but every write still paid for; dropping it made feed ingestion 17x faster, from about 238 to 13.7 seconds per page on QA.',
            'Cut recurring external fetches 43% by reading only boards that could have changed, falling back to an alarmed full sweep whenever that signal is missing or stale.',
        ],
        details: [
            'Moved HNSW to a half-precision expression index that fits in memory, keeping 98.2% recall@10 versus 98.3%.',
            'Loaded postal-reference data in 2 min 34 s with PostgreSQL COPY and set-based deduplication, versus 30.2 min projected for row-wise inserts.',
            'Rewrote the feed cleanup as a hash anti-join that stays fast in every query-plan mode, so removed jobs disappear on schedule.',
            'Shipped React features with their Fastify APIs: "Did you mean" search that never auto-applies, draft-then-apply filters, and onboarding gated on the answers a match needs.',
            'Hardened outbound fetching against SSRF and DNS rebinding, including NAT64 addresses, and pinned 81 GitHub Actions references to commit SHAs.',
        ],
    },
    {
        title: 'Osulo',
        tagline: 'Patient-Care Document Intelligence',
        description: 'Backend / Healthcare AI',
        tech: ['Go', 'Step Functions', 'Vertex AI Gemini', 'Azure OpenAI GPT', 'PostgreSQL', 'EventBridge', 'Terraform'],
        impact: 'Built the document-ingestion service and Clinical Document Intelligence Service that scan and validate healthcare files, extract structured clinical data with recorded model provenance, and flag uncertain results for human review.',
        metrics: ['62s Upload to Result', '10.6s p50 Extraction', '0.2s Service Handoff'],
        highlights: [
            'Integrated Vertex AI Gemini, Azure OpenAI GPT, and Amazon Bedrock behind one provider-neutral extraction gate that checked structure, schema, and a 0.85 confidence bar before accepting any clinical field.',
            'Traced a silent handoff failure between the two services to a queue encryption mismatch, fixed it, and proved the fix with a replay and a fresh canary upload.',
        ],
        details: [
            'Before the first Go commit, compared six LLM endpoints on the same documents, replaced an OCR-then-LLM design with a single extraction call, and chose the AWS event, workflow, and runtime design against official documentation.',
            'Direct-to-S3 uploads through signed POST policies, then quarantine, GuardDuty malware scanning, and promotion to a trusted bucket.',
            'Orchestrated extraction as a Step Functions workflow over page chunks: a multi-page lab report ran from upload to structured result in 62 s, with extraction at a 10.6 s p50 (15.2 s p95) and a 0.2 s handoff between services.',
            'Kept both services independently deployable through versioned events, idempotent requests, an event outbox, and SQS dead-letter recovery.',
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
        metrics: ['95.2% Test Coverage', 'Sub-100ms Cached Responses'],
        highlights: [
            'Implemented 8 AI-assisted features covering ATS scoring, keyword analysis, cover letters, and job matching with Groq Llama 3.3 70B.',
            'Shipped 5 templates with live preview, Puppeteer PDF export, Zod validation, and public sharing through custom slugs.',
        ],
        details: [
            'Reached 95.2% test coverage across 129 tests and 220 assertions.',
            'Kept API responses under 100 ms through caching and cut MongoDB query load 60% with 7 targeted indexes.',
        ],
    },
];
