'use client';

import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const CERTS = [
    {
        name: 'IBM Full Stack Software Developer',
        issuer: 'IBM / Coursera',
        category: 'Full Stack',
        date: 'Jan 2025',
        href: 'https://www.credly.com/badges/e83c9a88-fb50-4984-a905-68217cc76d9f/public_url',
        accent: '#550003',
    },
    {
        name: 'AWS Cloud Foundations & Cloud Architecting',
        issuer: 'AWS Academy',
        category: 'Cloud',
        date: 'May – Jun 2024',
        href: 'https://www.credly.com/badges/43e4a6d2-618f-4003-8a97-f6a773be09d5/public_url',
        accent: '#8A7E1A',
    },
    {
        name: 'MongoDB Python Developer Path',
        issuer: 'MongoDB University',
        category: 'Database',
        date: 'Nov 2025',
        href: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/2fef1e9a-2ef7-45ea-bdf7-9fde67df65a8-swaraj-chandra-reddy-m-2b64be3a-1a61-4210-9354-4051d4ad0677-certificate.pdf',
        accent: '#16A34A',
    },
];

function VerifiedBadge({ color }) {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-label="Verified">
            <path
                d="M12 2L14.5 4.5H18.5L19.5 8.5L22 11L19.5 13.5L18.5 17.5H14.5L12 22L9.5 17.5H5.5L4.5 13.5L2 11L4.5 8.5L5.5 4.5H9.5L12 2Z"
                fill={color} opacity="0.15"
                stroke={color} strokeWidth="1.5" strokeLinejoin="round"
            />
            <path
                d="M8.5 11.5L10.5 13.5L15.5 8.5"
                stroke={color} strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"
            />
        </svg>
    );
}

function CertCard({ cert, index }) {
    const cardRef   = useRef(null);
    const [hovered, setHovered] = useState(false);
    const [tilt,    setTilt]    = useState({ x: 0, y: 0 });
    const [spot,    setSpot]    = useState({ x: 50, y: 50 });

    const onMouseMove = (e) => {
        if (!cardRef.current) return;
        const r   = cardRef.current.getBoundingClientRect();
        const x   = e.clientX - r.left;
        const y   = e.clientY - r.top;
        const cx  = r.width  / 2;
        const cy  = r.height / 2;
        setTilt({ x: ((y - cy) / cy) * -7, y: ((x - cx) / cx) * 7 });
        setSpot({ x: (x / r.width) * 100, y: (y / r.height) * 100 });
    };

    const onMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setHovered(false);
    };

    return (
        <motion.a
            ref={cardRef}
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={onMouseLeave}
            style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                padding: '26px 26px 22px',
                borderRadius: 18,
                border: `1px solid ${hovered ? cert.accent + '70' : 'var(--border)'}`,
                background: 'var(--base)',
                textDecoration: 'none', cursor: 'pointer',
                position: 'relative', overflow: 'hidden',
                minHeight: 200,
                /* 3-D tilt */
                perspective: 800,
                transform: hovered
                    ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.025)`
                    : 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
                transition: hovered
                    ? 'transform 0.08s linear, border-color 0.25s ease, box-shadow 0.25s ease'
                    : 'transform 0.55s cubic-bezier(0.22,1,0.36,1), border-color 0.25s ease, box-shadow 0.25s ease',
                boxShadow: hovered
                    ? `0 12px 40px rgba(0,0,0,0.09), 0 0 0 1px ${cert.accent}22`
                    : '0 1px 4px rgba(0,0,0,0.04)',
                willChange: 'transform',
            }}
        >
            {/* Cursor spotlight */}
            <div style={{
                position: 'absolute', inset: 0, borderRadius: 18,
                background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, ${cert.accent}1A 0%, transparent 65%)`,
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
            }} />

            {/* Shimmer sweep on entry */}
            <div
                className="cert-shimmer"
                style={{
                    position: 'absolute', top: 0, left: '-100%',
                    width: '60%', height: '100%',
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
                    transform: 'skewX(-15deg)',
                    pointerEvents: 'none',
                    animationDelay: `${index * 0.12 + 0.55}s`,
                }}
            />

            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, position: 'relative' }}>
                <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontFamily: 'var(--font-mono)', fontSize: 9,
                    letterSpacing: '0.28em', textTransform: 'uppercase',
                    color: cert.accent,
                    background: `${cert.accent}12`,
                    border: `1px solid ${cert.accent}28`,
                    borderRadius: 20, padding: '4px 10px',
                }}>
                    <VerifiedBadge color={cert.accent} />
                    {cert.category}
                </span>

                <div style={{
                    width: 30, height: 30, borderRadius: '50%',
                    border: `1px solid ${hovered ? cert.accent : 'var(--border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: hovered ? cert.accent : 'var(--muted)',
                    background: hovered ? `${cert.accent}12` : 'transparent',
                    transition: 'all 0.25s ease',
                    transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                }}>
                    <ArrowUpRight size={13} />
                </div>
            </div>

            {/* Cert name */}
            <p style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(17px, 1.65vw, 21px)',
                fontWeight: 400, color: 'var(--fg)',
                lineHeight: 1.3, letterSpacing: '-0.01em',
                flex: 1, marginBottom: 22, position: 'relative',
            }}>
                {cert.name}
            </p>

            {/* Bottom: issuer + date */}
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingTop: 14,
                borderTop: `1px solid ${hovered ? cert.accent + '28' : 'var(--border)'}`,
                transition: 'border-color 0.25s ease',
                position: 'relative',
            }}>
                <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9,
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: 'var(--muted)',
                }}>
                    {cert.issuer}
                </span>
                <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9,
                    letterSpacing: '0.18em',
                    color: hovered ? cert.accent : 'var(--muted)',
                    transition: 'color 0.25s ease',
                }}>
                    {cert.date}
                </span>
            </div>
        </motion.a>
    );
}

export default function Certifications() {
    return (
        <section id="certifications" style={{ background: 'var(--base)', padding: '100px 0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 max(24px, 4vw)' }}>

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: 48 }}
                >
                    <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        letterSpacing: '0.36em', textTransform: 'uppercase',
                        color: 'var(--accent)', display: 'block', marginBottom: 16,
                        fontWeight: 600,
                    }}>
                        Certifications
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(28px, 4vw, 52px)',
                        fontWeight: 400, color: 'var(--fg)',
                        letterSpacing: '-0.025em', lineHeight: 1.15,
                        margin: 0,
                    }}>
                        Verified credentials.
                    </h2>
                </motion.div>

                {/* Card grid */}
                <div
                    className="cert-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 20,
                    }}
                >
                    {CERTS.map((cert, i) => (
                        <CertCard key={cert.name} cert={cert} index={i} />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes cert-shimmer {
                    0%   { left: -100%; opacity: 1; }
                    100% { left: 160%;  opacity: 0; }
                }
                .cert-shimmer {
                    animation: cert-shimmer 0.75s ease forwards;
                }
                @media (max-width: 860px) {
                    .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 520px) {
                    .cert-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}
