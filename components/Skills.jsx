const SKILL_GROUPS = [
    { name: 'Languages', skills: ['Go', 'TypeScript', 'Python', 'SQL'] },
    { name: 'Data & Search', skills: ['PostgreSQL', 'MongoDB', 'pgvector', 'Hybrid search'] },
    { name: 'Cloud & Infrastructure', skills: ['AWS', 'Terraform', 'Docker'] },
    { name: 'Applied AI', skills: ['LLM API integration', 'Vector embedding pipelines'] },
    { name: 'Engineering Practices', skills: ['REST API design', 'CI/CD', 'Unit testing', 'Integration testing', 'Contract testing'] },
    { name: 'Frontend', skills: ['React', 'Next.js'] },
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
