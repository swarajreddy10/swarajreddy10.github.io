'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

// Split name into character spans for GSAP stagger
function SplitName({ name }) {
    return (
        <>
            {name.split('').map((char, i) =>
                char === ' ' ? (
                    <span key={i} style={{ display: 'inline-block', width: '0.28em' }} />
                ) : (
                    <span key={i} style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 'inherit', verticalAlign: 'bottom' }}>
                        <span className="hero-char" style={{ display: 'inline-block' }}>
                            {char}
                        </span>
                    </span>
                )
            )}
        </>
    );
}

export default function Hero() {
    const nameRef     = useRef(null);
    const contentRef  = useRef(null);
    const sectionRef  = useRef(null);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (window.__lenis && el) {
            window.__lenis.scrollTo(el, { offset: -60, duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        } else {
            el?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // ── Character stagger entrance ──────────────────────────────────
        const ctx = gsap.context(() => {
            const chars = nameRef.current?.querySelectorAll('.hero-char');
            if (chars?.length) {
                gsap.fromTo(chars,
                    { y: '105%' },
                    {
                        y: '0%',
                        duration: 0.8,
                        stagger: 0.038,
                        ease: 'power4.out',
                        delay: 0.25,
                    }
                );
            }

            // ── Parallax: content drifts up as user scrolls away ─────────
            if (contentRef.current && sectionRef.current) {
                gsap.to(contentRef.current, {
                    y: -70,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1.2,
                    },
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="home" style={{
            minHeight: '100svh',
            background: 'var(--base)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px max(24px, 5vw) 0',
            overflow: 'hidden',
        }}>
            <div ref={contentRef} style={{ maxWidth: 680, width: '100%', textAlign: 'center' }}>

                {/* Name — GSAP character stagger */}
                <div ref={nameRef} style={{ marginBottom: 16, paddingBottom: '0.8em' }}>
                    <h1 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(52px, 9vw, 120px)',
                        fontWeight: 500, color: 'var(--fg)',
                        letterSpacing: '-0.03em', lineHeight: 1, margin: 0,
                    }}>
                        <SplitName name="Swaraj Reddy" />
                    </h1>
                </div>

                {/* Role */}
                <div style={{ overflow: 'hidden', marginBottom: 28 }}>
                    <motion.p
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, delay: 0.58, ease: [0.33, 1, 0.68, 1] }}
                        style={{
                            fontFamily: 'var(--font-mono)', fontSize: 11,
                            letterSpacing: '0.26em', textTransform: 'uppercase',
                            color: 'var(--accent)', margin: 0, fontWeight: 600,
                        }}
                    >
                        Full-Stack Engineer. I build, I ship.
                    </motion.p>
                </div>

                {/* One-liner */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.72 }}
                    style={{
                        fontFamily: 'var(--font-body)', fontSize: 16,
                        lineHeight: 1.75, color: 'var(--muted)',
                        maxWidth: 520, margin: '0 auto 40px',
                    }}
                >
                    I take full ownership from requirement to delivery, and bring the same care to the people
                    involved as to the problem itself. I ask the right questions early, adapt without friction,
                    and communicate before things become issues. Outside work, I read and build continuously.
                    Software and AI move fast and I find that genuinely interesting. I hold myself to a high
                    standard and try to raise the bar wherever I work.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.84 }}
                    style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}
                >
                    <button
                        onClick={() => scrollToSection('projects')}
                        style={{
                            borderRadius: 100, padding: '13px 30px',
                            fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
                            letterSpacing: '0.16em', textTransform: 'uppercase',
                            color: '#fff', background: 'var(--accent)',
                            border: 'none', cursor: 'pointer',
                            boxShadow: '0 2px 14px rgba(184,171,56,0.35)',
                            transition: 'background 0.2s, transform 0.1s, box-shadow 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#6B6010'; e.currentTarget.style.boxShadow = '0 4px 22px rgba(184,171,56,0.55)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 2px 14px rgba(184,171,56,0.35)'; }}
                        onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
                        onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        View Work
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        style={{
                            borderRadius: 100, padding: '13px 30px',
                            fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
                            letterSpacing: '0.16em', textTransform: 'uppercase',
                            color: 'var(--fg)', background: 'transparent',
                            border: '1.5px solid var(--border)', cursor: 'pointer',
                            transition: 'border-color 0.2s, color 0.2s, transform 0.1s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg)'; }}
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
                    transition={{ delay: 1.0, duration: 0.4 }}
                    style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 52 }}
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
                                border: '1.5px solid var(--border)',
                                color: 'var(--muted)', background: 'var(--surf)',
                                textDecoration: 'none',
                                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-dim)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'var(--surf)'; }}
                        >
                            <Icon size={14} />
                        </a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'default' }}
                    onClick={() => scrollToSection('about')}
                >
                    <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 9,
                        letterSpacing: '0.28em', textTransform: 'uppercase',
                        color: 'var(--muted)', opacity: 0.5,
                    }}>
                        Scroll
                    </span>
                    {/* Animated scroll line */}
                    <div style={{
                        width: 1, height: 36,
                        background: 'linear-gradient(to bottom, var(--accent), transparent)',
                        animation: 'scroll-line 1.8s ease-in-out infinite',
                    }} />
                </motion.div>
            </div>
        </section>
    );
}
