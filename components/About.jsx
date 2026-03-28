'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';

const ACCENT  = '#C8622A';
const FG      = '#F2EDE8';
const MUTED   = '#6B6560';
const BORDER  = '#252220';
const SURF    = '#111010';
const MARQUEE = 'ENGINEER · BUILDER · FULL-STACK · AI SYSTEMS · HYDERABAD · OPEN TO ROLES · ';

const STATS = [
    { label: 'CGPA',    value: '8.2 / 10'       },
    { label: 'Grad',    value: 'GITAM 2025'      },
    { label: 'Base',    value: 'Hyderabad'       },
    { label: 'Open to', value: 'Hybrid / Remote' },
];

const TIMELINE = [
    {
        period: 'Sep 2025 – Present',
        role: 'Full-Stack Software Developer',
        company: 'Dexaminds',
        badge: 'Full-time',
        highlights: [
            'Python/FastAPI document-intelligence pipeline — 90%+ accuracy, FHIR R4 output, multi-LLM routing across Gemini, Azure OpenAI, and Bedrock',
            'Node.js/Express/TypeScript microservices at 99.5% uptime with 85% test coverage and GitHub Actions CI/CD',
            'OAuth2 + JWT auth microservice with Cognito user pools and auto-generated Mermaid UML docs',
        ],
    },
    {
        period: 'Jun – Sep 2025',
        role: 'Software Engineering Intern',
        company: 'Dexaminds',
        badge: 'Internship',
        highlights: [
            'React + TypeScript components across the full UI-to-API layer shipped directly to live production',
            'Resolved 15+ production bugs using Chrome DevTools and server logs, every one traced to root cause',
        ],
    },
    {
        period: 'Aug 2021 – Jun 2025',
        role: 'B.Tech Computer Science',
        company: 'GITAM University — Hyderabad',
        badge: 'Education',
        isEducation: true,
        highlights: [
            'CGPA 8.2 / 10',
            'Final-year project: distributed microservices with Spring Boot and event-driven architecture',
            'Core CS: DSA, OS, DBMS, Networks, System Design',
        ],
    },
];

/* ── Marquee strip ── */
function Marquee() {
    return (
        <div className="overflow-hidden border-y py-3.5" style={{ borderColor: BORDER, background: '#0D0C0E' }}>
            <motion.div
                animate={{ x: ['0%', '-33.33%'] }}
                transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
                className="flex whitespace-nowrap will-change-transform"
            >
                {[...Array(3)].map((_, k) => (
                    <span key={k} className="font-mono text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: '#2E2B28' }}>
                        {MARQUEE}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

/* ── Mobile timeline ── */
function MobileTimeline() {
    return (
        <div className="mx-auto max-w-lg px-4 pb-20 pt-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.35em]" style={{ color: MUTED }}>
                    Experience &amp; Education
                </span>
            </motion.div>

            <div className="relative space-y-4 pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-px"
                    style={{ background: `linear-gradient(to bottom, ${ACCENT}40, ${ACCENT}12, transparent)` }} />

                {TIMELINE.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.45, delay: i * 0.1 }}
                        className="relative"
                    >
                        <span className="absolute -left-[1.35rem] top-5 h-2.5 w-2.5 rounded-full border"
                            style={{ borderColor: `${ACCENT}50`, background: SURF, boxShadow: `0 0 8px ${ACCENT}20` }} />

                        <div className="rounded-2xl border p-5" style={{ borderColor: BORDER, background: SURF }}>
                            <div className="flex flex-wrap items-start justify-between gap-2">
                                <div className="min-w-0">
                                    {item.isEducation && (
                                        <p className="mb-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.3em]" style={{ color: MUTED }}>
                                            Education
                                        </p>
                                    )}
                                    <p className="text-base font-bold" style={{ color: FG }}>{item.role}</p>
                                    <p className="mt-0.5 font-mono text-xs" style={{ color: ACCENT }}>{item.company}</p>
                                </div>
                                <div className="flex flex-col items-end gap-1 shrink-0">
                                    <span className="font-mono text-[10px]" style={{ color: MUTED }}>{item.period}</span>
                                    <span className="rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold"
                                        style={{ borderColor: `${ACCENT}20`, background: `${ACCENT}0D`, color: `${ACCENT}B0` }}>
                                        {item.badge}
                                    </span>
                                </div>
                            </div>
                            <div className="my-3.5 h-px" style={{ background: 'rgba(255,255,255,0.04)' }} />
                            <ul className="space-y-2">
                                {item.highlights.map((h, hi) => (
                                    <li key={hi} className="flex gap-2 text-xs leading-relaxed" style={{ color: '#706A64' }}>
                                        <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full" style={{ background: `${ACCENT}60` }} />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

/* ── Desktop scroll-driven card ── */
function DesktopTimelineCard({ item, index, total, scrollYProgress }) {
    const step    = 1 / total;
    const overlap = 0.08;

    const enterStart = index === 0 ? 0 : Math.max(0, index * step - overlap);
    const enterEnd   = index === 0 ? 0 : index * step;
    const exitStart  = (index + 1) * step - overlap;
    const exitEnd    = Math.min(1, (index + 1) * step);

    let inputRange, opacityOut, yOut;
    if (index === 0) {
        inputRange = [0,          exitStart, exitEnd];
        opacityOut = [1,          1,         0      ];
        yOut       = [0,          0,         -32    ];
    } else if (index === total - 1) {
        inputRange = [enterStart, enterEnd,  1  ];
        opacityOut = [0,          1,         1  ];
        yOut       = [32,         0,         0  ];
    } else {
        inputRange = [enterStart, enterEnd, exitStart, exitEnd];
        opacityOut = [0,          1,        1,         0      ];
        yOut       = [32,         0,        0,         -32    ];
    }

    const opacity = useTransform(scrollYProgress, inputRange, opacityOut);
    const y       = useTransform(scrollYProgress, inputRange, yOut);

    return (
        <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
            <div className="w-full rounded-2xl border p-8"
                style={{
                    borderColor: BORDER, background: SURF,
                    boxShadow: '0 4px 40px rgba(0,0,0,0.5)',
                }}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                        {item.isEducation && (
                            <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: MUTED }}>
                                Education
                            </p>
                        )}
                        <p className="text-2xl font-bold tracking-tight" style={{ color: FG }}>{item.role}</p>
                        <p className="mt-0.5 font-mono text-sm" style={{ color: ACCENT }}>{item.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <span className="font-mono text-[11px]" style={{ color: MUTED }}>{item.period}</span>
                        <span className="rounded-full border px-3 py-1 font-mono text-[10px] font-semibold"
                            style={{ borderColor: `${ACCENT}20`, background: `${ACCENT}0D`, color: `${ACCENT}B0` }}>
                            {item.badge}
                        </span>
                    </div>
                </div>
                <div className="my-5 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <ul className="space-y-3">
                    {item.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-3 text-[15px] leading-relaxed" style={{ color: '#706A64' }}>
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: `${ACCENT}55` }} />
                            {h}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

function DesktopTimeline() {
    const timelineRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ['start start', 'end start'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        const idx = Math.min(Math.floor(v * TIMELINE.length), TIMELINE.length - 1);
        setActiveIndex(idx);
    });

    return (
        <div ref={timelineRef} style={{ height: `${TIMELINE.length * 100}vh` }} className="relative">
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="mx-auto flex h-full max-w-3xl flex-col justify-center px-6 py-14">

                    <div className="mb-7 flex items-center justify-between">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em]" style={{ color: MUTED }}>
                            Experience &amp; Education
                        </span>
                        <span className="font-mono text-sm font-bold">
                            <motion.span
                                key={activeIndex}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ color: ACCENT }}
                            >
                                {String(activeIndex + 1).padStart(2, '0')}
                            </motion.span>
                            <span style={{ color: MUTED }}>{' / '}{String(TIMELINE.length).padStart(2, '0')}</span>
                        </span>
                    </div>

                    <div className="relative flex-1" style={{ maxHeight: 'min(58vh, 480px)' }}>
                        {TIMELINE.map((item, i) => (
                            <DesktopTimelineCard
                                key={i} item={item} index={i}
                                total={TIMELINE.length} scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>

                    {/* Progress pills */}
                    <div className="mt-7 flex items-center justify-center gap-2">
                        {TIMELINE.map((_, i) => (
                            <motion.div
                                key={i}
                                className="rounded-full"
                                style={{ background: ACCENT, height: 4 }}
                                animate={{ width: i === activeIndex ? 28 : 5, opacity: i === activeIndex ? 1 : 0.18 }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>

                    <motion.p
                        animate={{ opacity: activeIndex === 0 ? 0.5 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.4em]"
                        style={{ color: MUTED }}
                    >
                        scroll to navigate
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <section id="about" style={{ background: '#09080A' }}>
            <Marquee />

            {/* Bio */}
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-28">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

                    <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.65 }}
                    >
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.35em] sm:text-[11px]"
                            style={{ color: `${ACCENT}90` }}>
                            About
                        </span>
                        <h2 className="mt-3 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl" style={{ color: FG }}>
                            Engineering software{' '}
                            <span style={{ color: ACCENT }}>that earns trust</span>
                        </h2>
                        <p className="mt-5 text-[15px] leading-relaxed sm:text-[17px]" style={{ color: '#706A64' }}>
                            Full-stack developer at Dexaminds, B.Tech CSE from GITAM (2025). I build
                            end-to-end systems — AI pipelines, microservices, SaaS products — keeping
                            CI/CD automated, releases stable, and metrics observable.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                            Medical document intelligence in production. Microservices at 99.5% uptime.
                            SaaS with 95%+ test coverage. Every number is real.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        className="grid grid-cols-2 content-start gap-3"
                    >
                        {STATS.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, scale: 0.94 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                                className="rounded-xl border px-4 py-3.5"
                                style={{ borderColor: BORDER, background: SURF }}
                            >
                                <p className="font-mono text-[10px] uppercase tracking-[0.25em]"
                                    style={{ color: `${ACCENT}70` }}>
                                    {s.label}
                                </p>
                                <p className="mt-1.5 text-sm font-semibold" style={{ color: FG }}>{s.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="md:hidden"><MobileTimeline /></div>
            <div className="hidden md:block"><DesktopTimeline /></div>
        </section>
    );
}
