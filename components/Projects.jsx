'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { workData } from '../assets/assets';

function GithubIcon({ size = 11 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
    );
}

function StackCard({ project, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start start'],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

    const hasLiveLink = project.link && project.link !== project.github;
    const num         = String(index + 1).padStart(2, '0');
    const stickyTop   = 72 + index * 18;

    return (
        <div ref={ref} style={{ position: 'sticky', top: stickyTop, zIndex: 10 + index, marginBottom: 12 }}>
            <motion.div style={{ scale }} className="overflow-hidden rounded-2xl">

                {/* Watermark */}
                <div style={{
                    position: 'absolute', right: -10, top: '50%',
                    transform: 'translateY(-50%)',
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: 'clamp(80px, 12vw, 180px)',
                    fontWeight: 400, color: 'rgba(28,25,23,0.06)',
                    lineHeight: 1, pointerEvents: 'none', userSelect: 'none', zIndex: 0,
                }}>
                    {num}
                </div>

                <div style={{
                    position: 'relative', zIndex: 1,
                    border: '1px solid var(--border)',
                    background: 'var(--surf)',
                    boxShadow: '0 2px 24px var(--shadow)',
                    borderRadius: 16, overflow: 'hidden',
                }}>
                    <div style={{
                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: 'clamp(24px, 3vw, 42px)',
                    }}>
                        <div>
                            {/* Index + category */}
                            <div style={{
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'space-between', gap: 12, marginBottom: 18,
                            }}>
                                <span style={{
                                    fontFamily: 'var(--font-mono)', fontSize: 9,
                                    color: 'rgba(28,25,23,0.2)', letterSpacing: '0.3em',
                                }}>
                                    {num}
                                </span>
                                <span style={{
                                    fontFamily: 'var(--font-mono)', fontSize: 9,
                                    letterSpacing: '0.24em', textTransform: 'uppercase',
                                    padding: '4px 10px', borderRadius: 100,
                                    border: '1px solid rgba(200,98,42,0.25)',
                                    background: 'rgba(200,98,42,0.07)',
                                    color: 'var(--accent)',
                                }}>
                                    {project.description}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                                fontSize: 'clamp(22px, 2.8vw, 40px)',
                                fontWeight: 400, color: 'var(--fg)',
                                letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 5,
                            }}>
                                {project.title}
                            </h3>
                            <p style={{
                                fontFamily: 'var(--font-mono)', fontSize: 11,
                                color: 'var(--accent)', marginBottom: 14,
                            }}>
                                {project.tagline}
                            </p>

                            {/* Impact */}
                            <p style={{
                                fontFamily: 'var(--font-body)', fontSize: 14,
                                lineHeight: 1.65, color: 'var(--muted)',
                                maxWidth: 420, marginBottom: 18,
                            }}>
                                {project.impact}
                            </p>

                            {/* Metrics */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 18 }}>
                                {project.metrics.map((m) => (
                                    <span key={m} style={{
                                        fontFamily: 'var(--font-mono)', fontSize: 9,
                                        fontWeight: 600, color: 'var(--accent)',
                                        padding: '5px 11px', borderRadius: 100,
                                        border: '1px solid rgba(200,98,42,0.22)',
                                        background: 'rgba(200,98,42,0.06)',
                                    }}>
                                        {m}
                                    </span>
                                ))}
                            </div>

                            {/* Tech */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                                {project.tech.slice(0, 6).map((t) => (
                                    <span key={t} style={{
                                        fontFamily: 'var(--font-mono)', fontSize: 9,
                                        borderRadius: 6, border: '1px solid var(--border)',
                                        background: 'var(--base)', color: 'var(--muted)',
                                        padding: '4px 9px',
                                    }}>
                                        {t}
                                    </span>
                                ))}
                                {project.tech.length > 6 && (
                                    <span style={{
                                        fontFamily: 'var(--font-mono)', fontSize: 9,
                                        borderRadius: 6, border: '1px solid var(--border)',
                                        color: 'rgba(28,25,23,0.3)', padding: '4px 9px',
                                    }}>
                                        +{project.tech.length - 6}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* CTAs */}
                        <div style={{ marginTop: 26, display: 'flex', gap: 9 }}>
                            {hasLiveLink && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 5,
                                        borderRadius: 100, padding: '9px 20px',
                                        fontFamily: 'var(--font-mono)', fontSize: 9,
                                        fontWeight: 700, letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: '#fff', background: 'var(--accent)',
                                        textDecoration: 'none', transition: 'background 0.2s',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.background = '#B5561F')}
                                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
                                >
                                    Live <ArrowUpRight size={10} />
                                </a>
                            )}
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 5,
                                    borderRadius: 100, padding: '9px 20px',
                                    fontFamily: 'var(--font-mono)', fontSize: 9,
                                    fontWeight: 600, letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'var(--muted)', background: 'var(--base)',
                                    border: '1px solid var(--border)',
                                    textDecoration: 'none',
                                    transition: 'border-color 0.2s, color 0.2s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,98,42,0.35)'; e.currentTarget.style.color = 'var(--accent)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                            >
                                <GithubIcon size={10} /> Code
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" style={{ background: 'var(--base)', padding: '80px 0 100px' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 max(28px, 4vw)' }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.55 }}
                    style={{ marginBottom: 52 }}
                >
                    <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 9,
                        letterSpacing: '0.4em', textTransform: 'uppercase',
                        color: 'var(--muted)', display: 'block', marginBottom: 12,
                    }}>
                        Selected Work
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(32px, 4.5vw, 64px)',
                        fontWeight: 400, color: 'var(--fg)',
                        letterSpacing: '-0.025em', lineHeight: 1.1,
                    }}>
                        Things I&apos;ve{' '}
                        <span style={{ color: 'var(--accent)' }}>built.</span>
                    </h2>
                </motion.div>

                {workData.map((p, i) => (
                    <StackCard key={p.title} project={p} index={i} />
                ))}

                {/* GitHub link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ marginTop: 36 }}
                >
                    <a
                        href="https://github.com/swarajreddy10"
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 7,
                            fontFamily: 'var(--font-mono)', fontSize: 10,
                            color: 'var(--muted)', textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                    >
                        <GithubIcon size={12} /> More on GitHub <ArrowUpRight size={10} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
