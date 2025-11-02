'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';
import { motion } from 'motion/react';

const createSeededRandom = (seed) => {
    let value = seed;
    return () => {
        value |= 0;
        value = (value + 0x6d2b79f5) | 0;
        let t = Math.imul(value ^ (value >>> 15), 1 | value);
        t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
};

const RenderBackground = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const starsRef = useRef([]);
    const sizeRef = useRef({ width: 0, height: 0 });

    const gradientLayers = useMemo(() => ([
        {
            id: 'layer-1',
            style: { top: '-20%', left: '-10%', width: '55vw', height: '55vw' },
            from: 'rgba(59, 130, 246, 0.35)',
            via: 'rgba(125, 211, 252, 0.25)',
            to: 'rgba(14, 165, 233, 0.05)',
            duration: 20
        },
        {
            id: 'layer-2',
            style: { bottom: '-25%', right: '-15%', width: '60vw', height: '60vw' },
            from: 'rgba(147, 51, 234, 0.3)',
            via: 'rgba(236, 72, 153, 0.25)',
            to: 'rgba(59, 130, 246, 0.05)',
            duration: 26
        },
        {
            id: 'layer-3',
            style: { top: '20%', right: '-10%', width: '45vw', height: '45vw' },
            from: 'rgba(56, 189, 248, 0.25)',
            via: 'rgba(168, 85, 247, 0.25)',
            to: 'rgba(59, 130, 246, 0.05)',
            duration: 18
        }
    ]), []);

    const initStars = useCallback((width, height) => {
        const starCount = Math.floor((width + height) / 10);
        const seededRandom = createSeededRandom(42);
        starsRef.current = Array.from({ length: starCount }, () => ({
            x: seededRandom() * width,
            y: seededRandom() * height,
            radius: 0.6 + seededRandom() * 1.5,
            speed: 0.05 + seededRandom() * 0.25,
            drift: seededRandom() * 0.2 - 0.1,
            twinkleSpeed: 1 + seededRandom() * 1.5,
            hue: 190 + seededRandom() * 80,
            phase: seededRandom() * Math.PI * 2
        }));
    }, []);

    const drawAurora = useCallback((ctx, width, height, time) => {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        const ribbonCount = 3;
        for (let i = 0; i < ribbonCount; i++) {
            const offset = i * 0.8;
            const baseY = height * (0.28 + i * 0.12);
            const amplitude = height * (0.08 + i * 0.02);
            const gradient = ctx.createLinearGradient(0, baseY - amplitude, width, baseY + amplitude);

            gradient.addColorStop(0, 'rgba(15, 118, 255, 0)');
            gradient.addColorStop(0.45, `rgba(${70 + i * 30}, ${150 + i * 35}, 255, 0.16)`);
            gradient.addColorStop(0.55, `rgba(${120 + i * 20}, ${80 + i * 40}, 255, 0.12)`);
            gradient.addColorStop(1, 'rgba(22, 78, 214, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(0, baseY);

            for (let x = 0; x <= width; x += width / 20) {
                const wave = Math.sin((x / width) * Math.PI * 2 + time * (0.4 + offset)) * amplitude;
                const turbulence = Math.sin(time * 0.5 + x * 0.005 + offset) * amplitude * 0.3;
                ctx.lineTo(x, baseY + wave + turbulence);
            }

            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fill();
        }

        ctx.restore();
    }, []);

    const renderFrame = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const { width, height } = sizeRef.current;

        ctx.clearRect(0, 0, width, height);

        const deepGradient = ctx.createRadialGradient(
            width * 0.5,
            height * 0.4,
            width * 0.2,
            width * 0.5,
            height * 0.5,
            Math.max(width, height)
        );
        deepGradient.addColorStop(0, 'rgba(2, 6, 23, 0.9)');
        deepGradient.addColorStop(0.7, 'rgba(6, 10, 34, 0.85)');
        deepGradient.addColorStop(1, 'rgba(3, 7, 18, 0.95)');
        ctx.fillStyle = deepGradient;
        ctx.fillRect(0, 0, width, height);

        const time = performance.now() * 0.0015;
        drawAurora(ctx, width, height, time);

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        starsRef.current.forEach((star) => {
            star.y += star.speed;
            star.x += star.drift;

            if (star.y > height + 10) star.y = -10;
            if (star.y < -10) star.y = height + 10;
            if (star.x > width + 10) star.x = -10;
            if (star.x < -10) star.x = width + 10;

            const twinkle = 0.6 + Math.sin(time * star.twinkleSpeed + star.phase) * 0.4;
            const radius = star.radius * (0.8 + twinkle * 0.4);
            const alpha = 0.3 + twinkle * 0.5;

            ctx.beginPath();
            ctx.fillStyle = `hsla(${star.hue}, 90%, 75%, ${alpha})`;
            ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.restore();

        animationRef.current = requestAnimationFrame(renderFrame);
    }, [drawAurora]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            const ratio = window.devicePixelRatio || 1;
            const width = window.innerWidth;
            const height = window.innerHeight;
            sizeRef.current = { width, height };

            canvas.width = Math.round(width * ratio);
            canvas.height = Math.round(height * ratio);

            const ctx = canvas.getContext('2d');
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

            initStars(width, height);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        animationRef.current = requestAnimationFrame(renderFrame);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [initStars, renderFrame]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_60%,_#01030b_100%)]" />

            {gradientLayers.map((layer) => (
                <motion.div
                    key={layer.id}
                    className="absolute rounded-full blur-[140px]"
                    style={{
                        ...layer.style,
                        background: `linear-gradient(135deg, ${layer.from}, ${layer.via}, ${layer.to})`
                    }}
                    initial={{ opacity: 0.45, scale: 0.8, rotate: 0 }}
                    animate={{ opacity: 0.75, scale: 1.1, rotate: 360 }}
                    transition={{ duration: layer.duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                />
            ))}

            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
                        linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px),
                        linear-gradient(0deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '72px 72px'
                }}
            />

            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-80 mix-blend-screen"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
        </div>
    );
};

export default RenderBackground;
