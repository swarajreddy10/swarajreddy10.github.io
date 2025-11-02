'use client';

import { useEffect, useRef, useState } from 'react';

const InteractivePixelBackground = () => {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const pixelsRef = useRef([]);
    const animationRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initPixels();
        };

        const initPixels = () => {
            pixelsRef.current = [];
            const pixelSize = 20;
            const cols = Math.ceil(canvas.width / pixelSize);
            const rows = Math.ceil(canvas.height / pixelSize);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    pixelsRef.current.push({
                        x: i * pixelSize,
                        y: j * pixelSize,
                        size: pixelSize,
                        opacity: 0,
                        targetOpacity: 0,
                        color: `hsl(${220 + Math.random() * 60}, 70%, 50%)`
                    });
                }
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            pixelsRef.current.forEach(pixel => {
                const distance = Math.sqrt(
                    Math.pow(mousePos.x - (pixel.x + pixel.size / 2), 2) +
                    Math.pow(mousePos.y - (pixel.y + pixel.size / 2), 2)
                );

                const maxDistance = 150;
                if (distance < maxDistance) {
                    pixel.targetOpacity = (1 - distance / maxDistance) * 0.8;
                } else {
                    pixel.targetOpacity = 0;
                }

                pixel.opacity += (pixel.targetOpacity - pixel.opacity) * 0.1;

                if (pixel.opacity > 0.01) {
                    ctx.fillStyle = pixel.color.replace('50%', `50%, ${pixel.opacity})`).replace('hsl', 'hsla');
                    ctx.fillRect(pixel.x, pixel.y, pixel.size - 1, pixel.size - 1);
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [mousePos.x, mousePos.y]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
        />
    );
};

export default InteractivePixelBackground;