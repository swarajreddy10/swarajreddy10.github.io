'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
    useEffect(() => {
        // Touch/coarse devices already have great native momentum scroll.
        // Running Lenis on top of it causes jank — skip it.
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const lenis = new Lenis({
            lerp: 0.1,          // 0 = instant, 1 = never reaches target. 0.1 = buttery
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

    return children;
}
