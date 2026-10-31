const SKILL_GROUPS = [
    { name: 'Programming Languages', skills: ['Go (Golang)', 'TypeScript', 'Python', 'SQL'] },
    { name: 'Backend', skills: ['Microservices', 'REST APIs', 'Event-Driven Architecture', 'Node.js'] },
    { name: 'Databases', skills: ['PostgreSQL', 'pgvector', 'MongoDB'] },
    { name: 'Cloud & CI/CD', skills: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'] },
    { name: 'AI Engineering', skills: ['LLM Integration', 'Claude Code', 'Codex', 'Cursor'] },
    { name: 'Testing', skills: ['Unit testing', 'Integration testing', 'Contract testing', 'Vitest'] },
    { name: 'Frontend', skills: ['React', 'Next.js', 'TanStack Query', 'Tailwind CSS'] },
];

export default function Skills() {
    return (
        <section id="skills" className="content-section" aria-labelledby="skills-title">
            <div className="section-shell">
                <header className="section-header">
                    <h2 id="skills-title">Tech stack.</h2>
                </header>

                <div className="skills-grid">
                    {SKILL_GROUPS.map(group => (
                        <article className="skill-group" key={group.name}>
                            <h3>{group.name}</h3>
                            <ul className="skill-list">
                                {group.skills.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
