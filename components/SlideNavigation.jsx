'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SlideNavigation = ({ currentPage, setCurrentPage, isMobile }) => {
    const pages = [
        { id: 'home', name: 'HOME', icon: '🏠', theme: 'terminal' },
        { id: 'about', name: 'ABOUT', icon: '👨💻', theme: 'hologram' },
        { id: 'work', name: 'PROJECTS', icon: '🚀', theme: 'matrix' },
        { id: 'achievements', name: 'SKILLS', icon: '⚡', theme: 'circuit' },
        { id: 'contact', name: 'CONTACT', icon: '📡', theme: 'cyber' }
    ];

    if (isMobile) {
        return (
            <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                className='fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3'
            >
                {pages.map((page, index) => (
                    <motion.button
                        key={page.id}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentPage(index)}
                        className={`w-12 h-12 rounded-full border-2 backdrop-blur-xl transition-all duration-300 ${
                            currentPage === index
                                ? 'bg-blue-600 border-blue-400 text-white'
                                : 'bg-black/50 border-gray-600 text-gray-400 hover:border-blue-500'
                        }`}
                    >
                        <span className='text-lg'>{page.icon}</span>
                    </motion.button>
                ))}
            </motion.nav>
        );
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className='fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-2 shadow-2xl'
        >
            <div className='flex items-center gap-2'>
                {pages.map((page, index) => (
                    <motion.button
                        key={page.id}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage(index)}
                        className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                            currentPage === index
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                    >
                        <span>{page.icon}</span>
                        <span className='hidden sm:inline'>{page.name}</span>
                    </motion.button>
                ))}
            </div>
        </motion.nav>
    );
};

export default SlideNavigation;