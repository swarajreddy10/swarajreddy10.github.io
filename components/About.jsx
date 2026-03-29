'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const TIMELINE = [
    {
        period: 'Sep 2025 – Present',
        role: 'Software Engineer',
        company: 'Dexaminds',
        badge: 'Full-time',
        highlights: [
            'Designed mobile auth microservice for Osulo using AWS Cognito with OAuth2 and JWT; defined service boundaries, API contracts, and token lifecycle flows documented with Mermaid UML diagrams',
            'Built Node.js/TypeScript microservices in Docker at 99.5% uptime and 85% test coverage; configured GitHub Actions CI/CD pipelines and automated contact workflows using Botpress',
            'Engineered a Python/FastAPI document-intelligence pipeline for Osulo routing across Vertex AI Gemini, Azure OpenAI, and AWS Bedrock by document complexity, reaching 90%+ accuracy on FHIR R4 output',
        ],
    },
    {
        period: 'Jun 2025 – Sep 2025',
        role: 'Software Engineer Intern',
        company: 'Dexaminds',
        badge: 'Internship',
        highlights: [
            'Built reusable React/TypeScript components with lazy loading and code splitting, improving page load time and UI responsiveness; shipped tested code in Agile sprints across the full UI-to-API layer',
            'Tracked down and fixed 15+ production bugs across frontend and backend using Chrome DevTools and server logs, tracing each to root cause and deploying fixes to production',
        ],
    },
    {
        period: '2021 – 2025',
        role: 'B.Tech Computer Science',
        company: 'GITAM University, Hyderabad',
        badge: 'Education',
        highlights: [
            'CGPA 8.2. Distributed microservices capstone with Spring Boot and event-driven architecture',
        ],
    },
];

function useMonthsSince(year, month) {
    const [months, setMonths] = useState(0);
    useEffect(() => {
        const now = new Date();
        const diff = (now.getFullYear() - year) * 12 + (now.getMonth() - (month - 1));
        setMonths(Math.max(0, diff));
    }, [year, month]);
    return months;
}

function CardContent({ item }) {
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, marginBottom: 12 }}>
                <div>
                    <p style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(15px, 1.6vw, 19px)',
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
                        border: '1px solid',
                        borderColor: item.badge === 'Full-time'
                            ? 'rgba(22,163,74,0.3)'
                            : item.badge === 'Internship'
                            ? 'rgba(138,126,26,0.35)'
                            : 'rgba(85,0,3,0.2)',
                        background: item.badge === 'Full-time'
                            ? 'rgba(22,163,74,0.1)'
                            : item.badge === 'Internship'
                            ? 'rgba(184,171,56,0.15)'
                            : 'rgba(85,0,3,0.07)',
                        color: item.badge === 'Full-time'
                            ? '#16A34A'
                            : item.badge === 'Internship'
                            ? 'var(--accent)'
                            : 'var(--muted)',
                        padding: '2px 9px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9, letterSpacing: '0.2em',
                        textTransform: 'uppercase', fontWeight: 600,
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
        </>
    );
}

function FlipCard({ item, isLeft, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.15'] });
    const rotateY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [isLeft ? -60 : 60, 0, 0, isLeft ? 60 : -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale   = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.88, 1, 1, 0.88]);

    return (
        <motion.div
            ref={ref}
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 40px 1fr',
                alignItems: 'start',
                gap: 0,
                opacity,
            }}
        >
            {/* Left slot */}
            <div style={{ paddingRight: 28 }}>
                {isLeft && (
                    <motion.div
                        style={{
                            rotateY, scale,
                            transformPerspective: 1000,
                            border: '1px solid var(--border)',
                            borderRadius: 16,
                            background: 'var(--surf)',
                            padding: 'clamp(28px, 4vw, 48px)',
                            boxShadow: '0 0 24px 6px var(--shadow-lg)',
                        }}
                    >
                        <CardContent item={item} />
                    </motion.div>
                )}
            </div>

            {/* Center dot */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 20, position: 'relative', zIndex: 1 }}>
                <motion.div
                    style={{
                        width: 12, height: 12, borderRadius: '50%',
                        border: '2px solid var(--accent)',
                        background: 'var(--base)',
                        scale,
                    }}
                />
            </div>

            {/* Right slot */}
            <div style={{ paddingLeft: 28 }}>
                {!isLeft && (
                    <motion.div
                        style={{
                            rotateY, scale,
                            transformPerspective: 1000,
                            border: '1px solid var(--border)',
                            borderRadius: 16,
                            background: 'var(--surf)',
                            padding: 'clamp(28px, 4vw, 48px)',
                            boxShadow: '0 0 24px 6px var(--shadow-lg)',
                        }}
                    >
                        <CardContent item={item} />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

export default function About() {
    const months = useMonthsSince(2025, 6);
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start center', 'end center'] });
    const pathLength = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

    return (
        <section id="about" style={{ background: 'var(--base)', padding: '100px 0' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 max(28px, 4vw)' }}>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55 }}
                    style={{ marginBottom: 72 }}
                >
                    <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        letterSpacing: '0.36em', textTransform: 'uppercase',
                        color: 'var(--accent)', display: 'block', marginBottom: 20,
                        fontWeight: 600,
                    }}>
                        About
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(28px, 4vw, 52px)',
                        fontWeight: 500, color: 'var(--fg)',
                        letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: 20,
                    }}>
                        I build systems that earn trust.
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 16,
                        lineHeight: 1.75, color: 'var(--muted)',
                    }}>
                        Full-stack engineer integrating enterprise LLMs, building production microservices,
                        and shipping SaaS products. B.Tech CS, GITAM (2025). My work has helped
                        route medical documents across three LLM providers at 90%+ accuracy and kept
                        microservices running at 99.5% uptime for real users.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div ref={timelineRef}>
                    <motion.span
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.4 }}
                        style={{
                            fontFamily: 'var(--font-mono)', fontSize: 10,
                            letterSpacing: '0.36em', textTransform: 'uppercase',
                            color: 'var(--accent)', display: 'block', marginBottom: 48,
                            fontWeight: 600,
                        }}
                    >
                        Production experience ({months} month{months !== 1 ? 's' : ''})
                    </motion.span>

                    {/* Center line */}
                    <div style={{ position: 'relative' }}>
                        <svg
                            style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 2, height: '100%', zIndex: 0 }}
                            viewBox="0 0 2 100" preserveAspectRatio="none"
                        >
                            <line x1="1" y1="0" x2="1" y2="100" stroke="var(--border)" strokeWidth="2" />
                            <motion.line x1="1" y1="0" x2="1" y2="100"
                                stroke="var(--accent)" strokeWidth="2"
                                style={{ pathLength }} strokeLinecap="round"
                            />
                        </svg>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                            {TIMELINE.map((item, i) => (
                                <FlipCard key={i} item={item} isLeft={i % 2 === 0} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
