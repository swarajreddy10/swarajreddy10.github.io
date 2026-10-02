const SKILL_GROUPS = [
    { name: 'Backend & APIs', skills: ['Go', 'TypeScript', 'Python', 'Fastify', 'REST APIs', 'Microservices'] },
    { name: 'Data & Search', skills: ['PostgreSQL', 'pgvector', 'Hybrid search'] },
    { name: 'Cloud & Infrastructure', skills: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'] },
    { name: 'Applied AI', skills: ['LLM API integration', 'Embedding systems'] },
    { name: 'Testing', skills: ['Unit testing', 'Integration testing', 'Contract testing'] },
    { name: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
];

export default function Skills() {
    return (
        <section id="skills" className="content-section" aria-labelledby="skills-title">
            <div className="section-shell">
                <header className="section-header">
                    <h2 id="skills-title">Core technologies.</h2>
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