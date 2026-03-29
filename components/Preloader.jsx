'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const LANGUAGES = [
    { word: 'Hello',    lang: 'EN' },
    { word: 'Bonjour',  lang: 'FR' },
    { word: 'Hola',     lang: 'ES' },
    { word: 'Hallo',    lang: 'DE' },
    { word: 'Ciao',     lang: 'IT' },
    { word: 'Olá',      lang: 'PT' },
    { word: 'नमस्ते',    lang: 'HI' },
    { word: 'নমস্কার',   lang: 'BN' },
    { word: 'నమస్కారం', lang: 'TE' },
    { word: 'नमस्कार',  lang: 'MR' },
    { word: 'வணக்கம்',  lang: 'TA' },
];

const WORD_DURATION = 300;
const EXIT_EASE     = [0.76, 0, 0.24, 1];

export default function Preloader({ onDone }) {
    const prefersReduced = useReducedMotion();
    const [phase,     setPhase]     = useState('languages');
    const [langIndex, setLangIndex] = useState(0);
    const [count,     setCount]     = useState(0);
    const [visible,   setVisible]   = useState(true);
    const timerRef = useRef(null);

    useEffect(() => {
        if (prefersReduced) {
            setPhase('name');
            setTimeout(() => setVisible(false), 500);
            return;
        }
        let idx = 0;
        const cycle = () => {
            idx++;
            if (idx >= LANGUAGES.length) { setPhase('name'); return; }
            setLangIndex(idx);
            timerRef.current = setTimeout(cycle, WORD_DURATION);
        };
        timerRef.current = setTimeout(cycle, WORD_DURATION);
        return () => clearTimeout(timerRef.current);
    }, [prefersReduced]);

    useEffect(() => {
        let n = 0;
        const iv = setInterval(() => {
            n += Math.ceil(Math.random() * 6 + 1);
            if (n >= 100) { n = 100; clearInterval(iv); }
            setCount(n);
        }, 20);
        return () => clearInterval(iv);
    }, []);

    useEffect(() => {
        if (phase === 'name') {
            const t = setTimeout(() => setVisible(false), 1200);
            return () => clearTimeout(t);
        }
    }, [phase]);

    return (
        <AnimatePresence onExitComplete={onDone}>
            {visible && (
                <div style={{
                    position: 'fixed', inset: 0, zIndex: 9999,
                    background: 'var(--base)', overflow: 'hidden',
                }}>
                    <motion.div exit={{ y: '-100%' }} transition={{ duration: 0.75, ease: EXIT_EASE }}
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'var(--base)', zIndex: 2 }}
                    />
                    <motion.div exit={{ y: '100%' }} transition={{ duration: 0.75, ease: EXIT_EASE }}
                        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'var(--base)', zIndex: 2 }}
                    />

                    <div style={{
                        position: 'absolute', inset: 0, zIndex: 3,
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
                        <AnimatePresence mode="wait">
                            {phase === 'languages' && (
                                <motion.div
                                    key={langIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -16, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                                    style={{
                                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                                        fontSize: 'clamp(48px, 9vw, 112px)',
                                        fontWeight: 400, color: 'var(--fg)',
                                        letterSpacing: '-0.02em', lineHeight: 1,
                                        userSelect: 'none', textAlign: 'center',
                                    }}
                                >
                                    {LANGUAGES[langIndex].word}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {phase === 'name' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center' }}>
                                    <div style={{ overflow: 'hidden' }}>
                                        <motion.h1
                                            initial={{ y: '100%' }} animate={{ y: 0 }}
                                            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                            style={{
                                                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                                                fontSize: 'clamp(36px, 7vw, 88px)',
                                                fontWeight: 400, color: 'var(--fg)',
                                                letterSpacing: '-0.03em', lineHeight: 1, margin: 0,
                                            }}
                                        >
                                            Swaraj Reddy
                                        </motion.h1>
                                    </div>
                                    <div style={{ overflow: 'hidden', marginTop: 10 }}>
                                        <motion.p
                                            initial={{ y: '100%' }} animate={{ y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.08, ease: [0.33, 1, 0.68, 1] }}
                                            style={{
                                                fontFamily: 'var(--font-mono)', fontSize: 10,
                                                letterSpacing: '0.3em', textTransform: 'uppercase',
                                                color: 'var(--accent)', margin: 0,
                                            }}
                                        >
                                            Full‑Stack Engineer
                                        </motion.p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Lang label */}
                    <AnimatePresence mode="wait">
                        {phase === 'languages' && (
                            <motion.span
                                key={`l-${langIndex}`}
                                initial={{ opacity: 0 }} animate={{ opacity: 0.22 }} exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                style={{
                                    position: 'absolute', top: 24, right: 24, zIndex: 4,
                                    fontFamily: 'var(--font-mono)', fontSize: 9,
                                    letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--fg)',
                                }}
                            >
                                {LANGUAGES[langIndex].lang}
                            </motion.span>
                        )}
                    </AnimatePresence>

                    {/* Progress */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'var(--border)', zIndex: 4 }}>
                        <div style={{ height: '100%', background: 'var(--accent)', width: `${count}%`, transition: 'width 0.06s linear' }} />
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
