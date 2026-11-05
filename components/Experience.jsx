import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION, EXPERIENCE } from '../data/experience';

export default function Experience() {
    const { intro, role, highlights, earlier } = EXPERIENCE;
    return (
        <section id="experience" className="content-section" aria-labelledby="experience-title">
            <div className="section-shell">
                <header className="section-header">
                    <h2 id="experience-title">Professional experience.</h2>
                    <p>{intro}</p>
                </header>

                <article className="experience-card">
                    <header className="experience-card-header">
                        <div>
                            <h3>{role.title}</h3>
                            <p className="experience-company">
                                <a
                                    className="experience-company-link"
                                    href={role.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${role.company} company website, opens in a new tab`}
                                >
                                    {role.company}
                                </a>
                            </p>
                            <p className="experience-meta">
                                <MapPin size={14} aria-hidden="true" /> {role.location}
                            </p>
                        </div>
                        <p className="experience-period">
                            <time dateTime={role.start}>{role.startLabel}</time> to {role.endLabel}
                        </p>
                    </header>

                    <ul className="experience-highlights">
                        {highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                    </ul>
                </article>

                <div className="experience-notes">
                    <div className="experience-note">
                        <Briefcase size={18} aria-hidden="true" />
                        <span><strong>Earlier at {role.company}:</strong> {earlier}</span>
                    </div>
                    <div className="experience-note">
                        <GraduationCap size={18} aria-hidden="true" />
                        <span><strong>Education:</strong> {EDUCATION}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
