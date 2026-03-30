'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
    { label: 'About',   id: 'about'    },
    { label: 'Work',    id: 'projects' },
    { label: 'Skills',  id: 'skills'   },
    { label: 'Contact', id: 'contact'  },
];

const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'contact'];

export default function Nav() {
    const [open,     setOpen]     = useState(false);
    const [activeId, setActiveId] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? window.scrollY / total : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observers = [];
        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
                { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (window.__lenis && el) {
            window.__lenis.scrollTo(el, { offset: -60, duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        } else {
            el?.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0,
                    zIndex: 50,
                    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                    background: scrolled ? 'rgba(250,248,238,0.72)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
                    transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
                    overflow: 'visible',
                }}
            >
                <div style={{
                    maxWidth: 1100, margin: '0 auto',
                    padding: '8px max(24px, 4vw)',
                    minHeight: 60,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    overflow: 'visible',
                }}>
                    {/* Name */}
                    <button
                        onClick={() => window.__lenis ? window.__lenis.scrollTo(0, { duration: 1.2 }) : window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{
                            fontFamily: 'var(--font-display)', fontStyle: 'italic',
                            fontSize: 18, fontWeight: 400, color: 'var(--fg)',
                            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                            letterSpacing: '0.05em', transition: 'color 0.2s',
                            whiteSpace: 'nowrap', flexShrink: 0,
                            lineHeight: 1.4, paddingBottom: 4,
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
                    >
                        Portfolio
                    </button>

                    {/* Desktop right */}
                    <div className="hidden md:flex" style={{ alignItems: 'center', gap: 32 }}>
                        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
                            {NAV_LINKS.map(({ label, id }) => {
                                const isActive = activeId === id;
                                return (
                                    <button
                                        key={id}
                                        onClick={() => scrollTo(id)}
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: 14, fontWeight: isActive ? 600 : 400,
                                            color: isActive ? 'var(--accent)' : 'var(--muted)',
                                            background: 'none', border: 'none',
                                            cursor: 'pointer', padding: 0,
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                        onMouseLeave={e => (e.currentTarget.style.color = isActive ? 'var(--accent)' : 'var(--muted)')}
                                    >
                                        {label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Scroll progress line */}
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0,
                        height: '1.5px',
                        background: 'var(--accent)',
                        width: `${progress * 100}%`,
                        opacity: scrolled ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                    }} />

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        style={{
                            display: 'flex', flexDirection: 'column',
                            gap: 5, background: 'none', border: 'none',
                            cursor: 'pointer', padding: 4,
                        }}
                    >
                        {[0, 1, 2].map((i) => (
                            <span key={i} style={{
                                display: 'block', width: 20, height: 1.5,
                                background: 'var(--fg)', borderRadius: 1,
                                transform: open
                                    ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                                    : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                                    : 'scaleX(0)'
                                    : 'none',
                                opacity: open && i === 1 ? 0 : 1,
                                transition: 'transform 0.22s ease, opacity 0.22s ease',
                            }} />
                        ))}
                    </button>
                </div>
            </motion.header>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        style={{
                            position: 'fixed', top: 60, left: 0, right: 0,
                            zIndex: 49,
                            background: 'var(--base)',
                            backdropFilter: 'none',
                            borderBottom: '1px solid var(--border)',
                            padding: '16px max(24px, 4vw) 24px',
                            display: 'flex', flexDirection: 'column', gap: 0,
                        }}
                    >
                        {NAV_LINKS.map(({ label, id }) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                style={{
                                    fontFamily: 'var(--font-body)', fontSize: 15,
                                    fontWeight: 400, color: 'var(--fg)',
                                    background: 'none', border: 'none',
                                    cursor: 'pointer', textAlign: 'left',
                                    padding: '12px 0',
                                    borderBottom: '1px solid var(--border)',
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
                            >
                                {label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
