'use client';

import { assets } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const TerminalText = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }
        }, delay + currentIndex * 50);

        return () => clearTimeout(timer);
    }, [currentIndex, text, delay]);

    return (
        <span>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
            />
        </span>
    );
};

const FuturisticHeader = ({ isDarkMode }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className='animate-pulse text-2xl'>Loading...</div>
            </div>
        );
    }

    return (
        <div id="home" className='min-h-screen flex items-center justify-center relative overflow-hidden'>
            {/* Terminal Window */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}
                className='w-full max-w-4xl mx-auto p-4 sm:p-6 relative z-20'
            >
                {/* Terminal Header */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className='bg-gray-800/90 backdrop-blur-xl rounded-t-2xl p-4 border border-gray-700/50'
                >
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                        <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                        <span className='ml-4 text-gray-400 text-sm font-mono'>swaraj@portfolio:~$</span>
                    </div>
                </motion.div>

                {/* Terminal Content */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='bg-black/90 backdrop-blur-xl rounded-b-2xl p-4 sm:p-8 border-x border-b border-gray-700/50 font-mono text-green-400'
                >
                    <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <span className='text-blue-400'>$</span>
                            <TerminalText text="whoami" delay={500} />
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className='pl-4'
                        >
                            <div className='text-white text-xl sm:text-2xl md:text-4xl font-bold mb-2'>
                                Swaraj Reddy
                            </div>
                            <div className='text-gray-400 text-sm sm:text-base'>Computer Science Graduate | Full Stack Developer</div>
                        </motion.div>

                        <div className='flex items-center gap-2 mt-6'>
                            <span className='text-blue-400'>$</span>
                            <TerminalText text="cat skills.txt" delay={3000} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5 }}
                            className='pl-4 space-y-2'
                        >
                            <div className='flex flex-wrap gap-2'>
                                {['Java', 'Python', 'React', 'Next.js', 'AWS', 'Docker'].map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 5.5 + index * 0.2 }}
                                        className='px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/30'
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <div className='flex items-center gap-2 mt-6'>
                            <span className='text-blue-400'>$</span>
                            <TerminalText text="ls projects/" delay={7000} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 8.5 }}
                            className='pl-4 grid grid-cols-2 gap-2 text-sm'
                        >
                            <div className='text-yellow-400'>employee-management/</div>
                            <div className='text-yellow-400'>echo-ai-rag/</div>
                            <div className='text-yellow-400'>crop-disease-detection/</div>
                            <div className='text-yellow-400'>portfolio-website/</div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 9 }}
                    className='flex flex-col sm:flex-row gap-4 mt-8 justify-center'
                >
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className='px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center gap-3 justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base'
                    >
                        <span>Initialize Contact</span>
                        <span className='text-lg'>→</span>
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                        whileTap={{ scale: 0.95 }}
                        href="#work"
                        className='px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold flex items-center gap-3 justify-center hover:text-blue-400 transition-all duration-300 text-sm sm:text-base'
                    >
                        <span>View Projects</span>
                        <span className='text-lg'>📁</span>
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Floating Profile Image */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 1, type: 'spring' }}
                className='absolute top-8 right-8 z-30 hidden lg:block'
            >
                <motion.div
                    animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className='relative'
                >
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-75'></div>
                    <Image 
                        src={assets.profile_img} 
                        alt='Swaraj Reddy' 
                        className='w-32 h-32 rounded-full border-4 border-white/20 relative z-10 shadow-2xl'
                    />
                </motion.div>
            </motion.div>

            {/* Code Rain Effect */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-10'>
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ 
                            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 800,
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        className='absolute text-green-500 font-mono text-sm'
                        style={{ 
                            left: `${Math.random() * 100}%`,
                        }}
                    >
                        {Math.random().toString(36).substring(7)}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FuturisticHeader;