'use client';

import { motion } from 'motion/react';
import { Send, Copy, Check, ArrowUpRight, Mail } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import IndianFlag from './IndianFlag';

function LinkedinIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
    );
}

function GithubIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
    );
}

const LINKS = [
    {
        label: 'Email',
        value: 'swarajchandra22@gmail.com',
        href: 'mailto:swarajchandra22@gmail.com',
        copyable: true,
        hint: 'Drop a line',
        Icon: Mail,
    },
    {
        label: 'LinkedIn',
        value: '/in/swarajreddy',
        href: 'https://linkedin.com/in/swarajreddy',
        Icon: LinkedinIcon,
        ext: true,
        hint: 'Let\'s connect',
    },
    {
        label: 'GitHub',
        value: '@swarajreddy10',
        href: 'https://github.com/swarajreddy10',
        Icon: GithubIcon,
        ext: true,
        hint: 'See the code',
    },
];

function LinkRow({ item }) {
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);

    const handleCopy = async (e) => {
        e.preventDefault();
        await navigator.clipboard.writeText(item.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <a
            href={item.href}
            target={item.ext ? '_blank' : undefined}
            rel={item.ext ? 'noopener noreferrer' : undefined}
            onClick={item.copyable ? handleCopy : undefined}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '18px 20px',
                borderRadius: 14,
                border: '1px solid var(--border)',
                background: hovered ? 'var(--surf)' : 'transparent',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
                borderColor: hovered ? 'var(--accent)' : 'var(--border)',
                boxShadow: hovered ? '0 0 20px 4px var(--shadow-lg)' : 'none',
                marginBottom: 10,
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {/* Icon badge */}
                <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    border: '1px solid var(--border)',
                    background: hovered ? 'var(--accent-dim)' : 'var(--base)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: hovered ? 'var(--accent)' : 'var(--muted)',
                    transition: 'background 0.2s, color 0.2s',
                    flexShrink: 0,
                }}>
                    {item.copyable
                        ? (copied ? <Check size={15} /> : <item.Icon size={15} />)
                        : <item.Icon size={15} />}
                </div>
                <div>
                    <p style={{
                        fontFamily: 'var(--font-mono)', fontSize: 9,
                        letterSpacing: '0.32em', textTransform: 'uppercase',
                        color: hovered ? 'var(--accent)' : 'var(--muted)',
                        marginBottom: 3, transition: 'color 0.2s',
                    }}>
                        {copied ? 'Copied!' : item.hint}
                    </p>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 14,
                        color: 'var(--fg)', fontWeight: 400,
                    }}>
                        {item.value}
                    </p>
                </div>
            </div>

            <div style={{
                width: 30, height: 30, borderRadius: '50%',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: hovered ? 'var(--accent)' : 'var(--muted)',
                background: hovered ? 'var(--accent-dim)' : 'transparent',
                transition: 'all 0.2s',
                transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)',
                flexShrink: 0,
            }}>
                <ArrowUpRight size={13} />
            </div>
        </a>
    );
}

export default function Contact() {
    const [state, handleSubmit] = useForm('mwpowvqe');

    const inputStyle = {
        width: '100%', borderRadius: 8,
        border: '1.5px solid var(--border)',
        background: 'var(--surf)', color: 'var(--fg)',
        padding: '11px 14px',
        fontFamily: 'var(--font-body)', fontSize: 14,
        outline: 'none', transition: 'border-color 0.2s',
    };

    const labelStyle = {
        display: 'block', marginBottom: 6,
        fontFamily: 'var(--font-mono)', fontSize: 9,
        letterSpacing: '0.3em', textTransform: 'uppercase',
        color: 'var(--muted)',
    };

    return (
        <section id="contact" style={{ background: 'var(--base)', padding: '100px 0 0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 max(24px, 4vw)' }}>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55 }}
                    style={{ marginBottom: 64 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                        <span style={{
                            width: 7, height: 7, borderRadius: '50%',
                            background: 'var(--signal)', display: 'block',
                            animation: 'pulse-signal 2s ease-in-out infinite',
                        }} />
                        <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: 9,
                            letterSpacing: '0.28em', textTransform: 'uppercase',
                            color: 'var(--signal)',
                        }}>
                            Open to roles where I can build
                        </span>
                    </div>
                    <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        letterSpacing: '0.36em', textTransform: 'uppercase',
                        color: 'var(--accent)', display: 'block', marginBottom: 16,
                        fontWeight: 600,
                    }}>
                        Contact
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: 'clamp(32px, 5vw, 68px)',
                        fontWeight: 500, color: 'var(--fg)',
                        letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0,
                    }}>
                        Got a role, project, or idea?
                        <br />
                        <span style={{ color: 'var(--accent)' }}>Let&apos;s talk.</span>
                    </h2>
                </motion.div>

                {/* Two-column layout */}
                <div
                    className="contact-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 'clamp(40px, 6vw, 96px)',
                        paddingBottom: 80,
                        alignItems: 'start',
                    }}
                >
                    {/* Left — direct links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p style={{
                            fontFamily: 'var(--font-body)', fontSize: 15,
                            lineHeight: 1.7, color: 'var(--muted)',
                            marginBottom: 8,
                        }}>
                            <IndianFlag size={18} />{' '}Based in Hyderabad, India. Open to onsite, hybrid, and remote roles, and open to relocation.
                            Typically respond within 24 hours.
                        </p>

                        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}>
                            {LINKS.map((item) => (
                                <LinkRow key={item.label} item={item} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    {state.succeeded ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                padding: '48px 0',
                            }}
                        >
                            <p style={{
                                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                                fontSize: 'clamp(20px, 2.5vw, 28px)',
                                color: 'var(--fg)', letterSpacing: '-0.01em',
                            }}>
                                Message sent. I will get back to you soon.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                <div>
                                    <label style={labelStyle}>Name</label>
                                    <input
                                        name="name" type="text" required
                                        placeholder="Your name"
                                        style={inputStyle}
                                        onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors}
                                        style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#dc2626', marginTop: 4 }}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Email</label>
                                    <input
                                        id="email" name="email" type="email" required
                                        placeholder="you@company.com"
                                        style={inputStyle}
                                        onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors}
                                        style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#dc2626', marginTop: 4 }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={labelStyle}>Message</label>
                                <textarea
                                    id="message" name="message" required rows={6}
                                    placeholder="Tell me about the role, project, or idea"
                                    style={{ ...inputStyle, resize: 'none' }}
                                    onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors}
                                    style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#dc2626', marginTop: 4 }}
                                />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 8,
                                        borderRadius: 8, padding: '12px 24px',
                                        fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
                                        letterSpacing: '0.18em', textTransform: 'uppercase',
                                        color: '#fff', background: 'var(--accent)',
                                        border: 'none', cursor: state.submitting ? 'default' : 'pointer',
                                        opacity: state.submitting ? 0.65 : 1,
                                        boxShadow: '0 2px 12px rgba(184,171,56,0.35)',
                                        transition: 'background 0.2s, opacity 0.2s, box-shadow 0.2s',
                                    }}
                                    onMouseEnter={e => { if (!state.submitting) { e.currentTarget.style.background = '#6B6010'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(184,171,56,0.55)'; } }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(184,171,56,0.35)'; }}
                                >
                                    {state.submitting ? 'Sending' : <>Send <Send size={11} /></>}
                                </button>
                            </div>
                        </motion.form>
                    )}
                </div>
            </div>

        </section>
    );
}
