import { ChevronDown, ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { workData } from '../data/work';

function ProjectLinks({ project }) {
    const hasLiveLink = project.link && project.link !== project.github;
    if (!hasLiveLink && !project.github) return null;

    return (
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
    );
}

function ProjectHeading({ project }) {
    return (
        <>
            <p className="project-category">{project.description}</p>
            <h3>{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-impact">{project.impact}</p>
        </>
    );
}

function ProjectBody({ project, techLimit }) {
    return (
        <>
            <ul className="project-bullets">
                {project.highlights.map(item => <li key={item}>{item}</li>)}
            </ul>

            {project.details?.length > 0 && (
                <details className="project-details">
                    <summary>
                        How I did it <ChevronDown size={14} aria-hidden="true" />
                    </summary>
                    <ul className="project-bullets">
                        {project.details.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </details>
            )}

            <div className="tech-list" role="group" aria-label="Technologies used">
                {project.tech.slice(0, techLimit).map(technology => (
                    <span className="tech-pill" key={technology}>{technology}</span>
                ))}
            </div>

            <ProjectLinks project={project} />
        </>
    );
}

function FeaturedProject({ project }) {
    return (
        <article className="project-card project-featured">
            <div className="project-featured-intro">
                <ProjectHeading project={project} />
                <ul className="stat-grid" aria-label="Headline results">
                    {project.stats.map(stat => (
                        <li className="stat-tile" key={stat.value}>
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="project-featured-body">
                <p className="project-section-label">Decisions and results</p>
                <ProjectBody project={project} techLimit={project.tech.length} />
            </div>
        </article>
    );
}

function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <ProjectHeading project={project} />
            <div className="metric-list" role="group" aria-label="Measured results">
                {project.metrics.map(metric => <span className="metric-pill" key={metric}>{metric}</span>)}
            </div>
            <ProjectBody project={project} techLimit={4} />
        </article>
    );
}

export default function Projects() {
    const featured = workData.filter(project => project.featured);
    const others = workData.filter(project => !project.featured);

    return (
        <section id="projects" className="content-section" aria-labelledby="projects-title">
            <div className="section-shell">
                <header className="section-header">
                    <h2 id="projects-title">Engineering case studies.</h2>
                </header>

                {featured.map(project => <FeaturedProject key={project.title} project={project} />)}

                <div className="project-grid">
                    {others.map(project => <ProjectCard key={project.title} project={project} />)}
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
