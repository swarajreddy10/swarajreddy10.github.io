'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { workData } from '../assets/assets';

function GithubIcon({ size = 11 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

function ProjectCard({ project, index, reduceMotion }) {
    const hasLiveLink = project.link && project.link !== project.github;
    const hasCodeLink = Boolean(project.github);
    const number = String(index + 1).padStart(2, '0');

    return (
        <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.42, delay: reduceMotion ? 0 : index * 0.06 }}
            style={{
                height: '100%',
                border: '1px solid var(--border)',
                borderRadius: 18,
                background: 'var(--surf)',
                boxShadow: '0 8px 30px var(--shadow)',
                padding: 'clamp(24px, 3.5vw, 38px)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 20 }}>
                <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9,
                    letterSpacing: '0.25em', color: 'rgba(85,0,3,0.35)',
                }}>
                    {number}
                </span>
                <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'var(--accent)', fontWeight: 700,
                }}>
                    {project.description}
                </span>
            </div>

            <h3 style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(25px, 3vw, 38px)', fontWeight: 500,
                color: 'var(--fg)', letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>
                {project.title}
            </h3>
            <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: 'var(--accent)', margin: '6px 0 18px',
            }}>
                {project.tagline}
            </p>

            <p style={{
                fontFamily: 'var(--font-body)', fontSize: 13,
                lineHeight: 1.65, color: 'var(--muted)', marginBottom: 18,
            }}>
                {project.impact}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 18 }}>
                {project.metrics.slice(0, 3).map((metric) => (
                    <span key={metric} style={{
                        fontFamily: 'var(--font-mono)', fontSize: 9,
                        fontWeight: 700, color: 'var(--accent)',
                        padding: '5px 10px', borderRadius: 100,
                        border: '1px solid var(--accent-border)',
                        background: 'var(--accent-dim)',
                    }}>
                        {metric}
                    </span>
                ))}
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
                {project.bullets.slice(0, 2).map((bullet) => (
                    <li key={bullet} style={{
                        display: 'flex', gap: 8, alignItems: 'flex-start',
                        fontFamily: 'var(--font-body)', fontSize: 13,
                        lineHeight: 1.55, color: 'var(--muted)',
                    }}>
                        <span aria-hidden style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                        {bullet}
                    </li>
                ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                {project.tech.slice(0, 5).map((technology) => (
                    <span key={technology} style={{
                        fontFamily: 'var(--font-mono)', fontSize: 9,
                        color: 'var(--muted)', padding: '4px 8px',
                        borderRadius: 6, border: '1px solid var(--border)',
                        background: 'var(--base)',
                    }}>
                        {technology}
                    </span>
                ))}
            </div>

            {(hasLiveLink || hasCodeLink) && (
                <div style={{ display: 'flex', gap: 9, marginTop: 22 }}>
                    {hasLiveLink && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 5,
                            borderRadius: 100, padding: '9px 17px',
                            fontFamily: 'var(--font-mono)', fontSize: 9,
                            fontWeight: 700, letterSpacing: '0.14em',
                            textTransform: 'uppercase', color: '#fff',
                            background: 'var(--accent)', textDecoration: 'none',
                        }}>
                            Live <ArrowUpRight size={10} />
                        </a>
                    )}
                    {hasCodeLink && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 5,
                            borderRadius: 100, padding: '9px 17px',
                            fontFamily: 'var(--font-mono)', fontSize: 9,
                            fontWeight: 600, letterSpacing: '0.14em',
                            textTransform: 'uppercase', color: 'var(--muted)',
                            border: '1px solid var(--border)', textDecoration: 'none',
                        }}>
                            <GithubIcon size={10} /> Code
                        </a>
                    )}
                </div>
            )}
        </motion.article>
    );
}

export default function Projects() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="projects" style={{ background: 'var(--base)', padding: '96px 0 110px' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 max(24px, 4vw)' }}>
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45 }}
                    style={{ marginBottom: 44, maxWidth: 700 }}
                >

                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(32px, 4.5vw, 60px)', fontWeight: 500,
                        color: 'var(--fg)', letterSpacing: '-0.025em', lineHeight: 1.1,
                    }}>
                        Engineering case studies.
                    </h2>
                </motion.div>

                <div className="project-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: 16,
                    alignItems: 'stretch',
                }}>
                    {workData.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                            reduceMotion={reduceMotion}
                        />
                    ))}
                </div>

                <div style={{ marginTop: 34 }}>
                    <a href="https://github.com/swarajreddy10" target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        borderRadius: 100, padding: '11px 20px',
                        fontFamily: 'var(--font-mono)', fontSize: 9,
                        fontWeight: 600, letterSpacing: '0.15em',
                        textTransform: 'uppercase', color: 'var(--fg)',
                        border: '1px solid var(--border)', textDecoration: 'none',
                    }}>
                        <GithubIcon size={12} /> More on GitHub <ArrowUpRight size={11} />
                    </a>
                </div>
            </div>
        </section>
    );
}
