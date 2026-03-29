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
                    border: '1.5px solid var(--accent)',
                    pointerEvents: 'none',
                    x: ringX, y: ringY,
                    translateX: '-50%', translateY: '-50%',
                }}
                animate={{
                    width:   hovered ? 28 : 20,
                    height:  hovered ? 28 : 20,
                    opacity: hovered ? 0.7 : 0.25,
                    scale:   clicking ? 0.7 : 1,
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            />

            {/* Inner dot */}
            <motion.div
                style={{
                    position: 'fixed', zIndex: 9999,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    pointerEvents: 'none',
                    x, y,
                    translateX: '-50%', translateY: '-50%',
                }}
                animate={{
                    width:   clicking ? 6 : hovered ? 4 : 5,
                    height:  clicking ? 6 : hovered ? 4 : 5,
                    opacity: hovered ? 0.5 : 1,
                    scale:   clicking ? 0.7 : 1,
                }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
            />
        </>
    );
}
