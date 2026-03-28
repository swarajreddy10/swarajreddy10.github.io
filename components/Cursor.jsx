'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function Cursor() {
    const x = useMotionValue(-200);
    const y = useMotionValue(-200);
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);

    const springX = useSpring(x, { stiffness: 480, damping: 38 });
    const springY = useSpring(y, { stiffness: 480, damping: 38 });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const onMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            if (!visible) setVisible(true);
        };

        const onOver = (e) => {
            const el = e.target.closest('a, button, [data-cursor]');
            setHovered(!!el);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseover', onOver);

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
        };
    }, [x, y, visible]);

    if (!visible) return null;

    return (
        <>
            {/* Outer ring — expands on hover */}
            <motion.div
                className="pointer-events-none fixed z-[9999] rounded-full border"
                style={{
                    x: springX, y: springY,
                    translateX: '-50%', translateY: '-50%',
                    borderColor: 'rgba(200,98,42,0.5)',
                }}
                animate={{
                    width:   hovered ? 38 : 0,
                    height:  hovered ? 38 : 0,
                    opacity: hovered ? 1  : 0,
                }}
                transition={{ duration: 0.2 }}
            />
            {/* Inner solid dot */}
            <motion.div
                className="pointer-events-none fixed z-[9999] rounded-full"
                style={{
                    x: springX, y: springY,
                    translateX: '-50%', translateY: '-50%',
                    background: '#F2EDE8',
                }}
                animate={{
                    width:   hovered ? 4 : 7,
                    height:  hovered ? 4 : 7,
                    opacity: hovered ? 0.6 : 0.85,
                }}
                transition={{ duration: 0.15 }}
            />
        </>
    );
}
