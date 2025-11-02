'use client';

import { motion } from 'motion/react';

const capabilityMatrix = [
    {
        title: 'Frontend Platforms',
        description: 'React and Next.js interfaces with accessible UX, performance budgets, and reusable design systems.',
        stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind', 'Motion'],
        metric: 'Core Web Vitals 95+'
    },
    {
        title: 'Backend & APIs',
        description: 'Java/Spring, Node.js, and FastAPI services with validation, observability, and documentation baked in.',
        stack: ['Fastify', 'Node.js', 'FastAPI', 'Prisma', 'Postgres', 'MongoDB', 'Postman'],
        metric: '<50ms P99 latency'
    },
    {
        title: 'Cloud & DevOps',
        description: 'Infrastructure as code mindset enabling automated deployments, observability, and cost awareness.',
        stack: ['AWS', 'Docker', 'GitHub Actions', 'Railway'],
        metric: '99.9% uptime target'
    },
    {
        title: 'Data & Intelligence',
        description: 'Applied AI with RAG pipelines, chatbot design, and measurable impact on customer workflows.',
        stack: ['TensorFlow', 'Python', 'Pandas', 'RAG Pipelines', 'Gemini', 'Groq'],
        metric: '95%+ model accuracy'
    }
];

const ScrollableSkills = () => {
    return (
        <section className="flex w-full flex-col text-white">
            <motion.header
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="inline-flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                    Capabilities
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                        Tech stack depth across the product lifecycle
                    </span>
                </h2>
                <p className="max-w-3xl text-base sm:text-lg text-slate-300/90">
                    From UI prototypes to resilient APIs and AI accelerators, I bring a balanced skill set that keeps
                    teams shipping. Each capability is backed by real projects and measurable KPIs.
                </p>
            </motion.header>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
                {capabilityMatrix.map((capability, index) => (
                    <motion.article
                        key={capability.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-200">
                                {capability.title}
                            </p>
                            <p className="text-sm leading-relaxed text-slate-200/90">
                                {capability.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {capability.stack.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                                <span>Outcome</span>
                                <span>{capability.metric}</span>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <motion.div
                className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-slate-200">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                            Collaboration
                        </p>
                        <p className="mt-3">
                            Works closely with team members to deliver production systems, contributing to codebases and integrating features across the stack.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-slate-200">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                            Documentation
                        </p>
                        <p className="mt-3">
                            Maintains clear documentation for DexaMinds projects, including API documentation for TrackBrandIQ and deployment guides.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-slate-200">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                            Code Quality
                        </p>
                        <p className="mt-3">
                            Focuses on writing maintainable code, following best practices, and contributing to stable production releases.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ScrollableSkills;
