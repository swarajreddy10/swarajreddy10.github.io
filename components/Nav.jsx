'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
    { label: 'About',    id: 'about'    },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills',   id: 'skills'   },
    { label: 'Contact',  id: 'contact'  },
];

const ACCENT = '#C8622A';
const FG     = '#F2EDE8';
const MUTED  = '#6B6560';
const BORDER = '#252220';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open,     setOpen]     = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'border-b'
                    : ''
            }`}
            style={scrolled ? {
                background: 'rgba(9,8,10,0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderColor: BORDER,
            } : {}}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Wordmark */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="font-mono text-sm font-bold tracking-[0.25em] transition-opacity hover:opacity-70"
                    style={{ color: ACCENT }}
                >
                    Swaraj.
                </button>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map(({ label, id }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors"
                            style={{ color: MUTED }}
                            onMouseEnter={e => (e.currentTarget.style.color = FG)}
                            onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                        >
                            {label}
                        </button>
                    ))}
                    <a
                        href="mailto:swarajchandra22@gmail.com"
                        className="rounded-full px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-200"
                        style={{ border: `1px solid ${ACCENT}55`, color: ACCENT }}
                        onMouseEnter={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = ACCENT; }}
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Hamburger */}
                <button
                    className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span className="h-px w-5 transition-all duration-200"
                        style={{ background: FG, transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
                    <span className="h-px w-5 transition-all duration-200"
                        style={{ background: FG, opacity: open ? 0 : 1 }} />
                    <span className="h-px w-5 transition-all duration-200"
                        style={{ background: FG, transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-t md:hidden"
                        style={{
                            borderColor: BORDER,
                            background: 'rgba(9,8,10,0.96)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        <div className="flex flex-col px-6 py-4">
                            {NAV_LINKS.map(({ label, id }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className="py-3 text-left font-mono text-sm font-semibold uppercase tracking-[0.22em] transition-colors"
                                    style={{ color: MUTED }}
                                    onMouseEnter={e => (e.currentTarget.style.color = FG)}
                                    onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                                >
                                    {label}
                                </button>
                            ))}
                            <a
                                href="mailto:swarajchandra22@gmail.com"
                                className="mt-2 inline-flex w-max rounded-full px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em]"
                                style={{ border: `1px solid ${ACCENT}55`, color: ACCENT }}
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
