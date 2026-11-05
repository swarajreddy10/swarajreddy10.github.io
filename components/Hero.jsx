import { Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PROFILE, RESUME_PATH, SOCIAL_LINKS } from '../data/site';

const ICONS = { mail: Mail, linkedin: LinkedinIcon, github: GithubIcon };

export default function Hero() {
    return (
        <section id="home" className="hero-section" aria-labelledby="hero-title">
            <div className="hero-content">
                <p className="hero-greeting">Hello, I&apos;m</p>
                <h1 id="hero-title">{PROFILE.name}</h1>
                <p className="hero-role">{PROFILE.role}</p>
                <p className="hero-focus">{PROFILE.focus}</p>
                <p className="hero-summary">
                    {PROFILE.positioning} {PROFILE.proof.lead}<strong>{PROFILE.proof.figure}</strong>{PROFILE.proof.tail}
                </p>
                <p className="hero-focus">{PROFILE.location} · {PROFILE.availability}</p>

                <div className="hero-actions" role="group" aria-label="Portfolio actions">
                    <a className="button button-primary" href={RESUME_PATH} download data-goatcounter-click="resume-download">
                        <Download size={16} aria-hidden="true" /> Download résumé
                    </a>
                    <a className="button button-secondary" href="#projects" data-goatcounter-click="view-projects">View projects</a>
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
