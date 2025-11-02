'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const contactFacts = [
    { label: 'Response time', value: '<24 hours', detail: 'Email or LinkedIn follow-up guaranteed.' },
    { label: 'Preferred roles', value: 'Product, platform, or AI engineering', detail: 'Full-time or long-term contract, onsite · hybrid · remote.' },
    { label: 'Availability', value: 'Immediately for 2025 cohorts', detail: 'Based in Hyderabad with travel flexibility.' }
];

const primaryChannels = [
    { label: 'Email', value: 'swarajchandra22@gmail.com', hint: 'Best for proposals & next steps', icon: Mail, href: 'mailto:swarajchandra22@gmail.com' },
    { label: 'Phone', value: '+91 93473 87676', hint: 'Direct coordination / quick sync', icon: Phone, href: 'tel:+919347387676' },
    { label: 'LinkedIn', value: 'linkedin.com/in/swarajreddy/', hint: 'Network & references', icon: Linkedin, href: 'https://www.linkedin.com/in/swarajreddy/' },
    { label: 'GitHub', value: 'github.com/swarajreddy10', hint: 'Code samples & open source', icon: Github, href: 'https://github.com/swarajreddy10' }
];

const FuturisticContact = () => {
    const [result, setResult] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult('Initializing transmission...');

        const formData = new FormData(event.target);

        try {
            const response = await fetch('https://formspree.io/f/mwpowvqe', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData,
            });

            const data = await response.json();

            if (data.ok || data.success) {
                setResult('✓ Message transmitted successfully');
                event.target.reset();
            } else {
                setResult('✗ Transmission failed. Retry protocol initiated.');
            }
        } catch (error) {
            setResult('✗ Network error. Please check connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex w-full flex-col text-white">
            <motion.header
                className="space-y-4 text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="inline-flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                    Contact
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                        Let’s design the next release together
                    </span>
                </h2>
                <p className="mx-auto max-w-3xl text-base sm:text-lg text-slate-300/90">
                    Ready to collaborate on product builds, automation initiatives, or AI copilots. Share context and
                    I’ll respond with a tailored plan, availability, and relevant case studies.
                </p>
            </motion.header>

            <motion.div
                className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/20 via-indigo-500/15 to-transparent p-6 sm:p-8 backdrop-blur-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-100/80">
                            Hiring managers & founders
                        </p>
                        <h3 className="text-2xl font-semibold text-white">
                            Provide a problem brief and I’ll return with architecture notes and integration options.
                        </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            type="button"
                            onClick={() => window.dispatchEvent(new CustomEvent('slider:navigate', { detail: { id: 'projects' } }))}
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-white hover:bg-white/20"
                        >
                            Review recent builds
                            <span className="text-base leading-none">↗</span>
                        </button>
                        <a
                            href="mailto:swarajchandra22@gmail.com"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:border-white hover:bg-white/20"
                            aria-label="Email Swaraj"
                        >
                            <Mail size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/swarajreddy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:border-white hover:bg-white/20"
                            aria-label="Swaraj on LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://github.com/swarajreddy10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:border-white hover:bg-white/20"
                            aria-label="Swaraj on GitHub"
                        >
                            <Github size={18} />
                        </a>
                    </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {contactFacts.map((fact) => (
                        <div key={fact.label} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-200">
                                {fact.label}
                            </p>
                            <p className="mt-2 text-sm text-slate-100/90">{fact.value}</p>
                            <p className="mt-1 text-xs text-slate-400">{fact.detail}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl"
                >
                    <div className="rounded-t-2xl border border-white/10 bg-black/50 p-4 font-mono text-xs text-blue-200/80">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-500" />
                            <span className="h-3 w-3 rounded-full bg-yellow-500" />
                            <span className="h-3 w-3 rounded-full bg-green-500" />
                            <span className="ml-4 text-slate-300/80">contact_protocol.exe</span>
                        </div>
                    </div>
                    <div className="border-x border-b border-white/10 bg-black/40 p-4 sm:p-6">
                        <div className="font-mono text-[13px] text-green-400">
                            <p>
                                <span className="text-blue-400">$</span> initialize_contact_sequence
                            </p>
                            <p className="pl-4 text-slate-300">Secure tunnel ready. Share mission details below.</p>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="mt-6 space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <motion.div whileHover={{ translateY: -2 }} className="space-y-2">
                                <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                                    Contact name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500/60"
                                />
                            </motion.div>
                            <motion.div whileHover={{ translateY: -2 }} className="space-y-2">
                                <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="company@domain.com"
                                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500/60"
                                />
                            </motion.div>
                        </div>
                        <motion.div whileHover={{ translateY: -2 }} className="space-y-2">
                            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                                Engagement focus
                            </label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Example: Platform rebuild, AI co-pilot, process automation"
                                className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500/60"
                            />
                        </motion.div>
                        <motion.div whileHover={{ translateY: -2 }} className="space-y-2">
                            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                                Mission brief
                            </label>
                            <textarea
                                name="message"
                                required
                                rows={6}
                                placeholder="Share context, outcomes, timeline, and any repositories or products to reference."
                                className="w-full resize-none rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500/60"
                            />
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-blue-600/30 transition-all duration-300 disabled:opacity-60"
                        >
                            {isSubmitting ? (
                                <>
                                    <motion.span
                                        className="inline-block h-4 w-4 rounded-full border-2 border-white border-r-transparent"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                    />
                                    Transmitting...
                                </>
                            ) : (
                                <>
                                    Send message
                                    <span className="text-base leading-none">→</span>
                                </>
                            )}
                        </motion.button>
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`rounded-2xl border px-4 py-3 text-sm font-mono ${
                                    result.includes('✓')
                                        ? 'border-green-500/40 bg-green-500/10 text-green-200'
                                        : 'border-red-500/40 bg-red-500/10 text-red-200'
                                }`}
                            >
                                {result}
                            </motion.div>
                        )}
                    </form>
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                        <h3 className="text-xl font-semibold text-slate-100">Preferred channels</h3>
                        <p className="mt-2 text-sm text-slate-300/90">
                            Reach out with a short brief or simply say hi and I’ll reply with a calendar link and kickoff notes.
                        </p>
                        <div className="mt-5 space-y-4">
                            {primaryChannels.map((channel) => {
                                const Icon = channel.icon;
                                return (
                                    <a
                                        key={channel.label}
                                        href={channel.href}
                                        target={channel.label === 'LinkedIn' ? '_blank' : undefined}
                                        rel={channel.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 transition-colors hover:border-white/20 hover:bg-white/10"
                                    >
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white">
                                            <Icon size={18} />
                                        </span>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">{channel.label}</p>
                                            <p className="mt-1 text-sm text-slate-100/90">{channel.value}</p>
                                            <p className="text-xs text-slate-400">{channel.hint}</p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_40px_rgba(15,23,42,0.35)]">
                        <h3 className="text-xl font-semibold text-blue-100">Let's connect</h3>
                        <p className="mt-2 text-sm text-blue-50/85">
                            Currently building production systems at DexaMinds. Open to discussing new opportunities, collaborations, or interesting technical challenges.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm">
                            <span className="rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-blue-100">
                                Full Stack Dev
                            </span>
                            <span className="rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-blue-100">
                                Java • Python • React • Node.js
                            </span>
                            <span className="rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-blue-100">
                                Open to opportunities
                            </span>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </section>
    );
};

export default FuturisticContact;
