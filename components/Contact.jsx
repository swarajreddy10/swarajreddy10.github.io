'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';

const ACCENT = '#C8622A';
const FG     = '#F2EDE8';
const MUTED  = '#6B6560';
const BORDER = '#252220';
const SURF   = '#111010';

const CHANNELS = [
    { label: 'Email',    value: 'swarajchandra22@gmail.com',   href: 'mailto:swarajchandra22@gmail.com',    Icon: Mail     },
    { label: 'LinkedIn', value: 'linkedin.com/in/swarajreddy', href: 'https://linkedin.com/in/swarajreddy', Icon: Linkedin, ext: true },
    { label: 'GitHub',   value: 'github.com/swarajreddy10',    href: 'https://github.com/swarajreddy10',    Icon: Github,   ext: true },
];

const inputCls = [
    'w-full rounded-xl border px-4 py-3',
    'text-sm outline-none transition-colors duration-200',
].join(' ');

export default function Contact() {
    const [form,   setForm]   = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('https://formspree.io/f/xpwzdrgo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(form),
            });
            setStatus(res.ok ? 'sent' : 'error');
        } catch {
            setStatus('error');
        }
    };

    const inputStyle = { borderColor: BORDER, background: '#181618', color: FG };

    return (
        <section id="contact" className="py-20 sm:py-28" style={{ background: '#09080A' }}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    className="mb-14"
                >
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em]" style={{ color: MUTED }}>
                        Get in touch
                    </span>
                    <h2 className="mt-3 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl" style={{ color: FG }}>
                        Let&apos;s{' '}
                        <span style={{ color: ACCENT }}>talk.</span>
                    </h2>
                    <p className="mt-5 max-w-md text-base" style={{ color: MUTED }}>
                        Open to full-time roles, freelance collaborations, or just a good conversation about systems and ideas.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-[1fr_360px]">

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { name: 'name',  type: 'text',  placeholder: 'Your name'       },
                                { name: 'email', type: 'email', placeholder: 'you@company.com' },
                            ].map(({ name, type, placeholder }) => (
                                <div key={name}>
                                    <label className="mb-1.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.3em]"
                                        style={{ color: MUTED }}>
                                        {name}
                                    </label>
                                    <input
                                        name={name} type={type} value={form[name]}
                                        onChange={handleChange} required
                                        placeholder={placeholder}
                                        className={inputCls}
                                        style={inputStyle}
                                        onFocus={e => (e.target.style.borderColor = `${ACCENT}60`)}
                                        onBlur={e => (e.target.style.borderColor = BORDER)}
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label className="mb-1.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.3em]"
                                style={{ color: MUTED }}>
                                Message
                            </label>
                            <textarea
                                name="message" value={form.message}
                                onChange={handleChange} required rows={6}
                                placeholder="Tell me about the role, project, or idea…"
                                className={`${inputCls} resize-none`}
                                style={inputStyle}
                                onFocus={e => (e.target.style.borderColor = `${ACCENT}60`)}
                                onBlur={e => (e.target.style.borderColor = BORDER)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'sent'}
                            className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                            style={{ background: ACCENT }}
                            onMouseEnter={e => !e.currentTarget.disabled && (e.currentTarget.style.background = '#D4703A')}
                            onMouseLeave={e => (e.currentTarget.style.background = ACCENT)}
                        >
                            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
                            {status === 'idle' && <Send size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />}
                        </button>

                        {status === 'error' && (
                            <p className="font-mono text-xs text-red-400">Something went wrong. Try emailing directly.</p>
                        )}
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {/* Availability */}
                        <div className="rounded-2xl border p-5"
                            style={{ borderColor: '#1A3326', background: '#0D1F18' }}>
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                                <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">Available</span>
                            </div>
                            <p className="mt-2 text-sm text-emerald-200/70">Open to hybrid / remote roles in Hyderabad, India.</p>
                            <p className="mt-1 font-mono text-[11px] text-emerald-700">Typical response within 24 hours.</p>
                        </div>

                        <div className="space-y-2">
                            {CHANNELS.map(({ label, value, href, Icon, ext }) => (
                                <a key={label} href={href}
                                    target={ext ? '_blank' : undefined}
                                    rel={ext ? 'noopener noreferrer' : undefined}
                                    className="group flex items-center justify-between rounded-xl border px-4 py-3.5 transition-all duration-200"
                                    style={{ borderColor: BORDER, background: SURF, boxShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${ACCENT}40`; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; }}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon size={14} style={{ color: MUTED }} />
                                        <div>
                                            <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: MUTED }}>{label}</p>
                                            <p className="mt-0.5 text-xs" style={{ color: '#4A4743' }}>{value}</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight size={13} style={{ color: '#2E2B28' }}
                                        className="transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C8622A]" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
