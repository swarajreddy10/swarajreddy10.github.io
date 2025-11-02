'use client';

import { assets } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';

const quickFacts = [
    { label: 'Name', value: 'Swaraj Chandra Reddy M' },
    { label: 'Role', value: 'Full Stack Developer' },
    { label: 'Strength', value: 'Learning agility across frontend, backend, and AI' },
    { label: 'Education', value: 'B.Tech CSE, GITAM University (2025)' },
    { label: 'CGPA', value: '8.2 / 10' },
    { label: 'Location', value: 'Hyderabad • Remote-friendly' },
    { label: 'Working Style', value: 'Open to onsite · hybrid · remote roles' },
    { label: 'Current Focus', value: 'Product engineering and applied AI' }
];

const focusAreas = [
    {
        title: 'Product Engineering',
        summary: 'Designs modular web apps and APIs with measurable UX gains and a healthy release rhythm.',
        stack: ['Next.js', 'React 19', 'TypeScript', 'Node.js', 'Python', 'Postman']
    },
    {
        title: 'Ops and Enablement',
        summary: 'Automates deployments with Docker and GitHub Actions while keeping uptime, cost, and insight transparent.',
        stack: ['AWS', 'GCP', 'Docker', 'GitHub Actions']
    },
    {
        title: 'Data and AI Systems',
        summary: 'Builds ML pipelines and retrieval augmented experiences with explainable metrics and observability.',
        stack: ['TensorFlow', 'FastAPI', 'Gemini', 'Groq']
    }
];

const coreSkills = [
    'Java',
    'Python',
    'Node.js',
    'TypeScript',
    'React',
    'Next.js',
    'Spring Boot',
    'REST APIs',
    'AI RAG',
    'Algorithms',
    'AWS',
    'Docker',
    'GitHub Actions',
    'Postman',
    'Puppeteer',
    'Handlebars',
    'MySQL',
    'MongoDB',
    'Prisma',
    'Railway',
    'Vercel',
    'Botpress',
    'Vitest',
    'Jest',
    'Pytest'
];

const journeyTimeline = [
    {
        year: 'June 2025 to Present',
        name: 'DexaMinds · Software Developer',
        impact: 'Full-time engineer delivering documentation platforms, PDF automation, and chatbot integrations with React, Node.js, Puppeteer, and GitHub Actions (99.5% uptime, 85% test coverage).'
    },
    {
        year: 'Oct 2025',
        name: 'JPMorgan Chase · Virtual Job Simulation (Forage)',
        impact: 'Completed virtual internship simulation focusing on project setup, Kafka, H2 integrations, and implementing REST API controllers with Spring Boot.'
    },
    {
        year: 'Apr to Jun 2024',
        name: 'AICTE Edu Skills · AWS Cloud Intern',
        impact: 'Provisioned secure EC2, S3, VPC, and RDS environments, automated Lambda workflows, and documented deployment runbooks for the wider team.'
    }
];

const CleanAbout = () => {
    return (
        <section className="flex w-full flex-col text-white">
            <motion.header
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="inline-flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                    About
                    <span className="h-1 w-1 rounded-full bg-blue-400" />
                    Profile
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                        Engineering software that earns trust from day zero
                    </span>
                </h2>
                <p className="w-full text-base sm:text-lg text-slate-300/90 leading-relaxed hyphens-none">
                    Full stack developer at DexaMinds, B.Tech Computer Science graduate from GITAM University (July 2025). I combine Java/Spring and React/Next.js experience with a reliable API, database, and DevOps toolkit, keeping documentation strong, CI/CD automated, and releases stable. I grow projects from prototypes to production-ready systems while coaching teammates on code quality, observability, and deployment hygiene.
                </p>
            </motion.header>

            <motion.div
                className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.95fr]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="space-y-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                            <div className="relative w-40 shrink-0 justify-self-start sm:w-44">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent blur-2xl" />
                                <Image
                                    src={assets.my_image}
                                    alt="Swaraj Reddy"
                                    className="relative z-10 h-40 w-40 rounded-3xl border border-white/20 object-cover shadow-[0_15px_40px_rgba(59,130,246,0.35)] sm:h-44 sm:w-44"
                                    width={176}
                                    height={176}
                                    priority={false}
                                />
                            </div>
                            <div className="flex-1 space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {quickFacts.map((item) => (
                                        <div
                                            key={item.label}
                                            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-left"
                                        >
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-200">
                                                {item.label}
                                            </p>
                                            <p className="mt-2 text-sm text-slate-100/90">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent p-6 sm:p-8">
                        <h3 className="text-xl font-semibold text-slate-100">Focus Areas</h3>
                        <div className="mt-6 grid gap-6 sm:grid-cols-2">
                            {focusAreas.map((area) => (
                                <div
                                    key={area.title}
                                    className="group rounded-2xl border border-white/10 bg-black/30 p-5 transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                                        {area.title}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
                                        {area.summary}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {area.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">Core Skills</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {coreSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_40px_rgba(15,23,42,0.35)]">
                        <h3 className="text-xl font-semibold text-blue-100">Career moments</h3>
                        <p className="mt-3 text-sm text-blue-50/90">
                            Hands-on builder focused on measurable outcomes such as latency, reliability, and adoption.
                            Current highlight: TrackBrandIQ reporting pipeline.
                        </p>
                        <div className="mt-6 space-y-5">
                            {journeyTimeline.map((project) => (
                                <div key={project.name} className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
                                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                                        <span className="rounded-full border border-blue-300/40 bg-blue-300/10 px-3 py-1 text-xs">
                                            {project.year}
                                        </span>
                                        {project.name}
                                    </div>
                                    <p className="mt-3 text-sm text-blue-50/90">{project.impact}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">
                        <h3 className="text-xl font-semibold text-slate-100">What teams appreciate</h3>
                        <ul className="mt-4 space-y-3 text-sm text-slate-300/90">
                            <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                                Reliable delivery rhythm built by breaking down user stories into shippable increments.
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                                Bias for instrumentation: metrics, logs, and traces wired before hand-off.
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                                Clear documentation and async updates that reduce onboarding friction.
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                                Calm collaboration style that balances technical detail with interpersonal clarity.
                            </li>
                        </ul>
                        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-slate-200">
                            Looking to bring this discipline and learning agility to product, platform, or AI teams in 2025.
                            Let’s explore how I can help accelerate your roadmap.
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CleanAbout;
