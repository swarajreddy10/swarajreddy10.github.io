'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';

const WORDS = [
    { word: 'Hello',     lang: 'EN' },
    { word: 'నమస్కారం', lang: 'TE' },
    { word: 'नमस्ते',    lang: 'HI' },
    { word: 'Bonjour',   lang: 'FR' },
    { word: 'Hola',      lang: 'ES' },
    { word: 'নমস্কার',   lang: 'BN' },
    { word: 'Ciao',      lang: 'IT' },
    { word: 'வணக்கம்',  lang: 'TA' },
    { word: 'नमस्कार',   lang: 'MR' },
    { word: 'Olá',       lang: 'PT' },
    { word: 'Hallo',     lang: 'DE' },
];

/* ── Site palette ── */
const BG   = '#FAF8EE';   /* --base   */
const FG   = '#550003';   /* --fg     */
const GOLD = '#8A7E1A';   /* --accent */

export default function Preloader({ onDone }) {
    const prefersReduced = useReducedMotion();
    const canvasRef = useRef(null);
    const wordRefs  = useRef([]);
    const [phase,   setPhase]   = useState('spiral');
    const [visible, setVisible] = useState(true);

    /* ── Reduced-motion shortcut ──────────────────────────────── */
    useEffect(() => {
        if (!prefersReduced) return;
        setPhase('name');
        const t = setTimeout(() => setVisible(false), 900);
        return () => clearTimeout(t);
    }, [prefersReduced]);

    /* ── Main animation ───────────────────────────────────────── */
    useEffect(() => {
        if (prefersReduced) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        /* Reset any leftovers from Strict Mode double-invoke */
        gsap.set(canvas, { clearProps: 'opacity' });

        const ctx = canvas.getContext('2d');
        const W   = (canvas.width  = window.innerWidth);
        const H   = (canvas.height = window.innerHeight);
        const cx  = W / 2;
        const cy  = H / 2;

        /* ── Archimedean spiral: r = b·(θ − θ₀) ──────────────── */
        const TURNS  = 2.5;
        const T0     = -Math.PI / 2;
        const T_END  = T0 + TURNS * 2 * Math.PI;
        const MAX_R  = Math.min(W, H) * 0.40;
        const b      = MAX_R / (TURNS * 2 * Math.PI);
        const pos    = (θ) => ({
            x: cx + b * (θ - T0) * Math.cos(θ),
            y: cy + b * (θ - T0) * Math.sin(θ),
        });

        /* Word 0 ("Hello") sits at the origin (spiral center).
           Words 1-10 spread from 20 % onwards — no crowding near center. */
        const thetas = WORDS.map((_, i) => {
            if (i === 0) return T0; // origin point: r = 0 → (cx, cy)
            return T0 + (0.20 + ((i - 1) / (WORDS.length - 2)) * (0.92 - 0.20)) * (T_END - T0);
        });

        /* Position each word element via GSAP */
        const wordEls = wordRefs.current.filter(Boolean);
        wordEls.forEach((el, i) => {
            const { x, y } = pos(thetas[i]);
            gsap.set(el, {
                position: 'absolute',
                left: cx, top: cy,
                xPercent: -50, yPercent: -50,
                x: x - cx, y: y - cy,
                opacity: 0, scale: 0.5,
            });
        });

        /* ── Canvas draw helpers ──────────────────────────────── */
        const drawSpiral = (upTo) => {
            ctx.beginPath();
            for (let i = 0; i <= 700; i++) {
                const t = T0 + (i / 700) * (upTo - T0);
                const p = pos(t);
                i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
            }
            ctx.strokeStyle = 'rgba(138,126,26,0.52)';
            ctx.lineWidth   = 1.8;
            ctx.lineCap     = 'round';
            ctx.stroke();
            /* Anchor dots at revealed positions */
            thetas.forEach((wt) => {
                if (upTo < wt) return;
                const p = pos(wt);
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(138,126,26,0.65)';
                ctx.fill();
            });
        };

        const drawTip = (θ) => {
            const p = pos(θ);
            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 22);
            g.addColorStop(0,   'rgba(184,171,56,1.0)');
            g.addColorStop(0.4, 'rgba(184,171,56,0.25)');
            g.addColorStop(1,   'rgba(184,171,56,0)');
            ctx.beginPath();
            ctx.arc(p.x, p.y, 22, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
        };

        /* ── GSAP timeline ────────────────────────────────────── */
        const revealed = new Set();
        const prog     = { t: 0 };

        const tl = gsap.timeline({ onComplete: () => setPhase('name') });

        /* 1 — Draw spiral + pop words in */
        tl.to(prog, {
            t: 1,
            duration: 2.5,
            ease: 'power1.inOut',
            onUpdate() {
                const nowT = T0 + prog.t * (T_END - T0);
                ctx.clearRect(0, 0, W, H);
                drawSpiral(nowT);
                drawTip(nowT);

                thetas.forEach((wt, i) => {
                    if (nowT < wt || revealed.has(i)) return;
                    revealed.add(i);
                    const el = wordEls[i];
                    if (el) gsap.to(el, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' });
                });
            },
        })

        /* 2 — Hold */
        .to({}, { duration: 0.28 })

        /* 3 — Implode words toward center */
        .to(wordEls, {
            x: 0, y: 0, scale: 0, opacity: 0,
            duration: 0.6,
            stagger: { each: 0.04, from: 'random' },
            ease: 'power3.in',
        })

        /* 4 — Fade spiral canvas */
        .to(canvas, { opacity: 0, duration: 0.4, ease: 'power2.in' }, '<+0.08');

        return () => {
            tl.kill();
            gsap.killTweensOf([...wordEls, canvas]);
        };
    }, [prefersReduced]); // eslint-disable-line

    /* Auto-exit after name shown */
    useEffect(() => {
        if (phase !== 'name') return;
        const t = setTimeout(() => setVisible(false), 1400);
        return () => clearTimeout(t);
    }, [phase]);

    return (
        <AnimatePresence onExitComplete={onDone}>
            {visible && (
                <motion.div
                    exit={{ clipPath: ['inset(0% 0% 0% 0%)', 'inset(50% 0% 50% 0%)'] }}
                    transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 9999,
                        background: BG, overflow: 'hidden',
                        clipPath: 'inset(0% 0% 0% 0%)',
                    }}
                >
                    {/* Canvas — zIndex 1, always visible */}
                    <canvas
                        ref={canvasRef}
                        style={{
                            position: 'absolute', inset: 0,
                            width: '100%', height: '100%',
                            zIndex: 1, pointerEvents: 'none', display: 'block',
                        }}
                    />

                    {/* Greeting words — zIndex 2 */}
                    {WORDS.map((item, i) => (
                        <div
                            key={i}
                            ref={el => { wordRefs.current[i] = el; }}
                            style={{
                                position: 'absolute',
                                zIndex: 2,
                                top: 0, left: 0,
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                                fontFamily: 'var(--font-display)',
                                fontStyle: 'italic',
                                fontSize: 'clamp(12px,1.55vw,22px)',
                                fontWeight: 400,
                                color: FG,
                                letterSpacing: '-0.01em',
                                lineHeight: 1,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {item.word}
                            <span style={{
                                marginLeft: 4,
                                fontFamily: 'var(--font-mono)',
                                fontStyle: 'normal',
                                fontSize: '0.34em',
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                color: `${GOLD}99`,
                                verticalAlign: 'middle',
                            }}>
                                {item.lang}
                            </span>
                        </div>
                    ))}

                    {/* Name reveal — zIndex 3 */}
                    <AnimatePresence>
                        {phase === 'name' && (
                            <motion.div
                                key="name"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.18 }}
                                style={{
                                    position: 'absolute', inset: 0, zIndex: 3,
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'center', justifyContent: 'center',
                                    pointerEvents: 'none',
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    width: 'min(300px,50vw)', height: 'min(300px,50vw)',
                                    borderRadius: '50%',
                                    border: `1px solid ${GOLD}28`,
                                    animation: 'preloader-ring 1.2s ease-out forwards',
                                }} />

                                <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                                    <motion.h1
                                        initial={{ y: '106%' }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            fontStyle: 'italic',
                                            fontSize: 'clamp(38px,7.5vw,92px)',
                                            fontWeight: 400,
                                            color: FG,
                                            letterSpacing: '-0.03em',
                                            lineHeight: 1,
                                            margin: 0,
                                        }}
                                    >
                                        Swaraj Reddy
                                    </motion.h1>
                                </div>

                                <div style={{ overflow: 'hidden', marginTop: 14, position: 'relative', zIndex: 1 }}>
                                    <motion.p
                                        initial={{ y: '106%' }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.14, ease: [0.33, 1, 0.68, 1] }}
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: 11,
                                            letterSpacing: '0.34em',
                                            textTransform: 'uppercase',
                                            color: GOLD,
                                            margin: 0,
                                        }}
                                    >
                                        Full-Stack Engineer
                                    </motion.p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
