import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { workData } from '../assets/assets';

function ProjectCard({ project }) {
    const hasLiveLink = project.link && project.link !== project.github;

    return (
        <article className="project-card">
            <p className="project-category">{project.description}</p>
            <h3>{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-impact">{project.impact}</p>

            <div className="metric-list" role="group" aria-label="Measured results">
                {project.metrics.map(metric => <span className="metric-pill" key={metric}>{metric}</span>)}
            </div>

            <ul className="project-bullets">
                {project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
            </ul>

            <div className="tech-list" role="group" aria-label="Technologies used">
                {project.tech.slice(0, 4).map(technology => (
                    <span className="tech-pill" key={technology}>{technology}</span>
                ))}
            </div>

            {(hasLiveLink || project.github) && (
                <div className="project-links">
                    {hasLiveLink && (
                        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                            Live site <ExternalLink size={14} aria-hidden="true" />
                        </a>
                    )}
                    {project.github && (
                        <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">
                            <GithubIcon size={14} aria-hidden="true" /> Source code
                        </a>
                    )}
                </div>
            )}
        </article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="content-section" aria-labelledby="projects-title">
            <div className="section-shell">
                <header className="section-header">
                    <h2 id="projects-title">Engineering case studies.</h2>
                </header>

                <div className="project-grid">
                    {workData.map(project => <ProjectCard key={project.title} project={project} />)}
                </div>

                <div className="project-more">
                    <a className="project-link" href="https://github.com/swarajreddy10" target="_blank" rel="noopener noreferrer">
                        <GithubIcon size={14} aria-hidden="true" /> More on GitHub <ExternalLink size={14} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}