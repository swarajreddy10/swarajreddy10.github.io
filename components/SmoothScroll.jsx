'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,
            smoothWheel: true,
            wheelMultiplier: 1.0,
            gestureOrientation: 'vertical',
        });

        // Expose globally so Nav/Hero can call lenis.scrollTo()
        window.__lenis = lenis;

        // Feed Lenis scroll events into ScrollTrigger so scroll-driven
        // animations stay in sync with the smoothed position
        lenis.on('scroll', ScrollTrigger.update);

        // Drive Lenis from GSAP's ticker instead of a manual RAF loop.
        // This is the canonical integration from the Lenis + GSAP docs.
        const tick = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tick);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return <div style={{ position: 'relative' }}>{children}</div>;
}
