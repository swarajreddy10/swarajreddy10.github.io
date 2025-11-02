'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const FuturisticNav = ({ isDarkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home', icon: '🏠' },
        { name: 'About', href: '#about', icon: '👨‍💻' },
        { name: 'Projects', href: '#work', icon: '🚀' },
        { name: 'Contact', href: '#contact', icon: '📧' }
    ];

    const scrollToSection = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    if (isMobile) {
        return (
            <>
                {/* Mobile Hamburger Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed top-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className="w-6 h-6 flex flex-col justify-center items-center"
                    >
                        <motion.span
                            animate={{
                                rotate: isOpen ? 45 : 0,
                                y: isOpen ? 2 : -2
                            }}
                            className="w-4 h-0.5 bg-white mb-1 rounded"
                        />
                        <motion.span
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            className="w-4 h-0.5 bg-white mb-1 rounded"
                        />
                        <motion.span
                            animate={{
                                rotate: isOpen ? -45 : 0,
                                y: isOpen ? -2 : 2
                            }}
                            className="w-4 h-0.5 bg-white rounded"
                        />
                    </motion.div>
                </motion.button>

                {/* Mobile Side Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl z-45 border-l border-blue-500/30"
                            >
                                <div className="p-8 pt-20">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                                    >
                                        Navigation
                                    </motion.h2>
                                    
                                    <nav className="space-y-4">
                                        {navItems.map((item, index) => (
                                            <motion.button
                                                key={item.name}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ x: 10, scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => scrollToSection(item.href)}
                                                className="w-full flex items-center gap-4 p-4 text-left text-white hover:bg-blue-600/20 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-500/30"
                                            >
                                                <span className="text-2xl">{item.icon}</span>
                                                <span className="text-lg font-medium">{item.name}</span>
                                            </motion.button>
                                        ))}
                                    </nav>

                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={toggleTheme}
                                        className="mt-8 w-full flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-medium"
                                    >
                                        <Image 
                                            src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                                            alt="theme" 
                                            className="w-6 h-6" 
                                        />
                                        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </>
        );
    }

    // Desktop Navigation
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-40 bg-white/10 dark:bg-black/10 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                    Swaraj.dev
                </motion.div>

                <div className="flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -2, scale: 1.05 }}
                            onClick={() => scrollToSection(item.href)}
                            className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                            <span>{item.icon}</span>
                            <span>{item.name}</span>
                        </motion.button>
                    ))}

                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                    >
                        <Image 
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                            alt="theme" 
                            className="w-5 h-5 filter invert" 
                        />
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};

export default FuturisticNav;