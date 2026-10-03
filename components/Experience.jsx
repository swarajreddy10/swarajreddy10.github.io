import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const HIGHLIGHTS = [
    'Primary backend owner for 2 Go microservices in SpotMyJob\'s 3-service architecture; implemented job ingestion, location, skill, and ranking changes in the TypeScript seeker-search service.',
    'Primary contributor to Osulo\'s document-ingestion service and Clinical Document Intelligence Service, covering architecture, Vertex AI and Azure OpenAI integration, AWS infrastructure, deployment, and verification through CloudWatch metrics and logs.',
    'Used AI to research unfamiliar problems, compare implementation options, debug failures, and review changes; checked conclusions against primary documentation, peer feedback, automated tests, benchmarks, and runtime metrics.',
];

export default function Experience() {
    return (
        <section id="experience" className="content-section" aria-labelledby="experience-title">
            <div className="section-shell">
                <header className="section-header">
                    <h2 id="experience-title">Professional experience.</h2>
                    <p>
                        At Dexaminds, I carry backend work from service design and data modeling through AWS deployment and production monitoring under fixed compute and schedule constraints.
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
                        <span><strong>Earlier at Dexaminds:</strong> Software Engineer Intern, Jun to Sep 2025. Shipped React and TypeScript UI-to-API changes and resolved 15+ production defects.</span>
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
