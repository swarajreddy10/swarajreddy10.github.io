import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const HIGHLIGHTS = [
    'Started and own the 2 Go microservices behind SpotMyJob\'s job-data pipeline (source discovery and job processing) that feed its job-search service. Re-sized a transform stage\'s concurrency on measured database load instead of an assumed CPU count, raising throughput 64% as peak database CPU fell from 99.7% to 65%.',
    'Researched before building, from day one: wrote the sourcing research (feasibility, data rights, operating compliance) that set SpotMyJob\'s job-source path and the decision method both Go services follow; when the first QA sweep lost 84% of job boards to 403s, traced it to a per-IP edge rate limit and cut it to 1.1% the same day.',
    'Shipped React features on the seeker web app (React 18, TypeScript, TanStack Query, Tailwind CSS): Discover filters, keyword search with "Did you mean", onboarding, match-score display, and the location picker, and created 60+ frontend test files.',
    'Built Osulo\'s two Go services for healthcare-document ingestion and clinical extraction on AWS Step Functions (April to June 2026), with Gemini, Vertex AI, Azure OpenAI, and Amazon Bedrock adapters behind a validation gate that flagged uncertain documents for human review; in development, a multi-page lab report went from malware-cleared file to structured result in 62 seconds.',
    'Set up Claude Code for both Go repositories, with project rules and hooks that block a commit until its checks pass, and work daily with Claude Code, Codex, and Cursor; AI output is checked against tests, benchmarks, and labelled evaluation sets with measured rater agreement.',
];

export default function Experience() {
    return (
        <section id="experience" className="content-section" aria-labelledby="experience-title">
            <div className="section-shell">
                <header className="section-header">
                    <h2 id="experience-title">Professional experience.</h2>
                    <p>
                        At Dexaminds, I carry work from service design and data modeling through React UI, AWS deployment, and runtime monitoring under fixed compute and schedule constraints.
                    </p>
                </header>

                <article className="experience-card">
                    <header className="experience-card-header">
                        <div>
                            <h3>Software Engineer</h3>
                            <p className="experience-company">
                                <a
                                    className="experience-company-link"
                                    href="https://dexaminds.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Dexaminds company website, opens in a new tab"
                                >
                                    Dexaminds
                                </a>
                            </p>
                            <p className="experience-meta">
                                <MapPin size={14} aria-hidden="true" /> Hyderabad, India
                            </p>
                        </div>
                        <p className="experience-period">
                            <time dateTime="2025-09">Sep 2025</time> to Present
                        </p>
                    </header>

                    <ul className="experience-highlights">
                        {HIGHLIGHTS.map(highlight => <li key={highlight}>{highlight}</li>)}
                    </ul>
                </article>

                <div className="experience-notes">
                    <div className="experience-note">
                        <Briefcase size={18} aria-hidden="true" />
                        <span><strong>Earlier at Dexaminds:</strong> Software Engineer Intern, Jun to Sep 2025. Shipped React and TypeScript UI-to-API changes and delivered 15+ frontend and backend production fixes.</span>
                    </div>
                    <div className="experience-note">
                        <GraduationCap size={18} aria-hidden="true" />
                        <span><strong>Education:</strong> B.Tech in Computer Science, GITAM University, 2025. CGPA 8.2/10.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
