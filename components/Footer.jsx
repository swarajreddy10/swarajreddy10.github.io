'use client';

import { Mail, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

function LinkedinIcon({ size = 15 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
    );
}

function GithubIcon({ size = 15 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
    );
}

const NAV_LINKS = [
    { label: 'About',   id: 'about'    },
    { label: 'Work',    id: 'projects' },
    { label: 'Skills',  id: 'skills'   },
    { label: 'Contact', id: 'contact'  },
];

const SOCIAL_LINKS = [
    { label: 'Email',    href: 'mailto:swarajchandra22@gmail.com',    Icon: Mail,         ext: false },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/swarajreddy', Icon: LinkedinIcon, ext: true  },
    { label: 'GitHub',   href: 'https://github.com/swarajreddy10',    Icon: GithubIcon,   ext: true  },
];

export default function Footer() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (window.__lenis && el) {
            window.__lenis.scrollTo(el, { offset: -60, duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        } else {
            el?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{ background: 'var(--surf)', borderTop: '1px solid var(--border)' }}>

            {/* Main footer body */}
            <div style={{
                maxWidth: 1100, margin: '0 auto',
                padding: 'clamp(48px, 6vw, 80px) max(24px, 4vw) clamp(40px, 5vw, 64px)',
                display: 'grid',
                gridTemplateColumns: '1.6fr 1fr 1fr',
                gap: 'clamp(32px, 5vw, 80px)',
                alignItems: 'start',
            }}
            className="footer-grid"
            >
                {/* Col 1 — Brand */}
                <div>
                    <button
                        onClick={() => window.__lenis ? window.__lenis.scrollTo(0, { duration: 1.2 }) : window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{
                            fontFamily: 'var(--font-display)', fontStyle: 'italic',
                            fontSize: 28, fontWeight: 400, color: 'var(--fg)',
                            background: 'none', border: 'none', cursor: 'pointer',
                            padding: 0, letterSpacing: '-0.02em',
                            display: 'block', marginBottom: 14,
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
                    >
                        Swaraj Reddy
                    </button>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 14,
                        lineHeight: 1.65, color: 'var(--muted)',
                        maxWidth: 280, marginBottom: 28,
                    }}>
                        Full-stack engineer building AI pipelines, microservices, and
                        production-grade SaaS. Based in Hyderabad.
                    </p>

                    {/* Social icons */}
                    <div style={{ display: 'flex', gap: 10 }}>
                        {SOCIAL_LINKS.map(({ label, href, Icon, ext }) => (
                            <a
                                key={label} href={href}
                                target={ext ? '_blank' : undefined}
                                rel={ext ? 'noopener noreferrer' : undefined}
                                aria-label={label}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                    width: 36, height: 36, borderRadius: '50%',
                                    border: '1px solid var(--border)',
                                    color: 'var(--muted)', background: 'var(--base)',
                                    textDecoration: 'none',
                                    transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                                }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                            >
                                <Icon size={14} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Col 2 — Navigation */}
                <div>
                    <p style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        letterSpacing: '0.32em', textTransform: 'uppercase',
                        color: 'var(--muted)', marginBottom: 20, fontWeight: 600,
                    }}>
                        Navigation
                    </p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {NAV_LINKS.map(({ label, id }) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                style={{
                                    fontFamily: 'var(--font-body)', fontSize: 14,
                                    color: 'var(--muted)', background: 'none',
                                    border: 'none', cursor: 'pointer',
                                    textAlign: 'left', padding: 0,
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Col 3 — Contact */}
                <div>
                    <p style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        letterSpacing: '0.32em', textTransform: 'uppercase',
                        color: 'var(--muted)', marginBottom: 20, fontWeight: 600,
                    }}>
                        Get in Touch
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                            { label: 'Send email to Swaraj',      href: 'mailto:swarajchandra22@gmail.com',    display: 'swarajchandra22@gmail.com' },
                            { label: 'Visit LinkedIn profile',    href: 'https://linkedin.com/in/swarajreddy', display: 'linkedin.com/in/swarajreddy', ext: true },
                            { label: 'Visit GitHub profile',      href: 'https://github.com/swarajreddy10',    display: 'github.com/swarajreddy10',   ext: true },
                        ].map(({ label, href, display, ext }) => (
                            <a
                                key={label} href={href}
                                target={ext ? '_blank' : undefined}
                                rel={ext ? 'noopener noreferrer' : undefined}
                                aria-label={label}
                                style={{
                                    fontFamily: 'var(--font-mono)', fontSize: 11,
                                    color: 'var(--muted)', textDecoration: 'none',
                                    transition: 'color 0.2s',
                                    wordBreak: 'break-all',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                            >
                                {display}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright bar */}
            <div style={{
                borderTop: '1px solid var(--border)',
                maxWidth: 1100, margin: '0 auto',
                padding: '20px max(24px, 4vw)',
                display: 'flex', flexWrap: 'wrap',
                alignItems: 'center', justifyContent: 'space-between',
                gap: 12,
            }}>
                <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: 'rgba(85,0,3,0.35)', letterSpacing: '0.12em',
                }}>
                    &copy; {new Date().getFullYear()} Swaraj Chandra Reddy M. Built with Next.js and Motion.
                </p>

                <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onClick={() => window.__lenis ? window.__lenis.scrollTo(0, { duration: 1.2 }) : window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Back to top"
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontFamily: 'var(--font-mono)', fontSize: 9,
                        letterSpacing: '0.24em', textTransform: 'uppercase',
                        color: 'var(--muted)', background: 'none',
                        border: 'none', cursor: 'pointer',
                        transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                    Back to top <ArrowUp size={11} />
                </motion.button>
            </div>

            <style>{`
                @media (max-width: 700px) {
                    .footer-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 480px) {
                    .footer-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </footer>
    );
}
