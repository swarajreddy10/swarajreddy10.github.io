'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            wheelMultiplier: 1.0,
            gestureOrientation: 'vertical',
        });

        let rafId;
        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    // position:relative is required so Lenis can correctly calculate scroll offsets
    return (
        <div style={{ position: 'relative' }}>
            {children}
        </div>
    );
}
