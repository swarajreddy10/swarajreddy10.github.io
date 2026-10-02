'use client';

import { ExternalLink, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { SOCIAL_LINKS } from '../data/site';
import IndianFlag from './IndianFlag';

const ICONS = { mail: Mail, linkedin: LinkedinIcon, github: GithubIcon };

export default function Contact() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async event => {
        event.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch(event.currentTarget.action, {
                method: 'POST',
                body: new FormData(event.currentTarget),
                headers: { Accept: 'application/json' },
            });

            if (!response.ok) throw new Error('Form submission failed');
            event.currentTarget.reset();
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="content-section" aria-labelledby="contact-title">
            <div className="section-shell">
                <header className="section-header contact-heading">
                    <p className="contact-status">Open to software engineering opportunities</p>
                    <h2 id="contact-title">Got a role, project, or idea? Let&apos;s talk.</h2>
                </header>

                <div className="contact-grid">
                    <div>
                        <p className="contact-intro">
                            <IndianFlag size={18} /> Based in Hyderabad, India. Open to backend, full-stack, and AI engineering work across onsite, hybrid, and remote teams, with relocation considered.
                        </p>
                        <div className="contact-links">
                            {SOCIAL_LINKS.map(link => {
                                const Icon = ICONS[link.icon];
                                return (
                                    <a
                                        className="contact-link"
                                        key={link.label}
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                    >
                                        <Icon size={20} aria-hidden="true" />
                                        <span>
                                            <span className="contact-link-label">{link.hint}</span>
                                            <span className="contact-link-value">{link.value}</span>
                                        </span>
                                        {link.external && <ExternalLink size={16} aria-hidden="true" />}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {status === 'success' ? (
                        <p className="form-status" role="status" aria-live="polite">
                            Message sent. I will get back to you soon.
                        </p>
                    ) : (
                        <form
                            className="contact-form"
                            action="https://formspree.io/f/mwpowvqe"
                            method="POST"
                            onSubmit={handleSubmit}
                            aria-busy={status === 'submitting'}
                        >
                            <div className="contact-fields">
                                <div className="form-field">
                                    <label htmlFor="contact-name">Name</label>
                                    <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="contact-email">Email</label>
                                    <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="contact-message">Message</label>
                                <textarea id="contact-message" name="message" rows={6} required placeholder="Tell me about the role, project, or idea" />
                            </div>

                            {status === 'error' && (
                                <p className="form-status is-error" role="alert">
                                    The message could not be sent. Please email me directly instead.
                                </p>
                            )}

                            <div>
                                <button className="button button-primary" type="submit" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending' : 'Send message'} <Send size={15} aria-hidden="true" />
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
