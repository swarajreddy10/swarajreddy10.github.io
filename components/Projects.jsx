'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { workData } from '../assets/assets';

const ACCENT  = '#C8622A';
const FG      = '#F2EDE8';
const MUTED   = '#6B6560';
const BORDER  = '#252220';
const BG_CARD = '#111010';

/* ── Stacking card (desktop) ── */
function StackCard({ project, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start start'],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);

    const hasLiveLink = project.link && project.link !== project.github;
    const num         = String(index + 1).padStart(2, '0');
    const stickyTop   = 72 + index * 22;

    return (
        <div ref={ref} style={{ position: 'sticky', top: stickyTop, zIndex: 10 + index }} className="mb-4">
            <motion.div
                style={{
                    scale,
                    border: `1px solid ${BORDER}`,
                    background: BG_CARD,
                    boxShadow: '0 4px 40px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)',
                }}
                className="overflow-hidden rounded-2xl"
            >
                <div className="grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px]">

                    {/* Left */}
                    <div className="flex flex-col justify-between p-7 lg:p-9">
                        <div>
                            <div className="mb-4 flex items-start justify-between gap-4">
                                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em]"
                                    style={{ color: '#2E2B28' }}>
                                    {num}
                                </span>
                                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.25em] px-2.5 py-1 rounded-full border"
                                    style={{ color: ACCENT, borderColor: `${ACCENT}30`, background: `${ACCENT}0C` }}>
                                    {project.description}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold tracking-tight lg:text-3xl" style={{ color: FG }}>
                                {project.title}
                            </h3>
                            <p className="mt-1 font-mono text-sm font-semibold" style={{ color: ACCENT }}>
                                {project.tagline}
                            </p>
                            <p className="mt-4 text-[14px] leading-relaxed max-w-md" style={{ color: '#706A64' }}>
                                {project.impact}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-1.5">
                                {project.tech.slice(0, 6).map((t) => (
                                    <span key={t} className="rounded-md border px-2.5 py-1 font-mono text-[10px]"
                                        style={{ borderColor: BORDER, background: '#181618', color: '#4A4743' }}>
                                        {t}
                                    </span>
                                ))}
                                {project.tech.length > 6 && (
                                    <span className="rounded-md border px-2.5 py-1 font-mono text-[10px]"
                                        style={{ borderColor: '#1E1C1E', color: '#2E2B28' }}>
                                        +{project.tech.length - 6}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mt-7 flex items-center gap-3">
                            {hasLiveLink && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 active:scale-95"
                                    style={{ background: ACCENT }}
                                    onMouseEnter={e => { e.currentTarget.style.background = '#D4703A'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = ACCENT; }}>
                                    Live <ArrowUpRight size={11} />
                                </a>
                            )}
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-200 active:scale-95"
                                style={{ borderColor: BORDER, color: MUTED, background: '#181618' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = `${ACCENT}40`; e.currentTarget.style.color = ACCENT; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = MUTED; }}>
                                <Github size={11} /> Code
                            </a>
                        </div>
                    </div>

                    {/* Right — image + metrics */}
                    <div className="relative hidden overflow-hidden md:block" style={{ borderLeft: `1px solid ${BORDER}` }}>
                        <img src={project.bgImage} alt={project.title}
                            className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
                        <div className="absolute inset-0"
                            style={{ background: `linear-gradient(to right, ${BG_CARD}, ${BG_CARD}50, transparent)` }} />
                        <div className="absolute inset-0"
                            style={{ background: `linear-gradient(to top, ${BG_CARD}95, transparent 55%)` }} />

                        <div className="absolute bottom-7 left-6 right-6 flex flex-wrap gap-2">
                            {project.metrics.map((m) => (
                                <span key={m} className="rounded-full border px-3 py-1.5 font-mono text-[10px] font-semibold backdrop-blur-sm"
                                    style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}0D`, color: ACCENT }}>
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

/* ── Mobile card ── */
function MobileCard({ project, index }) {
    const hasLiveLink = project.link && project.link !== project.github;
    const num         = String(index + 1).padStart(2, '0');

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: BORDER, background: BG_CARD, boxShadow: '0 2px 16px rgba(0,0,0,0.4)' }}
        >
            <div className="relative h-40 overflow-hidden">
                <img src={project.bgImage} alt={project.title} className="h-full w-full object-cover opacity-30" loading="lazy" />
                <div className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, transparent, ${BG_CARD})` }} />
                <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-1.5">
                    {project.metrics.map((m) => (
                        <span key={m} className="rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold"
                            style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}10`, color: ACCENT }}>
                            {m}
                        </span>
                    ))}
                </div>
                <span className="absolute bottom-3 left-4 font-mono text-[10px] font-bold" style={{ color: '#2E2B28' }}>{num}</span>
            </div>

            <div className="p-4">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em]" style={{ color: MUTED }}>{project.description}</p>
                <h3 className="mt-1 text-lg font-bold tracking-tight" style={{ color: FG }}>{project.title}</h3>
                <p className="mt-0.5 font-mono text-xs font-semibold" style={{ color: ACCENT }}>{project.tagline}</p>
                <p className="mt-3 text-xs leading-relaxed" style={{ color: '#706A64' }}>{project.impact}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="rounded border px-2 py-1 font-mono text-[10px]"
                            style={{ borderColor: BORDER, background: '#181618', color: '#4A4743' }}>
                            {t}
                        </span>
                    ))}
                </div>

                <div className="mt-4 flex gap-2">
                    {hasLiveLink && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white active:scale-95"
                            style={{ background: ACCENT }}>
                            Live <ArrowUpRight size={10} />
                        </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className={`${hasLiveLink ? '' : 'flex-1'} inline-flex items-center justify-center gap-1.5 rounded-full border px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] active:scale-95`}
                        style={{ borderColor: BORDER, color: MUTED, background: '#181618' }}>
                        <Github size={11} /> Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-20 sm:py-28" style={{ background: '#09080A' }}>
            <div className="mx-auto max-w-5xl px-4 sm:px-6">

                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.55 }}
                    className="mb-14 sm:mb-16"
                >
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.35em] sm:text-[11px]" style={{ color: MUTED }}>
                        Selected Work
                    </span>
                    <h2 className="mt-3 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl" style={{ color: FG }}>
                        Things I&apos;ve{' '}
                        <span style={{ color: ACCENT }}>built.</span>
                    </h2>
                </motion.div>

                <div className="grid gap-4 md:hidden">
                    {workData.map((p, i) => <MobileCard key={p.title} project={p} index={i} />)}
                </div>

                <div className="hidden md:block">
                    {workData.map((p, i) => (
                        <StackCard key={p.title} project={p} index={i} total={workData.length} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12"
                >
                    <a href="https://github.com/swarajreddy10" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs transition-colors"
                        style={{ color: MUTED }}
                        onMouseEnter={e => (e.currentTarget.style.color = FG)}
                        onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                        <Github size={13} /> More on GitHub <ArrowUpRight size={11} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
