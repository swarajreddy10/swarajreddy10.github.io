'use client';

import { motion } from 'motion/react';

const CERTS = [
    {
        name: 'IBM Full Stack Software Developer',
        issuer: 'Coursera (IBM)',
        date: 'Jan 2025',
        href: 'https://drive.google.com/file/d/1I9ggwsrVswrxcgNPkRfWYNjdp3h5xorv/view?usp=sharing',
    },
    {
        name: 'AWS Cloud Foundations & Cloud Architecting',
        issuer: 'AWS Academy',
        date: 'May – Jun 2024',
        href: 'https://www.credly.com/badges/aws-academy',
        issuer: 'MongoDB University',
        date: 'Nov 2025',
        href: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/2fef1e9a-2ef7-45ea-bdf7-9fde67df65a8-swaraj-chandra-reddy-m-2b64be3a-1a61-4210-9354-4051d4ad0677-certificate.pdf',
    },
];

export default function Certifications() {
    return (
        <section id="certifications" style={{ background: 'var(--base)', padding: '100px 0' }}>
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 max(28px, 4vw)' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: 40 }}
                >
                    <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 9,
                        letterSpacing: '0.4em', textTransform: 'uppercase',
                        color: 'var(--accent)', display: 'block', marginBottom: 16,
                    }}>
                        Certifications
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(28px, 4vw, 52px)',
                        fontWeight: 400, color: 'var(--fg)',
                        letterSpacing: '-0.025em', lineHeight: 1.15,
                    }}>
                        Verified credentials.
                    </h2>
                </motion.div>

                <div style={{ borderTop: '1px solid var(--border)' }}>
                    {CERTS.map(({ name, issuer, date, href }, i) => (
                        <motion.a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            style={{
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'space-between', gap: 16,
                                padding: '22px 0',
                                borderBottom: '1px solid var(--border)',
                                textDecoration: 'none',
                                transition: 'opacity 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                        >
                            <div>
                                <p style={{
                                    fontFamily: 'var(--font-body)', fontSize: 15,
                                    fontWeight: 500, color: 'var(--fg)', marginBottom: 4,
                                }}>
                                    {name}
                                </p>
                                <p style={{
                                    fontFamily: 'var(--font-mono)', fontSize: 10,
                                    color: 'var(--muted)',
                                }}>
                                    {issuer}
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
                                <span style={{
                                    fontFamily: 'var(--font-mono)', fontSize: 10,
                                    color: 'var(--muted)',
                                }}>
                                    {date}
                                </span>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                                    stroke="var(--accent)" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M7 7h10v10"/>
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
