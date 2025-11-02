'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const Background3D = ({ isDarkMode }) => {
    const [particles, setParticles] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const newParticles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 2,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 5
        }));
        setParticles(newParticles);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Dynamic Gradient Background */}
            <motion.div 
                animate={{
                    background: isDarkMode 
                        ? [
                            'radial-gradient(circle at 20% 50%, #1e3a8a 0%, #000000 50%)',
                            'radial-gradient(circle at 80% 20%, #7c3aed 0%, #000000 50%)',
                            'radial-gradient(circle at 40% 80%, #1e40af 0%, #000000 50%)'
                        ]
                        : [
                            'radial-gradient(circle at 20% 50%, #dbeafe 0%, #f8fafc 50%)',
                            'radial-gradient(circle at 80% 20%, #e0e7ff 0%, #f8fafc 50%)',
                            'radial-gradient(circle at 40% 80%, #ddd6fe 0%, #f8fafc 50%)'
                        ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
            />
            
            {/* Floating Geometric Shapes */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={`absolute ${
                        isDarkMode 
                            ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-blue-500/30' 
                            : 'bg-gradient-to-br from-blue-200/40 to-purple-200/40 border border-blue-300/50'
                    } backdrop-blur-sm`}
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        borderRadius: Math.random() > 0.5 ? '50%' : '4px'
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        rotate: [0, 180, 360],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: particle.delay
                    }}
                />
            ))}
            
            {/* Animated Grid */}
            <motion.div 
                animate={{
                    opacity: [0.05, 0.15, 0.05]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
                className={`absolute inset-0 ${
                    isDarkMode ? 'opacity-10' : 'opacity-5'
                }`} 
                style={{
                    backgroundImage: `
                        linear-gradient(${isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(99, 102, 241, 0.2)'} 1px, transparent 1px),
                        linear-gradient(90deg, ${isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(99, 102, 241, 0.2)'} 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }} 
            />
            
            {/* Scanning Lines */}
            <motion.div
                animate={{
                    x: ['-100%', '100vw']
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                }}
                className={`absolute top-0 w-1 h-full ${
                    isDarkMode 
                        ? 'bg-gradient-to-b from-transparent via-blue-400/50 to-transparent'
                        : 'bg-gradient-to-b from-transparent via-blue-600/30 to-transparent'
                } blur-sm`}
            />
        </div>
    );
};

export default Background3D;