import { Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { RESUME_PATH, SOCIAL_LINKS } from '../data/site';

const ICONS = { mail: Mail, linkedin: LinkedinIcon, github: GithubIcon };

export default function Hero() {
    return (
        <section id="home" className="hero-section" aria-labelledby="hero-title">
            <div className="hero-content">
                <p className="hero-greeting">Hello, I&apos;m</p>
                <h1 id="hero-title">Swaraj Reddy</h1>
                <p className="hero-role">Software Engineer</p>
                <p className="hero-focus">Backend · Full-Stack · Applied AI</p>
                <p className="hero-summary">
                    I use AI to investigate unfamiliar problems and test assumptions early, then carry backend work through implementation, performance validation, deployment, and production monitoring.
                </p>

                <div className="hero-actions" role="group" aria-label="Portfolio actions">
                    <a className="button button-primary" href="#projects">View projects</a>
                    <a className="button button-secondary" href={RESUME_PATH} download>
                        <Download size={16} aria-hidden="true" /> Download résumé
                    </a>
                </div>

                <div className="social-links" role="group" aria-label="Contact profiles">
                    {SOCIAL_LINKS.map(link => {
                        const Icon = ICONS[link.icon];
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                                aria-label={link.external ? `${link.label}, opens in a new tab` : link.label}
                            >
                                <Icon size={17} aria-hidden="true" />
                            </a>
                        );
                    })}
                </div>

                <a className="scroll-link" href="#experience">Continue to experience</a>
            </div>
        </section>
    );
}
