'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const FuturisticHeader = dynamic(() => import('./FuturisticHeader'), { ssr: false });
const UniqueAbout = dynamic(() => import('./UniqueAbout'), { ssr: false });
const FuturisticWork = dynamic(() => import('./FuturisticWork'), { ssr: false });
const UniqueAchievements = dynamic(() => import('./UniqueAchievements'), { ssr: false });
const UniqueContact = dynamic(() => import('./UniqueContact'), { ssr: false });
const SlideNavigation = dynamic(() => import('./SlideNavigation'), { ssr: false });

const SlidingGallery = ({ isDarkMode, toggleTheme }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (isMobile) return;
            
            if (e.key === 'ArrowRight' && currentPage < pages.length - 1) {
                handlePageChange(currentPage + 1);
            } else if (e.key === 'ArrowLeft' && currentPage > 0) {
                handlePageChange(currentPage - 1);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentPage, isMobile]);

    const handlePageChange = (newPage) => {
        if (newPage === currentPage) return;
        setCurrentPage(newPage);
    };

    const pages = [
        { component: FuturisticHeader, props: { isDarkMode } },
        { component: UniqueAbout, props: {} },
        { component: FuturisticWork, props: { isDarkMode } },
        { component: UniqueAchievements, props: {} },
        { component: UniqueContact, props: {} }
    ];

    // Mobile: Scroll-based layout
    if (isMobile) {
        return (
            <div className='relative'>
                <SlideNavigation 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage} 
                    isMobile={true} 
                />
                
                <div className='space-y-0'>
                    {pages.map(({ component: Component, props }, index) => (
                        <div key={index} id={`section-${index}`}>
                            <Component {...props} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Desktop: Sliding gallery
    return (
        <div className='relative h-screen overflow-hidden'>
            <SlideNavigation 
                currentPage={currentPage} 
                setCurrentPage={handlePageChange} 
                isMobile={false} 
            />

            {/* Page Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2'
            >
                {pages.map((_, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => handlePageChange(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentPage === index 
                                ? 'bg-white shadow-lg shadow-white/50' 
                                : 'bg-white/30 hover:bg-white/50'
                        }`}
                    />
                ))}
            </motion.div>

            {/* Sliding Container */}
            <motion.div
                animate={{ x: `-${currentPage * 100}vw` }}
                transition={{ 
                    duration: 0.6,
                    ease: 'easeInOut'
                }}
                className='flex h-full'
                style={{ width: `${pages.length * 100}vw` }}
            >
                {pages.map(({ component: Component, props }, index) => (
                    <div 
                        key={index} 
                        className='w-screen h-full flex-shrink-0'
                    >
                        <Component {...props} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SlidingGallery;