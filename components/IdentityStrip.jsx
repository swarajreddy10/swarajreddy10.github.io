'use client';

import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const MARQUEE_TEXT =
    'FULL-STACK ENGINEER · AI SYSTEMS · MICROSERVICES · JAVA · PYTHON · REACT · NODE.JS · AWS · DOCKER · POSTGRESQL · CI/CD · PRODUCTION · 2026 · ';

const STATS = [
    { value: 10,   suffix: '+', label: 'Months Experience', decimal: false },
    { value: 99.5, suffix: '%', label: 'Service Uptime',    decimal: true  },
    { value: 3,    suffix: '',  label: 'Products Shipped',  decimal: false },
];

function CountUp({ to, suffix, decimal, inView }) {
    const motionVal = useMotionValue(0);
    const spring    = useSpring(motionVal, { stiffness: 60, damping: 18 });
    const [display, setDisplay] = useState('0');

    useEffect(() => { if (inView) motionVal.set(to); }, [inView, to, motionVal]);

    useEffect(() => {
        const unsub = spring.on('change', (v) => {
            setDisplay(decimal ? v.toFixed(1) : Math.round(v).toString());
        });
        return unsub;
    }, [spring, decimal]);

    return <span>{display}{suffix}</span>;
}

export default function IdentityStrip() {
    const statsRef = useRef(null);
    const inView   = useInView(statsRef, { once: true, margin: '-80px' });

    return (
        <section style={{ background: 'var(--base)' }}>

            {/* Three stat columns */}
            <div
                ref={statsRef}
                style={{
                    borderTop: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}
            >
                {STATS.map(({ value, suffix, label, decimal }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.55, delay: i * 0.1 }}
                        style={{
                            padding: 'clamp(28px, 4vw, 48px) clamp(20px, 3vw, 40px)',
                            borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                            display: 'flex', flexDirection: 'column', gap: 8,
                        }}
                    >
                        <span style={{
                            fontFamily: 'var(--font-display)',
                            fontStyle: 'italic',
                            fontSize: 'clamp(42px, 5.5vw, 80px)',
                            fontWeight: 400, color: 'var(--fg)',
                            letterSpacing: '-0.03em', lineHeight: 1,
                        }}>
                            <CountUp to={value} suffix={suffix} decimal={decimal} inView={inView} />
                        </span>
                        <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: 9,
                            letterSpacing: '0.38em', textTransform: 'uppercase',
                            color: 'var(--muted)',
                        }}>
                            {label}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Marquee */}
            <div style={{
                overflow: 'hidden',
                borderBottom: '1px solid var(--border)',
                padding: '18px 0',
                background: 'var(--surf)',
            }}>
                <motion.div
                    animate={{ x: ['0%', '-33.33%'] }}
                    transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
                    style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}
                >
                    {[...Array(3)].map((_, k) => (
                        <span
                            key={k}
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'clamp(11px, 1.5vw, 15px)',
                                fontWeight: 500, letterSpacing: '0.38em',
                                textTransform: 'uppercase',
                                color: 'rgba(28,25,23,0.18)',
                                paddingRight: '2em',
                            }}
                        >
                            {MARQUEE_TEXT}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
