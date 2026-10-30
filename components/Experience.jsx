import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const HIGHLIGHTS = [
    'Started and own the 2 Go microservices behind SpotMyJob\'s job-data pipeline (source discovery and job processing) that feed its job-search service. Proved a transform stage was bound by round trips rather than the database before scaling it, raising throughput 64% as peak database CPU fell from 99.7% to 65%.',
    'Shipped production React features on the seeker web app (React 18, TypeScript, TanStack Query, Tailwind CSS): Discover filters, keyword search with "Did you mean", onboarding, match-score display, and the location picker, with 62 frontend test files.',
    'Served as primary contributor to Osulo\'s document-ingestion service and Clinical Document Intelligence Service, covering architecture, Vertex AI and Azure OpenAI integration, AWS infrastructure, deployment, and verification through CloudWatch metrics and logs.',
    'Set up Claude Code for both Go repositories, with project rules and hooks that block a commit until its checks pass, and work daily with Claude, Codex, and Cursor; AI output is checked against tests, benchmarks, and blind-labelled evaluation sets.',
];

export default function Experience() {
    return (
        <section id="experience" className="content-section" aria-labelledby="experience-title">
            <div className="section-shell">
                <header className="section-header">
                    <h2 id="experience-title">Professional experience.</h2>
                    <p>
                        At Dexaminds, a 7-engineer startup team, I carry work from service design and data modeling through React UI, AWS deployment, and production monitoring under fixed compute and schedule constraints.
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
