// The Experience section's copy. Facts come from the career toolkit's master profile.
export const EXPERIENCE = {
    intro: 'At DexaMinds, I carry work from service design and data modeling through React UI, AWS deployment, and runtime monitoring under fixed compute and schedule constraints.',
    role: {
        title: 'Software Engineer',
        company: 'DexaMinds',
        companyUrl: 'https://dexaminds.com/',
        location: 'Hyderabad, India',
        start: '2025-09',
        startLabel: 'Sep 2025',
        endLabel: 'Present',
    },
    highlights: [
        'Started and own the 2 Go microservices behind SpotMyJob\'s job-data pipeline (source discovery and job processing) that feed its job-search service. Resized a transform stage\'s concurrency on measured database load instead of an assumed CPU count, raising throughput 64% as peak database CPU fell from 99.7% to 65%.',
        'Researched before building, from day one: wrote the sourcing research (feasibility, data rights, operating compliance) that set SpotMyJob\'s job-source path and the decision method both Go services follow; removed 88% of a job-board sweep\'s requests by proving a list endpoint already returned the data per-item calls fetched, with ETag revalidation answering 83% of board reads with a 304.',
        'Shipped React features on the seeker web app (React 18, TypeScript, TanStack Query, Tailwind CSS): Discover filters, keyword search with "Did you mean", onboarding, match-score display, and the location picker, and created 60+ frontend test files.',
        'Built two Go services for a client\'s healthcare platform, document ingestion and clinical extraction on AWS Step Functions (April to June 2026), with Gemini, Vertex AI, Azure OpenAI, and Amazon Bedrock adapters behind a validation gate that flagged uncertain documents for human review; in development, a multipage lab report went from a malware-cleared file to a structured result in 62 seconds.',
        'Set up Claude Code for both Go repositories, with project rules and hooks that block a commit until its checks pass, and work daily with Claude Code, Codex, and Cursor; AI output is checked against tests, benchmarks, and labeled evaluation sets with measured rater agreement.',
    ],
    earlier: 'Software Engineer Intern, Jun to Sep 2025. Shipped React and TypeScript UI-to-API changes and delivered 15+ frontend and backend production fixes.',
};

export const EDUCATION = 'B.Tech in Computer Science, GITAM University, 2025. CGPA 8.2/10.';
