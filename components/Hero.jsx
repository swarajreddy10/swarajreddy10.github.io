'use client';

import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

function LinkedinIcon({ size = 14 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
    );
}

function GithubIcon({ size = 14 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
    );
}

const SOCIALS = [
    { href: 'mailto:swarajchandra22@gmail.com',    Icon: Mail,         label: 'Email'              },
    { href: 'https://linkedin.com/in/swarajreddy', Icon: LinkedinIcon, label: 'LinkedIn', ext: true },
    { href: 'https://github.com/swarajreddy10',    Icon: GithubIcon,   label: 'GitHub',   ext: true },
];

export default function Hero() {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="home" style={{
            minHeight: '100svh',
            background: 'var(--base)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px max(24px, 5vw) 0',
        }}>
            <div style={{ maxWidth: 680, width: '100%', textAlign: 'center' }}>

                {/* Name */}
                <div style={{ overflow: 'hidden', marginBottom: 16 }}>
                    <motion.h1
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                        style={{
                            fontFamily: 'var(--font-display)', fontStyle: 'italic',
                            fontSize: 'clamp(52px, 9vw, 120px)',
                            fontWeight: 400, color: 'var(--fg)',
                            letterSpacing: '-0.03em', lineHeight: 1, margin: 0,
                        }}
                    >
                        Swaraj Reddy
                    </motion.h1>
                </div>

                {/* Role */}
                <div style={{ overflow: 'hidden', marginBottom: 28 }}>
                    <motion.p
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, delay: 0.42, ease: [0.33, 1, 0.68, 1] }}
                        style={{
                            fontFamily: 'var(--font-mono)', fontSize: 11,
                            letterSpacing: '0.28em', textTransform: 'uppercase',
                            color: 'var(--accent)', margin: 0,
                        }}
                    >
                        Full-Stack Engineer
                    </motion.p>
                </div>

                {/* One-liner */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{
                        fontFamily: 'var(--font-body)', fontSize: 16,
                        lineHeight: 1.65, color: 'var(--muted)',
                        maxWidth: 480, margin: '0 auto 40px',
                    }}
                >
                    I break down hard problems, write code that lasts, and
                    communicate clearly across the table. Open to remote, hybrid, or on-site.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.72 }}
                    style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}
                >
                    <button
                        onClick={() => scrollTo('projects')}
                        style={{
                            borderRadius: 100, padding: '12px 28px',
                            fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
                            letterSpacing: '0.18em', textTransform: 'uppercase',
                            color: '#fff', background: 'var(--accent)',
                            border: 'none', cursor: 'pointer',
                            transition: 'background 0.2s, transform 0.1s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#B5561F')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
                        onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
                        onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        View Work
                    </button>
                    <button
                        onClick={() => scrollTo('contact')}
                        style={{
                            borderRadius: 100, padding: '12px 28px',
                            fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
                            letterSpacing: '0.18em', textTransform: 'uppercase',
                            color: 'var(--muted)', background: 'transparent',
                            border: '1px solid var(--border)', cursor: 'pointer',
                            transition: 'border-color 0.2s, color 0.2s, transform 0.1s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,98,42,0.4)'; e.currentTarget.style.color = 'var(--fg)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                        onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
                        onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        Get in Touch
                    </button>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.88, duration: 0.4 }}
                    style={{ display: 'flex', gap: 10, justifyContent: 'center' }}
                >
                    {SOCIALS.map(({ href, Icon, label, ext }) => (
                        <a
                            key={label} href={href}
                            target={ext ? '_blank' : undefined}
                            rel={ext ? 'noopener noreferrer' : undefined}
                            aria-label={label}
                            style={{
                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                width: 38, height: 38, borderRadius: '50%',
                                border: '1px solid var(--border)',
                                color: 'var(--muted)', background: 'var(--surf)',
                                textDecoration: 'none',
                                transition: 'border-color 0.2s, color 0.2s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,98,42,0.4)'; e.currentTarget.style.color = 'var(--accent)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                        >
                            <Icon size={14} />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
