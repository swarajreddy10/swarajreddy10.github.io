export const workData = [
    {
        title: 'SpotMyJob',
        tagline: 'Job Intelligence & Matching Platform',
        description: 'Backend / Data / Search',
        tech: ['Go', 'PostgreSQL', 'pgvector', 'Cloudflare Workers AI', 'Fastify', 'AWS', 'Terraform'],
        impact: 'Designed 3 independently deployable microservices with separate data ownership and versioned contracts, then connected canonical jobs to seeker-facing hybrid search through a versioned embedding pipeline.',
        metrics: ['64% Higher Throughput', '17x Vector Ingestion'],
        bullets: [
            'Sized worker concurrency, PostgreSQL connection headroom, and database I/O under fixed compute limits, increasing transformation throughput by 64% and reducing recurring external fetches by 43%.',
            'Built versioned job and seeker embedding pipelines through Cloudflare Workers AI, then benchmarked HNSW and half-precision pgvector indexes to improve vector ingestion by 17x while preserving measured search quality.',
        ],
    },
    {
        title: 'Osulo',
        tagline: 'Patient-Care Document Intelligence',
        description: 'Backend / Healthcare AI',
        tech: ['Go', 'PostgreSQL', 'Vertex AI Gemini', 'Azure OpenAI GPT', 'AWS', 'Step Functions', 'Terraform'],
        impact: 'Built the document-ingestion service and Clinical Document Intelligence Service to sanitize healthcare files, extract structured clinical data, preserve source provenance, and support human review.',
        metrics: ['2 Go Services', '0.2s Service Handoff'],
        bullets: [
            'Integrated Vertex AI Gemini and Azure OpenAI GPT to convert sanitized prescriptions and laboratory reports into schema-validated clinical fields.',
            'Kept ingestion and extraction independently deployable through versioned events, duplicate-request protection, and SQS dead-letter recovery.',
        ],
    },
    {
        title: 'ResumeCanvas',
        tagline: 'AI Resume Builder',
        description: 'AI / Full Stack',
        link: 'https://www.resumecanvas.live/',
        github: 'https://github.com/swarajreddy10/Resume_Canvas',
        tech: ['Next.js 16', 'TypeScript', 'MongoDB', 'Groq AI', 'Puppeteer'],
        impact: 'Built a full-stack AI resume builder with JWT, Google OAuth, sub-100ms cached responses, and 7 targeted indexes that cut query load by 60%.',
        metrics: ['95.2% Test Coverage', 'Sub-100ms Cached Responses'],
        bullets: [
            'Built 8 AI features covering ATS scoring, keyword analysis, cover letters, and job matching with Groq Llama 3.3 70B.',
            'Shipped 5 templates with live preview, PDF export, autosave, and public sharing through custom slugs.',
        ],
    },
];
