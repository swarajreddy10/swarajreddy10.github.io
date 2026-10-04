const SKILL_GROUPS = [
    { name: 'Programming Languages', skills: ['Go', 'TypeScript', 'Python', 'SQL'] },
    { name: 'Backend & APIs', skills: ['REST API design'] },
    { name: 'Databases', skills: ['PostgreSQL', 'MongoDB'] },
    { name: 'Cloud & DevOps', skills: ['AWS', 'Terraform', 'Docker', 'CI/CD'] },
    { name: 'Testing', skills: ['Unit testing', 'Integration testing', 'Contract testing'] },
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
