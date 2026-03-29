'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const TIMELINE = [
    {
        period: 'Sep 2025 – Present',
        role: 'Full-Stack Software Developer',
        company: 'Dexaminds',
        badge: 'Full-time',
        highlights: [
            'Medical document intelligence pipeline, 90%+ accuracy, multi-LLM routing across Gemini, Azure OpenAI and Bedrock',
            'Node.js microservices at 99.5% uptime with GitHub Actions CI/CD',
        ],
    },
    {
        period: 'Jun – Sep 2025',
        role: 'Software Engineering Intern',
        company: 'Dexaminds',
        badge: 'Internship',
        highlights: [
            'Shipped React + TypeScript components directly to production, resolved 15+ bugs to root cause',
        ],
    },
    {
        period: '2021 – 2025',
        role: 'B.Tech Computer Science',
        company: 'GITAM University, Hyderabad',
        badge: 'Education',
        highlights: [
            'CGPA 8.2. Distributed microservices capstone with Spring Boot',
        ],
    },
];

export default function About() {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start center', 'end center'] });
    const pathLength = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

    return (
        <section id="about" style={{ background: 'var(--base)', padding: '100px 0' }}>
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 max(28px, 4vw)' }}>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55 }}
                    style={{ marginBottom: 72 }}
                >
                    <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 9,
                        letterSpacing: '0.4em', textTransform: 'uppercase',
                        color: 'var(--accent)', display: 'block', marginBottom: 20,
                    }}>
                        About
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(28px, 4vw, 52px)',
                        fontWeight: 400, color: 'var(--fg)',
                        letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: 20,
                    }}>
                        I build systems that earn trust.
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 16,
                        lineHeight: 1.75, color: 'var(--muted)',
                    }}>
                        Full-stack engineer at Dexaminds building medical AI pipelines, production microservices
                        and SaaS products. B.Tech CS from GITAM (2025). Every metric here is production-measured.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div ref={timelineRef}>
                    <motion.span
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.4 }}
                        style={{
                            fontFamily: 'var(--font-mono)', fontSize: 9,
                            letterSpacing: '0.4em', textTransform: 'uppercase',
                            color: 'var(--accent)', display: 'block', marginBottom: 32,
                        }}
                    >
                        Experience
                    </motion.span>

                    <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '0 24px' }}>
                        {/* SVG line */}
                        <div style={{ position: 'relative' }}>
                            <svg style={{ position: 'absolute', top: 8, left: 9, width: 2, height: 'calc(100% - 8px)' }}
                                viewBox="0 0 2 100" preserveAspectRatio="none">
                                <line x1="1" y1="0" x2="1" y2="100" stroke="var(--border)" strokeWidth="2" />
                                <motion.line x1="1" y1="0" x2="1" y2="100"
                                    stroke="var(--accent)" strokeWidth="2"
                                    style={{ pathLength }} strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {TIMELINE.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.4, delay: i * 0.06 }}
                                    style={{ position: 'relative' }}
                                >
                                    {/* Node dot */}
                                    <div style={{
                                        position: 'absolute', left: -32, top: 20,
                                        width: 8, height: 8, borderRadius: '50%',
                                        border: '2px solid rgba(200,98,42,0.4)',
                                        background: 'var(--base)',
                                    }} />

                                    <div style={{
                                        border: '1px solid var(--border)',
                                        borderRadius: 12,
                                        background: 'var(--surf)',
                                        padding: 'clamp(18px, 2.5vw, 26px)',
                                        boxShadow: '0 1px 6px var(--shadow)',
                                    }}>
                                        <div style={{
                                            display: 'flex', flexWrap: 'wrap',
                                            justifyContent: 'space-between', gap: 8, marginBottom: 12,
                                        }}>
                                            <div>
                                                <p style={{
                                                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                                                    fontSize: 'clamp(16px, 1.8vw, 20px)',
                                                    fontWeight: 400, color: 'var(--fg)',
                                                    letterSpacing: '-0.01em', marginBottom: 3,
                                                }}>
                                                    {item.role}
                                                </p>
                                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)' }}>
                                                    {item.company}
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
                                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)' }}>
                                                    {item.period}
                                                </span>
                                                <span style={{
                                                    borderRadius: 100,
                                                    border: '1px solid rgba(200,98,42,0.2)',
                                                    background: 'rgba(200,98,42,0.07)',
                                                    color: 'var(--accent)',
                                                    padding: '2px 9px',
                                                    fontFamily: 'var(--font-mono)',
                                                    fontSize: 9, letterSpacing: '0.2em',
                                                    textTransform: 'uppercase',
                                                }}>
                                                    {item.badge}
                                                </span>
                                            </div>
                                        </div>

                                        <div style={{ height: 1, background: 'var(--border)', marginBottom: 12 }} />

                                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                            {item.highlights.map((h, hi) => (
                                                <li key={hi} style={{
                                                    display: 'flex', gap: 8, alignItems: 'flex-start',
                                                    fontFamily: 'var(--font-body)',
                                                    fontSize: 13, lineHeight: 1.6, color: 'var(--muted)',
                                                }}>
                                                    <span style={{ color: 'var(--accent)', marginTop: 3, flexShrink: 0, opacity: 0.6 }}>→</span>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
