'use client';

import { memo, useEffect } from 'react';
import { motion } from 'motion/react';
import { useSlider } from '../hooks/useSlider';
import ResponsiveNavigation from './ResponsiveNavigation';

import dynamic from 'next/dynamic';

const sections = [
    { id: 'home', label: 'Home', component: dynamic(() => import('./EnhancedHome'), { ssr: false }) },
    { id: 'about', label: 'About', component: dynamic(() => import('./CleanAbout'), { ssr: false }) },
    { id: 'projects', label: 'Projects', component: dynamic(() => import('./ScrollableWork'), { ssr: false }) },
    { id: 'skills', label: 'Skills', component: dynamic(() => import('./ScrollableSkills'), { ssr: false }) },
    { id: 'contact', label: 'Contact', component: dynamic(() => import('./FuturisticContact'), { ssr: false }) }
];

const SlideContainer = memo(({ children, currentSlide }) => (
    <motion.div
        className='flex'
        animate={{ x: `-${currentSlide * 100}vw` }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ width: `${sections.length * 100}vw` }}
    >
        {children}
    </motion.div>
));

const Section = memo(({ section, index, currentSlide }) => {
    const shouldRender = Math.abs(currentSlide - index) <= 1;
    
    if (!shouldRender) {
        return <section id={section.id} className='w-screen flex-shrink-0' />;
    }

    const Component = section.component;
    const isHome = index === 0;
    
    return (
        <section 
            id={section.id}
            className={`w-screen flex-shrink-0 ${isHome ? 'min-h-screen' : ''}`}
            aria-label={section.label}
        >
            <div
                className={`px-4 sm:px-8 lg:px-12 xl:px-[5.5rem] ${isHome ? 'flex min-h-screen flex-col pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-24 lg:pb-16' : 'flex flex-col pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12'}`}
            >
                <div className={`mx-auto w-full max-w-6xl ${isHome ? 'flex-1' : ''}`}>
                    <Component />
                </div>
            </div>
        </section>
    );
});



const Portfolio = memo(() => {
    const { currentSlide, goToSlide } = useSlider(sections.length);

    useEffect(() => {
        const handleNavigate = (event) => {
            const detail = event.detail ?? {};

            if (typeof detail.index === 'number') {
                const boundedIndex = Math.min(Math.max(detail.index, 0), sections.length - 1);
                goToSlide(boundedIndex);
                return;
            }

            if (detail.id) {
                const targetIndex = sections.findIndex((section) => section.id === detail.id);
                if (targetIndex !== -1) {
                    goToSlide(targetIndex);
                }
            }
        };

        window.addEventListener('slider:navigate', handleNavigate);
        return () => window.removeEventListener('slider:navigate', handleNavigate);
    }, [goToSlide]);

    return (
        <main className='min-h-screen overflow-x-hidden' role='main'>
            <ResponsiveNavigation 
                currentSlide={currentSlide} 
                goToSlide={goToSlide} 
                total={sections.length}
                sections={sections}
            />
            
            <SlideContainer currentSlide={currentSlide}>
                {sections.map((section, index) => (
                    <Section
                        key={section.id}
                        section={section}
                        index={index}
                        currentSlide={currentSlide}
                    />
                ))}
            </SlideContainer>
        </main>
    );
});

export default Portfolio;
