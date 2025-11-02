import { useState, useCallback, useEffect } from 'react';

export const useSlider = (totalSlides = 5) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const goToSlide = useCallback((index) => {
        if (index >= 0 && index < totalSlides) {
            setCurrentSlide(index);
        }
    }, [totalSlides]);

    const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
    const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        const handleKeyPress = (e) => {
            if (isMobile) return;
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        window.addEventListener('keydown', handleKeyPress);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isMobile, nextSlide, prevSlide]);

    return { currentSlide, goToSlide, nextSlide, prevSlide, isMobile };
};