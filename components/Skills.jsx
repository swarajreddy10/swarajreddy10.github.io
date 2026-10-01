'use client';

import { motion, useReducedMotion } from 'motion/react';

const SKILL_GROUPS = [
    { name: 'Backend & APIs', skills: ['Go', 'TypeScript', 'Python', 'Fastify', 'REST APIs', 'Microservices'] },
    { name: 'Data & Search', skills: ['PostgreSQL', 'pgvector', 'Hybrid search'] },
    { name: 'Cloud & Infrastructure', skills: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'] },
    { name: 'Applied AI', skills: ['LLM API integration', 'Embedding systems'] },
    { name: 'Testing', skills: ['Unit testing', 'Integration testing', 'Contract testing'] },
    { name: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
];

function SkillGroup({ group, index, reduceMotion }) {
    return (
        <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.36, delay: reduceMotion ? 0 : (index % 2) * 0.05 }}
            style={{ borderTop: '1px solid var(--border)', padding: '20px 0 22px', minWidth: 0 }}
        >
            <h3 style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(21px, 2.4vw, 29px)', fontWeight: 500,
                color: 'var(--fg)', letterSpacing: '-0.015em', lineHeight: 1.15,
                marginBottom: 13,
            }}>
                {group.name}
            </h3>
            <ul style={{
                display: 'flex', flexWrap: 'wrap', gap: '9px 18px',
                listStyle: 'none', margin: 0, padding: 0,
            }}>
                {group.skills.map((skill) => (
                    <li key={skill} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        color: 'var(--muted)', fontWeight: 500, lineHeight: 1.45,
                    }}>
                        <span aria-hidden="true" style={{
                            width: 4, height: 4, borderRadius: '50%',
                            background: 'var(--accent)', opacity: 0.72, flexShrink: 0,
                        }} />
                        {skill}
                    </li>
                ))}
            </ul>
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

                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 500,
                        color: 'var(--fg)', letterSpacing: '-0.025em', lineHeight: 1.12,
                    }}>
                        Core technologies.
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
