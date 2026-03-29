'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const STIFFNESS = 520;
const DAMPING   = 40;

export default function Cursor() {
    const rawX = useMotionValue(-300);
    const rawY = useMotionValue(-300);

    const x = useSpring(rawX, { stiffness: STIFFNESS, damping: DAMPING });
    const y = useSpring(rawY, { stiffness: STIFFNESS, damping: DAMPING });

    // Slower trailing ring
    const ringX = useSpring(rawX, { stiffness: 140, damping: 22 });
    const ringY = useSpring(rawY, { stiffness: 140, damping: 22 });

    const [visible,  setVisible]  = useState(false);
    const [hovered,  setHovered]  = useState(false);
    const [clicking, setClicking] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        // Only show custom cursor on pointer devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const onMove = (e) => {
            rawX.set(e.clientX);
            rawY.set(e.clientY);
            if (!visible) setVisible(true);
        };

        const onOver = (e) => {
            const el = e.target.closest('a, button, [data-cursor]');
            setHovered(!!el);
        };

        const onDown = () => setClicking(true);
        const onUp   = () => setClicking(false);

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseover', onOver);
        document.addEventListener('mousedown', onDown);
        document.addEventListener('mouseup', onUp);

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('mouseup', onUp);
        };
    }, [rawX, rawY, visible]);

    if (!visible) return null;

    return (
        <>
            {/* Trailing ring — lags behind on hover */}
            <motion.div
                style={{
                    position: 'fixed', zIndex: 9998,
                    borderRadius: '50%',
                    border: '1px solid rgba(6,71,52,0.45)',
                    pointerEvents: 'none',
                    x: ringX, y: ringY,
                    translateX: '-50%', translateY: '-50%',
                }}
                animate={{
                    width:   hovered ? 44 : 0,
                    height:  hovered ? 44 : 0,
                    opacity: hovered ? 1  : 0,
                    scale:   clicking ? 0.85 : 1,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
            />

            {/* Inner dot */}
            <motion.div
                style={{
                    position: 'fixed', zIndex: 9999,
                    borderRadius: '50%',
                    background: 'var(--fg)',
                    pointerEvents: 'none',
                    x, y,
                    translateX: '-50%', translateY: '-50%',
                    mixBlendMode: 'difference',
                }}
                animate={{
                    width:   clicking ? 10 : hovered ? 5 : 8,
                    height:  clicking ? 10 : hovered ? 5 : 8,
                    opacity: hovered ? 0.7 : 0.9,
                    scale:   clicking ? 0.8 : 1,
                }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
            />
        </>
    );
}
