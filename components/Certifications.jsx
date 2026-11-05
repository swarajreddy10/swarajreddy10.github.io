import { ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/credentials';

export default function Certifications() {
    return (
        <section id="certifications" className="content-section" aria-labelledby="certifications-title">
            <div className="section-shell">
                <header className="section-header">
                    <h2 id="certifications-title">Certifications.</h2>
                </header>

                <div className="cert-grid">
                    {CERTIFICATIONS.map(certification => (
                        <a
                            className="cert-card"
                            key={certification.name}
                            href={certification.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="cert-category">{certification.category}</span>
                            <h3>{certification.name}</h3>
                            <div className="cert-meta">
                                <span>{certification.issuer}</span>
                                <span>{certification.date}</span>
                            </div>
                            <span className="sr-only"> (credential, opens in a new tab)</span>
                            <ExternalLink className="cert-external-icon" size={16} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}