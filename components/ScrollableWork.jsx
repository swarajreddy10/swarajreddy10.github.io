'use client';

import { workData } from '@/assets/assets';
import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

const deliveryHighlights = [
    { label: 'Documentation uptime', value: '99.5%', detail: 'DexaMinds knowledge platform on React, TypeScript, Node.js.' },
    { label: 'Automation coverage', value: '85% tests', detail: 'TrackBrandIQ PDF pipeline with Vitest suites and GitHub Actions.' },
    { label: 'AI latency', value: '<350ms', detail: 'Echo AI RAG responses across Groq + Gemini deployment.' }
];

const ScrollableWork = () => {
    return (
        <section className="flex w-full flex-col text-white">
            <motion.header
                className="space-y-4 text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="inline-flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                    Case Studies
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                        Shipping DexaMinds products, AI copilots, and resilient APIs
                    </span>
                </h2>
                <p className="mx-auto max-w-3xl text-base sm:text-lg text-slate-300/90">
                    Recent releases include TrackBrandIQ report automation,
                    an employee management system, and an AI RAG platform. Every build carries analytics, performance
                    budgets, and developer experience tooling tuned for scale.
                </p>
            </motion.header>

            <motion.div
                className="mt-10 grid gap-6 sm:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                {deliveryHighlights.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-blue-200">
                            {item.label}
                        </p>
                        <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>
                        <p className="mt-2 text-sm text-slate-200/85">{item.detail}</p>
                    </div>
                ))}
            </motion.div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
                {workData.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
                            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90">
                                {project.description}
                            </div>
                        </div>
                        <div className="space-y-5 p-6 sm:p-7">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold text-white">
                                    {project.title.replace('🔗', '')}
                                </h3>
                                <p className="text-sm text-slate-300/90">
                                    {project.impact}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tech?.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-100 transition-colors duration-300 hover:bg-blue-500/20"
                                >
                                    <Rocket size={14} />
                                    Explore the build
                                </a>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent" />
                        </div>
                    </motion.article>
                ))}
            </div>

            <motion.div
                className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-purple-600/20 p-6 sm:p-8 backdrop-blur-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-50/80">
                            Ready for the next challenge
                        </p>
                        <h3 className="text-2xl font-semibold text-white">
                            Bring me into your product or platform roadmap and let’s convert ideas into production value.
                        </h3>
                        <p className="text-sm text-blue-100/80">
                            From strategy decks to detailed tech specs, I can pick up where your team is and ship the next milestone.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => window.dispatchEvent(new CustomEvent('slider:navigate', { detail: { id: 'contact' } }))}
                        className="inline-flex w-max items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-white hover:bg-white/20"
                    >
                        Start a scope call
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                            →
                        </span>
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default ScrollableWork;
