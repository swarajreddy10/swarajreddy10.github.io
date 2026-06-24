'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { GraduationCap, Briefcase, Building2, MapPin } from 'lucide-react';

const TIMELINE = [
    {
        period: 'Sep 2025 – Present',
        role: 'Software Engineer',
        company: 'Dexaminds',
        location: 'Hyderabad, IN',
        badge: 'Full-time',
        highlights: [
            'I built the patient care application platform across ingestion and CDIS, owning the handoff boundary and shipping independently deployable Go services for control-plane and downstream processing.',
            'I built the AWS delivery path with Go, PostgreSQL, Terraform, Docker, and GitHub Actions, including EventBridge routing, Step Functions orchestration, and SQS DLQ workers.',
            'I delivered a system that runs end to end in 52.3s for ingestion, 48.1s for CDIS, with a 0.2s handoff gap and 100.6s overall runtime.',
            'I hardened the control plane with presigned S3 uploads, 24-hour idempotency, tombstone-first delete cleanup, and KMS-backed versioned storage for audit history and replay safety.',
        ],
    },
    {
        period: 'Jun 2025 – Sep 2025',
        role: 'Software Engineer Intern',
        company: 'Dexaminds',
        location: 'Hyderabad, IN',
        badge: 'Internship',
        highlights: [
            'I built reusable React/TypeScript components with lazy loading and code splitting, shipping tested UI-to-API features in Agile sprints.',
            'I tracked down and fixed 15+ production bugs across frontend and backend using Chrome DevTools and server logs, then pushed production fixes.',
        ],
    },
    {
        period: '2021 – 2025',
        role: 'B.Tech Computer Science',
        company: 'GITAM University',
        location: 'Hyderabad, IN',
        badge: 'Education',
        highlights: [
            'I completed my Bachelor of Technology in Computer Science with a CGPA of 8.2.',
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
                    {item.location && (
                        <p style={{
                            display: 'inline-flex', alignItems: 'center', gap: 3,
                            fontFamily: 'var(--font-mono)', fontSize: 9,
                            color: 'var(--muted)', marginTop: 4,
                            letterSpacing: '0.12em',
                        }}>
                            <MapPin size={9} strokeWidth={1.8} />
                            {item.location}
                        </p>
                    )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
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
                        <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0, opacity: 0.7 }}>
                            {item.badge === 'Education'
                                ? <GraduationCap size={13} />
                                : item.badge === 'Full-time'
                                ? <Briefcase size={13} />
                                : <Building2 size={13} />}
                        </span>
                        {h}
                    </li>
                ))}
            </ul>
        </>
    );
}

function FlipCard({ item, isLeft, index, isMobile }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.15'] });

    // Z-axis depth: card emerges from behind, fully surfaces in view, sinks back on exit
    const z       = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [-140, 0, 0, -140]);
    // Slight X tilt: tips toward viewer on enter, away on exit
    const rotateX = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [12, 0, 0, -12]);
    const scale   = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0.84, 1, 1, 0.84]);
    const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 1, 1, 0]);
    // Glow pulses to max when card is centred in view
    const glowSpread = useTransform(scrollYProgress, [0, 0.5, 1], [0, 38, 0]);
    const boxShadow  = useMotionTemplate`0 0 ${glowSpread}px 0px rgba(184,171,56,0.20), 0 8px 36px 0px rgba(85,0,3,0.10)`;

    const cardStyle = {
        z, rotateX, scale,
        transformPerspective: 1200,
        border: '1px solid var(--border)',
        borderRadius: 16,
        background: 'var(--surf)',
        padding: 'clamp(28px, 4vw, 48px)',
        boxShadow,
    };

    if (isMobile) {
        return (
            <motion.div
                ref={ref}
                style={{
                    opacity,
                    paddingTop: 0,
                    marginBottom: 18,
                    paddingLeft: 14,
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 10, marginLeft: 4 }}>
                    <span style={{
                        whiteSpace: 'nowrap',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 8,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        color: item.badge === 'Full-time' ? '#16A34A' : item.badge === 'Internship' ? 'var(--accent)' : 'var(--muted)',
                        background: 'var(--base)',
                        border: '1px solid',
                        borderColor: item.badge === 'Full-time' ? 'rgba(22,163,74,0.3)' : item.badge === 'Internship' ? 'rgba(184,171,56,0.35)' : 'rgba(85,0,3,0.15)',
                        borderRadius: 100,
                        padding: '3px 8px',
                    }}>
                        {item.period}
                    </span>
                </div>

                <motion.div style={{
                    ...cardStyle,
                    padding: 'clamp(18px, 4vw, 24px)',
                    borderRadius: 12,
                }}>
                    <CardContent item={item} />
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            style={{
                display: 'grid',
                gridTemplateColumns: '24px 1fr',
                alignItems: 'start',
                gap: 0,
                opacity,
                paddingTop: 40,
            }}
        >
            {/* Dot column — date pill + dot stacked on line */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
                {/* Date pill */}
                <span style={{
                    position: 'absolute',
                    top: -36,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-mono)',
                    fontSize: isMobile ? 8 : 9,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: item.badge === 'Full-time' ? '#16A34A' : item.badge === 'Internship' ? 'var(--accent)' : 'var(--muted)',
                    background: 'var(--base)',
                    border: '1px solid',
                    borderColor: item.badge === 'Full-time' ? 'rgba(22,163,74,0.3)' : item.badge === 'Internship' ? 'rgba(184,171,56,0.35)' : 'rgba(85,0,3,0.15)',
                    borderRadius: 100,
                    padding: '3px 8px',
                    zIndex: 3,
                }}>
                    {item.period}
                </span>
                {/* Dot */}
                <motion.div
                    style={{
                        width: isMobile ? 10 : 12, height: isMobile ? 10 : 12,
                        borderRadius: '50%',
                        border: '2px solid var(--accent)',
                        background: 'var(--base)',
                        flexShrink: 0,
                        marginTop: 4,
                        scale,
                        zIndex: 2,
                    }}
                />
            </div>

            {/* Card */}
            <div style={{ paddingLeft: isMobile ? 16 : 24, paddingBottom: 8 }}>
                <motion.div style={{ ...cardStyle, padding: isMobile ? 'clamp(18px, 4vw, 28px)' : 'clamp(20px, 3vw, 36px)', borderRadius: isMobile ? 12 : 14 }}>
                    <CardContent item={item} />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function About() {
    const months = useMonthsSince(2025, 6);
    const years = Math.floor(months / 12);
    const experienceLabel =
        months >= 12
            ? `${years} year${years !== 1 ? 's' : ''}`
            : `${months} month${months !== 1 ? 's' : ''}`;
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start center', 'end center'] });
    const pathLength = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 639px)');
        setIsMobile(mq.matches);
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    return (
        <section id="about" className="about-section" style={{ background: 'var(--base)', padding: '100px 0' }}>
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
                        Backend systems, cloud delivery, product interfaces. B.Tech CSE, GITAM, 2025.
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
                        Production experience ({experienceLabel})
                    </motion.span>

                    {/* Center line */}
                    <div style={{ position: 'relative' }}>
                        <svg
                            className="timeline-line"
                            style={{ position: 'absolute', top: 0, left: 11, width: 2, height: '100%', zIndex: 0, pointerEvents: 'none' }}
                            viewBox="0 0 2 100" preserveAspectRatio="none"
                        >
                            <line x1="1" y1="0" x2="1" y2="100" stroke="var(--border)" strokeWidth="2" />
                            <motion.line x1="1" y1="0" x2="1" y2="100"
                                stroke="var(--accent)" strokeWidth="2"
                                style={{ pathLength }} strokeLinecap="round"
                            />
                        </svg>

                        <div className="timeline-list" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                            {TIMELINE.map((item, i) => (
                                <FlipCard key={i} item={item} isLeft={i % 2 === 0} index={i} isMobile={isMobile} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
