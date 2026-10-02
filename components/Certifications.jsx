import { ExternalLink } from 'lucide-react';

const CERTIFICATIONS = [
    {
        name: 'IBM Full Stack Software Developer',
        issuer: 'IBM / Coursera',
        category: 'Full Stack',
        date: 'Jan 2025',
        href: 'https://www.credly.com/badges/e83c9a88-fb50-4984-a905-68217cc76d9f/public_url',
    },
    {
        name: 'AWS Cloud Foundations & Cloud Architecting',
        issuer: 'AWS Academy',
        category: 'Cloud',
        date: 'May to Jun 2024',
        href: 'https://www.credly.com/badges/43e4a6d2-618f-4003-8a97-f6a773be09d5/public_url',
    },
    {
        name: 'MongoDB Python Developer Path',
        issuer: 'MongoDB University',
        category: 'Database',
        date: 'Nov 2025',
        href: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/2fef1e9a-2ef7-45ea-bdf7-9fde67df65a8-swaraj-chandra-reddy-m-2b64be3a-1a61-4210-9354-4051d4ad0677-certificate.pdf',
    },
];

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
                            aria-label={`${certification.name} credential, opens in a new tab`}
                        >
                            <span className="cert-category">{certification.category}</span>
                            <h3>{certification.name}</h3>
                            <div className="cert-meta">
                                <span>{certification.issuer}</span>
                                <span>{certification.date}</span>
                            </div>
                            <ExternalLink className="cert-external-icon" size={16} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}