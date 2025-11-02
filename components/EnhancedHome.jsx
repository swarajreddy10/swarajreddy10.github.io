'use client';

import { assets } from '@/assets/assets';
import { motion } from 'motion/react';
import { Linkedin, Mail, Github } from 'lucide-react';
import Image from 'next/image';

const capabilityBadges = [
    'Full Stack',
    'API Design',
    'Cloud Ready',
    'AI & Automation'
];

const impactHighlights = [
    {
        title: 'Reliable Releases',
        description: 'Ships documentation, analytics, and automation tooling that stay observable with high test coverage and CI/CD discipline.'
    },
    {
        title: 'Automation First',
        description: 'Rolls out GitHub Actions, Docker pipelines, and resilient REST APIs to keep teams shipping without downtime.'
    },
    {
        title: 'AI Craftsmanship',
        description: 'Builds RAG workflows and conversational copilots with FastAPI, Groq, and Gemini, tuned for sub-350ms responses.'
    }
];

const heroStats = [
    { value: '0-1 Year', label: 'Building Products', detail: 'Full stack and AI automation projects delivered end to end.' },
    { value: '8.2 CGPA', label: 'B.Tech CSE (2025)', detail: 'GITAM University, Hyderabad.' },
    { value: 'Toolkit', label: 'Java · React · AWS', detail: 'Comfortable across backend, frontend, and DevOps lanes.' }
];

const EnhancedHome = () => {
    const handleNavigate = (id) => {
        if (typeof window === 'undefined') return;
        window.dispatchEvent(new CustomEvent('slider:navigate', { detail: { id } }));
    };

    return (
        <section className="relative flex h-full min-h-screen w-full items-center py-14 sm:py-16 lg:py-20">
            <div className="absolute inset-0 opacity-70">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-y-0 left-[10%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="absolute inset-y-0 right-[12%] w-[1px] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-12">
                <motion.div
                    className="w-full space-y-8 lg:w-1/2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300/80">
                        Swaraj Reddy
                        <span className="h-1 w-1 rounded-full bg-blue-400" />
                        India
                    </span>

                    <div className="space-y-5">
                        <motion.h1
                            className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                                Full stack software engineer crafting dependable products and automation
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-base sm:text-lg lg:text-xl text-slate-300/90 lg:max-w-xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Comfortable moving between Java/Spring services, Python APIs, React and Next.js frontends, Node.js tooling, and AWS or Docker automation.
                            I specialise in production-grade REST APIs, robust database layers, and CI/CD pipelines that keep delivery predictable.
                        </motion.p>
                        <motion.p
                            className="text-sm sm:text-base lg:text-lg text-slate-400/90 lg:max-w-xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Recent wins include documentation and analytics tooling with high uptime, automated PDF reporting pipelines, and an Echo AI RAG platform combining Groq and Gemini for sub-350ms responses.
                        </motion.p>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        {capabilityBadges.map((badge) => (
                            <span
                                key={badge}
                                className="inline-flex items-center justify-center rounded-full border border-slate-700/60 bg-gradient-to-r from-white/10 via-white/5 to-transparent px-4 py-2 text-xs sm:text-sm font-medium tracking-wide text-slate-200 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                            >
                                {badge}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <button
                            type="button"
                            onClick={() => handleNavigate('projects')}
                            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-blue-600/30 transition-transform duration-300 hover:scale-[1.02]"
                        >
                            Explore Work
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                                →
                            </span>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleNavigate('contact')}
                            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 backdrop-blur transition-all hover:border-blue-500/60 hover:text-blue-200"
                        >
                            Let's Collaborate
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs font-semibold">
                                24/7
                            </span>
                        </button>
                        <div className="flex gap-3">
                            <a
                                href="mailto:swarajchandra22@gmail.com"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:border-white hover:bg-white/20"
                                aria-label="Email Swaraj"
                            >
                                <Mail size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/swarajreddy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:border-white hover:bg-white/20"
                                aria-label="Swaraj on LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://github.com/swarajreddy10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:border-white hover:bg-white/20"
                                aria-label="Swaraj on GitHub"
                            >
                                <Github size={18} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        {heroStats.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                                <div className="text-lg font-semibold uppercase tracking-[0.2em] text-blue-200">
                                    {stat.value}
                                </div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                                    {stat.label}
                                </p>
                                <p className="text-xs text-slate-400">{stat.detail}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="relative w-full lg:w-1/2">
                    <motion.div
                        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                        initial={{ opacity: 0, scale: 0.92, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28)_0%,_rgba(17,24,39,0.05)_55%,_transparent_85%)]" />
                        <div className="relative flex flex-col gap-8">
                            <div className="relative mx-auto flex w-full max-w-xs flex-col items-center gap-3">
                                <div className="absolute inset-0 -translate-y-6 scale-[1.1] rounded-full bg-gradient-to-tr from-blue-500/30 via-sky-400/20 to-transparent blur-2xl" />
                                <div className="relative">
                                    <div className="absolute inset-[-6px] rounded-full border border-white/40 bg-gradient-to-r from-blue-500/40 via-indigo-500/30 to-transparent blur-md" />
                                    <Image
                                        src={assets.profile_img}
                                        alt="Swaraj Reddy Portrait"
                                        className="relative z-10 h-48 w-48 rounded-full border border-white/20 object-cover shadow-[0_10px_40px_rgba(59,130,246,0.35)]"
                                        width={192}
                                        height={192}
                                        priority
                                    />
                                </div>
                                <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-200">
                                    Full Stack • APIs • AI
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {impactHighlights.map((item) => (
                                    <div
                                        key={item.title}
                                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 text-left transition-transform hover:-translate-y-1"
                                    >
                                        <div className="absolute inset-0 translate-y-10 scale-110 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        <div className="relative space-y-2">
                                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/80">
                                                {item.title}
                                            </p>
                                            <p className="text-sm leading-relaxed text-slate-200/90">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mt-6 grid gap-4 sm:grid-cols-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 px-6 py-5 backdrop-blur-xl shadow-[0_10px_30px_rgba(59,130,246,0.25)]">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-blue-100/80">
                                Focus 2024 to 2025
                            </p>
                            <p className="mt-3 text-sm text-slate-100/90">
                                Full stack developer elevating digital products, dependable APIs, and AI copilots while adapting quickly to every toolchain on the roadmap.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-slate-200 backdrop-blur">
                            <div className="flex flex-col gap-2">
                                <span className="uppercase tracking-[0.3em] text-slate-400">
                                    Availability
                                </span>
                                <span className="flex items-center gap-2 text-blue-200 text-xs sm:text-sm">
                                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 flex-shrink-0" />
                                    <span>Taking conversations now</span>
                                </span>
                            </div>
                            <div className="mt-3 grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 sm:text-sm">
                                <span>Open to onsite · hybrid · remote roles</span>
                                <a href="tel:+919347387676" className="inline-flex w-max items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-blue-100 transition-colors hover:border-blue-300 hover:bg-blue-500/20">
                                    Call +91 93473 87676
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EnhancedHome;
