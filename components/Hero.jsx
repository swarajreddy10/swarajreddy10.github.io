'use client';

import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
import { ArrowDown, ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

const ACCENT = '#C8622A';
const FG     = '#F2EDE8';
const MUTED  = '#6B6560';
const BORDER = '#252220';
const SURF   = '#111010';

const SOCIALS = [
    { href: 'mailto:swarajchandra22@gmail.com',    Icon: Mail,     label: 'Email'              },
    { href: 'https://linkedin.com/in/swarajreddy', Icon: Linkedin, label: 'LinkedIn', ext: true },
    { href: 'https://github.com/swarajreddy10',    Icon: Github,   label: 'GitHub',   ext: true },
];

/* ── Terminal screen inside the laptop ── */
function TerminalScreen() {
    const rows = [
        { prompt: true,  text: 'whoami' },
        { divider: true },
        { output: true,  label: 'Name',    value: 'Swaraj Chandra Reddy M',       accent: false },
        { output: true,  label: 'Role',    value: 'Full-Stack Engineer',           accent: true  },
        { output: true,  label: 'Company', value: 'Dexaminds',                     accent: false },
        { output: true,  label: 'Base',    value: 'Hyderabad · Open to remote',   accent: false },
        { divider: true },
        { prompt: true,  text: 'ls ~/stack' },
    ];

    const stack = [
        ['Java · Spring',  'Python · FastAPI'],
        ['React · Next.js', 'Node.js · TS'],
        ['AWS · Docker',   'PostgreSQL'],
    ];

    return (
        <div style={{
            position: 'absolute', inset: 0,
            background: '#0D1117',
            fontFamily: '"JetBrains Mono", "Courier New", monospace',
            fontSize: 11, padding: '0',
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
            color: '#E6EDF3',
        }}>
            {/* Traffic lights */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '8px 12px',
                background: '#161B22',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                flexShrink: 0,
            }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFBD2E', display: 'block' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840', display: 'block' }} />
                <span style={{
                    flex: 1, textAlign: 'center', fontSize: 9,
                    color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em',
                }}>
                    swaraj@portfolio  ~
                </span>
            </div>

            {/* Terminal body */}
            <div style={{ flex: 1, padding: '14px 16px', overflow: 'hidden' }}>
                {rows.map((row, i) => {
                    if (row.divider) return (
                        <div key={i} style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '8px 0' }} />
                    );
                    if (row.prompt) return (
                        <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 6, fontSize: 11 }}>
                            <span style={{ color: '#3FB950' }}>swaraj</span>
                            <span style={{ color: 'rgba(255,255,255,0.25)' }}>:</span>
                            <span style={{ color: '#58A6FF' }}>~</span>
                            <span style={{ color: 'rgba(255,255,255,0.5)' }}>$ {row.text}</span>
                        </div>
                    );
                    if (row.output) return (
                        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 3, fontSize: 10.5 }}>
                            <span style={{ color: 'rgba(255,255,255,0.22)', width: 50, flexShrink: 0 }}>{row.label}</span>
                            <span style={{ color: row.accent ? ACCENT : 'rgba(230,237,243,0.8)' }}>{row.value}</span>
                        </div>
                    );
                    return null;
                })}

                {/* Stack grid */}
                <div style={{ marginTop: 4 }}>
                    {stack.map((pair, pi) => (
                        <div key={pi} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px 20px', marginBottom: 3 }}>
                            {pair.map((s, si) => (
                                <span key={si} style={{ fontSize: 10, color: 'rgba(230,237,243,0.5)' }}>
                                    <span style={{ color: '#58A6FF', marginRight: 5 }}>→</span>{s}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Blinking cursor */}
                <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
                    <span style={{ color: '#3FB950' }}>swaraj</span>
                    <span style={{ color: 'rgba(255,255,255,0.25)' }}>:</span>
                    <span style={{ color: '#58A6FF' }}>~</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>$ </span>
                    <span style={{
                        display: 'inline-block', width: 7, height: 13,
                        background: ACCENT, verticalAlign: 'text-bottom',
                        animation: 'blink 1.1s step-end infinite',
                    }} />
                </div>
            </div>
        </div>
    );
}

/* ── Laptop mockup ── */
function LaptopMockup() {
    const W  = 660;   // enlarged
    const H  = 415;
    const BW = W + 52;

    return (
        <div style={{ perspective: '2200px', position: 'relative' }} className="select-none">
            <motion.div
                initial={{ opacity: 0, y: 80, rotateX: 8 }}
                animate={{ opacity: 1, y: 0,  rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.33, 1, 0.68, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        transform: 'rotateY(-7deg) rotateX(2.5deg)',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {/* Screen lid */}
                    <div style={{
                        width: W,
                        background: 'linear-gradient(160deg, #2C2C2E 0%, #1C1C1E 100%)',
                        borderRadius: '18px 18px 0 0',
                        padding: '13px 13px 6px',
                        boxShadow: [
                            'inset 0 1px 0 rgba(255,255,255,0.09)',
                            '0 0 0 1px rgba(0,0,0,0.35)',
                            '0 80px 180px rgba(0,0,0,0.7)',
                            '0 40px 80px rgba(0,0,0,0.45)',
                            `0 0 200px ${ACCENT}20`,
                        ].join(', '),
                    }}>
                        {/* Webcam dot */}
                        <div style={{
                            width: 6, height: 6, borderRadius: '50%',
                            background: '#3A3A3C', border: '0.5px solid rgba(255,255,255,0.08)',
                            margin: '0 auto 9px',
                        }} />
                        {/* Display */}
                        <div style={{
                            width: W - 26, height: H,
                            borderRadius: 9, overflow: 'hidden',
                            position: 'relative',
                            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.8)',
                        }}>
                            {/* Glare */}
                            <div style={{
                                position: 'absolute', inset: 0, zIndex: 10,
                                pointerEvents: 'none',
                                background: 'linear-gradient(130deg, rgba(255,255,255,0.04) 0%, transparent 38%)',
                                borderRadius: 9,
                            }} />
                            <TerminalScreen />
                        </div>
                    </div>

                    {/* Hinge */}
                    <div style={{
                        height: 5,
                        background: 'linear-gradient(180deg, #4A4A4E 0%, #8C8C90 100%)',
                        margin: '0 -1px',
                    }} />

                    {/* Keyboard base */}
                    <div style={{
                        width: BW, marginLeft: -26, height: 18,
                        background: 'linear-gradient(180deg, #C8C8CC 0%, #AFAFB3 100%)',
                        borderRadius: '0 0 16px 16px',
                        boxShadow: '0 24px 70px rgba(0,0,0,0.65), 0 8px 24px rgba(0,0,0,0.4)',
                        position: 'relative',
                    }}>
                        <div style={{
                            position: 'absolute', top: 4, left: '13%', right: '13%',
                            height: 2, background: 'rgba(0,0,0,0.06)', borderRadius: 1,
                        }} />
                        <div style={{
                            position: 'absolute', bottom: 3, left: '50%',
                            transform: 'translateX(-50%)',
                            width: 74, height: 6,
                            background: 'rgba(0,0,0,0.07)', borderRadius: 3,
                        }} />
                    </div>
                </motion.div>
            </motion.div>

            {/* Floor shadow + accent glow */}
            <div style={{
                position: 'absolute', bottom: -36, left: '4%', right: '4%',
                height: 32,
                background: `radial-gradient(ellipse at center, ${ACCENT}12 0%, rgba(0,0,0,0.4) 50%, transparent 70%)`,
                filter: 'blur(22px)',
            }} />
        </div>
    );
}

/* ── Hero section ── */
export default function Hero() {
    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
            style={{ background: '#09080A', paddingTop: '88px', paddingBottom: '48px' }}
        >
            {/* WebGL galaxy background */}
            <div className="pointer-events-none absolute inset-0" style={{ opacity: 0.55 }}>
                <HeroCanvas />
            </div>

            {/* Subtle radial vignette */}
            <div className="pointer-events-none absolute inset-0" style={{
                background: 'radial-gradient(ellipse 85% 70% at 50% 50%, transparent 30%, rgba(9,8,10,0.7) 100%)',
            }} />

            {/* Terracotta ambient bloom */}
            <div className="pointer-events-none absolute" style={{
                top: '10%', left: '50%', transform: 'translateX(-50%)',
                width: '60vw', height: '35vh',
                background: `radial-gradient(ellipse at center, ${ACCENT}0E 0%, transparent 70%)`,
                filter: 'blur(40px)',
            }} />

            {/* ── Content ── */}
            <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-7 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5"
                    style={{ borderColor: BORDER, background: SURF, boxShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: MUTED }}>
                        Available · Hyderabad, India
                    </span>
                </motion.div>

                {/* Name — clip-from-below */}
                <div style={{ overflow: 'hidden', marginBottom: 10 }}>
                    <motion.h1
                        initial={{ y: '108%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.85, delay: 0.32, ease: [0.33, 1, 0.68, 1] }}
                        style={{
                            fontSize: 'clamp(40px, 6.5vw, 84px)',
                            fontWeight: 800, letterSpacing: '-0.04em',
                            color: FG, lineHeight: 1,
                        }}
                    >
                        Swaraj Reddy
                    </motion.h1>
                </div>

                {/* Role */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.52 }}
                    className="mb-12 font-mono text-[11px] font-semibold uppercase tracking-[0.28em]"
                    style={{ color: ACCENT }}
                >
                    Full‑Stack Engineer · Dexaminds
                </motion.p>

                {/* ── Laptop ── responsive scaling */}
                <div
                    className="mb-14 w-full flex justify-center"
                    style={{ overflowX: 'visible' }}
                >
                    <div className="scale-[0.48] sm:scale-[0.62] md:scale-[0.78] lg:scale-[0.92] xl:scale-100 origin-center"
                        style={{ transformOrigin: 'center top' }}>
                        <LaptopMockup />
                    </div>
                </div>

                {/* Brief descriptor */}
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.72 }}
                    className="mb-8 max-w-md text-[15px] leading-relaxed"
                    style={{ color: '#706A64' }}
                >
                    Building production-grade AI pipelines, microservices &amp; SaaS —{' '}
                    <span style={{ color: '#9A948E' }}>Java · Python · React · Node.js</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.82 }}
                    className="flex flex-wrap items-center justify-center gap-3"
                >
                    <button
                        onClick={() => scrollTo('projects')}
                        className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 active:scale-95"
                        style={{ background: ACCENT }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#D4703A')}
                        onMouseLeave={e => (e.currentTarget.style.background = ACCENT)}
                    >
                        View Work
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                    <button
                        onClick={() => scrollTo('contact')}
                        className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-95"
                        style={{ borderColor: BORDER, color: '#706A64', background: 'transparent' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = `${ACCENT}55`; e.currentTarget.style.color = FG; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = '#706A64'; }}
                    >
                        Let&apos;s Talk
                    </button>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.05, duration: 0.5 }}
                    className="mt-6 flex items-center gap-2"
                >
                    {SOCIALS.map(({ href, Icon, label, ext }) => (
                        <a
                            key={label}
                            href={href}
                            target={ext ? '_blank' : undefined}
                            rel={ext ? 'noopener noreferrer' : undefined}
                            aria-label={label}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 active:scale-95"
                            style={{ borderColor: BORDER, color: MUTED, background: SURF }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = `${ACCENT}55`; e.currentTarget.style.color = ACCENT; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = MUTED; }}
                        >
                            <Icon size={15} />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll cue */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                onClick={() => scrollTo('about')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer border-none bg-transparent"
                style={{ color: MUTED }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.4')}
            >
                <span className="font-mono text-[9px] uppercase tracking-[0.45em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={12} />
                </motion.div>
            </motion.button>
        </section>
    );
}
