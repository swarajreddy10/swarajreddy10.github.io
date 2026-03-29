'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const DOMAINS = [
    {
        index: '01',
        name: 'Languages',
        tagline: 'Fluent across the stack, from scripting to systems.',
        skills: ['Python', 'TypeScript', 'JavaScript', 'Java'],
    },
    {
        index: '02',
        name: 'Backend',
        tagline: 'APIs and services built to stay up.',
        skills: ['FastAPI', 'Node.js / Express', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'OAuth2 / JWT'],
    },
    {
        index: '03',
        name: 'Frontend',
        tagline: 'Interfaces that feel as good as they look.',
        skills: ['React / Next.js', 'Tailwind CSS', 'Motion'],
    },
    {
        index: '04',
        name: 'DevOps & Cloud',
        tagline: 'Ship fast, recover faster.',
        skills: ['Git / GitHub', 'Docker', 'GitHub Actions', 'CI/CD', 'AWS (EC2, S3, IAM, CloudWatch, Cognito, Bedrock)'],
    },
    {
        index: '05',
        name: 'Testing',
        tagline: 'Coverage that earns confidence.',
        skills: ['Unit Testing', 'Integration Testing', 'JUnit', 'Pytest', 'Puppeteer'],
    },
    {
        index: '06',
        name: 'AI Integration & Tooling',
        tagline: 'From LLM APIs in production to tools that sharpen the craft.',
        skills: ['Vertex AI Gemini', 'AWS Bedrock', 'Azure OpenAI', 'Groq AI', 'Claude Code', 'OpenAI Codex', 'NotebookLM', 'Prompt Engineering', 'LLM Evaluation'],
    },
];

function SkillCard({ domain, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const stickyTop = 80 + index * 20;

    return (
        <div ref={ref} style={{ position: 'sticky', top: stickyTop, zIndex: 10 + index, marginBottom: 12 }}>
            <motion.div style={{ scale }}>
                <div style={{
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    background: 'var(--surf)',
                    boxShadow: '0 2px 20px var(--shadow)',
                    padding: 'clamp(28px, 4vw, 48px)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'clamp(24px, 4vw, 56px)',
                    alignItems: 'center',
                }}
                className="skill-card-inner"
                >
                    {/* Left */}
                    <div>
                        <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: 9,
                            color: 'rgba(28,25,23,0.22)', letterSpacing: '0.3em',
                            display: 'block', marginBottom: 12,
                        }}>
                            {domain.index}
                        </span>
                        <h3 style={{
                            fontFamily: 'var(--font-display)', fontStyle: 'italic',
                            fontSize: 'clamp(28px, 3.5vw, 48px)',
                            fontWeight: 400, color: 'var(--fg)',
                            letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 10,
                        }}>
                            {domain.name}
                        </h3>
                        <p style={{
                            fontFamily: 'var(--font-body)', fontSize: 14,
                            color: 'var(--muted)', lineHeight: 1.5,
                        }}>
                            {domain.tagline}
                        </p>
                    </div>

                    {/* Right — skill pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignContent: 'flex-start' }}>
                        {domain.skills.map((s) => (
                            <span key={s} style={{
                                fontFamily: 'var(--font-mono)', fontSize: 11,
                                color: 'var(--fg)',
                                border: '1px solid var(--border)',
                                borderRadius: 8,
                                background: 'var(--base)',
                                padding: '7px 13px',
                                lineHeight: 1,
                            }}>
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            <style>{`
                @media (max-width: 600px) {
                    .skill-card-inner { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" style={{ background: 'var(--base)', padding: '100px 0' }}>
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 max(24px, 4vw)' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: 52 }}
                >
                    <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 9,
                        letterSpacing: '0.4em', textTransform: 'uppercase',
                        color: 'var(--accent)', display: 'block', marginBottom: 16,
                    }}>
                        Skills
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(28px, 4vw, 52px)',
                        fontWeight: 400, color: 'var(--fg)',
                        letterSpacing: '-0.025em', lineHeight: 1.15,
                    }}>
                        What I bring to the table.
                    </h2>
                </motion.div>

                {DOMAINS.map((d, i) => (
                    <SkillCard key={d.index} domain={d} index={i} />
                ))}
            </div>
        </section>
    );
}
