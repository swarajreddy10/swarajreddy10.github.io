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
            'Improved vector-heavy feed ingestion by 17x, from 238 seconds to 13.7 seconds per fixed benchmark batch, through half-precision HNSW tuning while retaining 98.2% recall@10 versus a 98.3% baseline.',
            'Loaded postal-reference data in 2 minutes 34 seconds using PostgreSQL COPY with transactional staging and set-based deduplication versus 30.2 minutes projected for the prior row-wise approach.',
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
        impact: 'Built a full-stack AI resume builder combining resume authoring, real-time preview, Puppeteer PDF export, ATS analysis, job matching, and public sharing.',
        metrics: ['95.2% Test Coverage', 'Sub-100ms Cached Responses'],
        bullets: [
            'Implemented 8 AI-assisted features covering ATS scoring, keyword analysis, cover letters, and job matching with Groq Llama 3.3 70B.',
            'Shipped 5 templates with live preview, Puppeteer PDF export, Zod validation, and public sharing through custom slugs.',
        ],
    },
];
