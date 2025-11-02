'use client';

import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Briefcase, Zap, Mail } from 'lucide-react';

const navItems = [
    { icon: Home, label: 'HOME' },
    { icon: User, label: 'ABOUT' },
    { icon: Briefcase, label: 'WORK' },
    { icon: Zap, label: 'SKILLS' },
    { icon: Mail, label: 'CONTACT' }
];

const ResponsiveNavigation = memo(({ currentSlide, goToSlide, total }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY < lastScrollY || currentScrollY < 20) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 20) {
                setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('resize', checkScreenSize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleNavClick = (index) => {
        goToSlide(index);
        setIsMenuOpen(false);
    };

    if (isMobile) {
        return (
            <>
                {/* Mobile Hamburger Button */}
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="fixed top-6 right-6 z-[100] w-12 h-12 bg-black/80 backdrop-blur-sm rounded-lg border border-gray-700 flex items-center justify-center"
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="w-5 h-4 flex flex-col justify-between">
                        <motion.span
                            className="w-full h-0.5 bg-white"
                            animate={{
                                rotate: isMenuOpen ? 45 : 0,
                                y: isMenuOpen ? 6 : 0
                            }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="w-full h-0.5 bg-white"
                            animate={{ opacity: isMenuOpen ? 0 : 1 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="w-full h-0.5 bg-white"
                            animate={{
                                rotate: isMenuOpen ? -45 : 0,
                                y: isMenuOpen ? -6 : 0
                            }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                </motion.button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[90] bg-black/20"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <motion.nav
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="absolute right-4 top-4 w-64 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_25px_60px_rgba(15,23,42,0.45)]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex flex-col p-4">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => handleNavClick(index)}
                                            className={`mb-3 flex items-center gap-4 rounded-2xl border border-transparent p-4 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-200 ${
                                                currentSlide === index
                                                    ? 'border-blue-400/60 bg-blue-500/20 text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)]'
                                                    : 'text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white'
                                            }`}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <item.icon size={20} />
                                            <span className="font-medium">{item.label}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.nav>
                        </motion.div>
                    )}
                </AnimatePresence>


            </>
        );
    }

    // Desktop Navigation
    return (
        <>
            <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
                <motion.nav 
                    className="relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 shadow-[0_20px_45px_rgba(15,23,42,0.45)] backdrop-blur-xl"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ 
                        y: isVisible ? 0 : -100, 
                        opacity: isVisible ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <div className="flex items-center justify-center gap-1">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-200 ${
                                    currentSlide === index
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)]'
                                        : 'text-slate-200 hover:bg-white/10 hover:text-white'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <item.icon size={16} className="hidden md:inline-block" />
                                <span className="hidden md:inline-block">{item.label}</span>
                                <span className="md:hidden">{item.label.charAt(0)}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.nav>
            </div>


        </>
    );
});

export default ResponsiveNavigation;
