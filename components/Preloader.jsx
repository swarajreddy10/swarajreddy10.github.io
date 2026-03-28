'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onDone }) {
    const [count,   setCount]   = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let n = 0;
        const iv = setInterval(() => {
            // Uneven increments feel organic
            n += Math.ceil(Math.random() * 6 + 1);
            if (n >= 100) {
                n = 100;
                clearInterval(iv);
                setTimeout(() => setVisible(false), 300);
            }
            setCount(n);
        }, 22);
        return () => clearInterval(iv);
    }, []);

    return (
        <AnimatePresence onExitComplete={onDone}>
            {visible && (
                <motion.div
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 9999,
                        background: '#09080A',
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    {/* Top label */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 0.15, duration: 0.4 }}
                        style={{
                            fontFamily: 'monospace', fontSize: 9,
                            letterSpacing: '0.45em', textTransform: 'uppercase',
                            color: '#F2EDE8', marginBottom: 20,
                        }}
                    >
                        Portfolio · 2026
                    </motion.span>

                    {/* Name — clip reveal from bottom */}
                    <div style={{ overflow: 'hidden', lineHeight: 1 }}>
                        <motion.h1
                            initial={{ y: '105%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                            style={{
                                fontFamily: 'inherit', fontWeight: 800,
                                fontSize: 'clamp(38px, 7.5vw, 96px)',
                                color: '#F2EDE8',
                                letterSpacing: '-0.04em',
                                margin: 0, padding: 0,
                                lineHeight: 1,
                            }}
                        >
                            Swaraj Reddy
                        </motion.h1>
                    </div>

                    {/* Role line */}
                    <div style={{ overflow: 'hidden', marginTop: 10 }}>
                        <motion.p
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.22, ease: [0.33, 1, 0.68, 1] }}
                            style={{
                                fontFamily: 'monospace', fontSize: 11,
                                letterSpacing: '0.28em', textTransform: 'uppercase',
                                color: '#C8622A', margin: 0,
                            }}
                        >
                            Full‑Stack Engineer
                        </motion.p>
                    </div>

                    {/* Progress bar — thin line at bottom */}
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        height: 1.5, background: '#1A1918',
                    }}>
                        <div style={{
                            height: '100%', background: '#C8622A',
                            width: `${count}%`,
                            transition: 'width 0.08s linear',
                        }} />
                    </div>

                    {/* Counter — bottom right */}
                    <div style={{
                        position: 'absolute', bottom: 18, right: 28,
                        fontFamily: 'monospace', fontSize: 10,
                        color: 'rgba(242,237,232,0.25)',
                        letterSpacing: '0.08em',
                    }}>
                        {String(count).padStart(3, '0')}
                    </div>

                    {/* Decorative corner — top left */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.18 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            position: 'absolute', top: 28, left: 28,
                            fontFamily: 'monospace', fontSize: 9,
                            letterSpacing: '0.3em', textTransform: 'uppercase',
                            color: '#F2EDE8',
                        }}
                    >
                        Swaraj_
                    </motion.div>

                    {/* Thin horizontal divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
                        style={{
                            position: 'absolute',
                            width: 'min(480px, 80vw)', height: 1,
                            background: 'rgba(255,255,255,0.06)',
                            transformOrigin: 'left',
                            marginTop: 60,
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
