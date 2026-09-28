'use client';

import { motion, useReducedMotion } from 'motion/react';

const SKILL_GROUPS = [
    { name: 'Languages', skills: ['Go', 'TypeScript', 'Python', 'Java', 'SQL'] },
    { name: 'Backend', skills: ['Go net/http', 'Fastify', 'REST APIs', 'Microservices', 'JWT / OAuth2', 'OpenAPI'] },
    { name: 'Databases', skills: ['PostgreSQL', 'MongoDB'] },
    { name: 'Search & Retrieval', skills: ['pgvector', 'Full-text search', 'HNSW', 'GIN', 'Reciprocal Rank Fusion'] },
    { name: 'Cloud & DevOps', skills: ['AWS ECS / RDS', 'S3 / SQS / EventBridge', 'Step Functions', 'Terraform', 'Docker', 'GitHub Actions', 'CloudWatch'] },
    { name: 'AI Integration', skills: ['LLM APIs', 'Embedding pipelines', 'Structured extraction', 'Structured outputs', 'Schema validation', 'Multi-model routing'] },
    { name: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'Motion', 'WCAG / ARIA'] },
    { name: 'Testing & Quality', skills: ['Unit Testing', 'Integration Testing', 'Contract Testing', 'Database parity', 'Race testing', 'Playwright'] },
];

function SkillGroup({ group, index, reduceMotion }) {
    return (
        <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.36, delay: reduceMotion ? 0 : (index % 2) * 0.05 }}
            style={{ borderTop: '1px solid var(--border)', padding: '22px 0 24px', minWidth: 0 }}
        >
            <h3 style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(21px, 2.4vw, 29px)', fontWeight: 500,
                color: 'var(--fg)', letterSpacing: '-0.015em', lineHeight: 1.15,
                marginBottom: 15,
            }}>
                {group.name}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {group.skills.map((skill) => (
                    <span key={skill} style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        color: 'var(--muted)', fontWeight: 500,
                        border: '1px solid var(--border)', borderRadius: 8,
                        background: 'var(--surf)', padding: '7px 11px',
                    }}>
                        {skill}
                    </span>
                ))}
            </div>
        </motion.article>
    );
}

export default function Skills() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="skills" style={{ background: 'var(--base)', padding: '96px 0 110px' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 max(24px, 4vw)' }}>
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.42 }}
                    style={{ marginBottom: 36, maxWidth: 680 }}
                >
                    <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        letterSpacing: '0.34em', textTransform: 'uppercase',
                        color: 'var(--accent)', display: 'block', marginBottom: 14,
                        fontWeight: 600,
                    }}>
                        Technical Skills
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 500,
                        color: 'var(--fg)', letterSpacing: '-0.025em', lineHeight: 1.12,
                    }}>
                        A practical stack, organized by function.
                    </h2>
                </motion.div>

                <div className="skills-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    columnGap: 'clamp(28px, 6vw, 72px)',
                    rowGap: 0,
                }}>
                    {SKILL_GROUPS.map((group, index) => (
                        <SkillGroup key={group.name} group={group} index={index} reduceMotion={reduceMotion} />
                    ))}
                </div>


            </div>
        </section>
    );
}
