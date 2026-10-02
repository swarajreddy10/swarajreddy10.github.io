'use client';

import { useEffect, useRef, useState } from 'react';
import { NAV_LINKS } from '../assets/site';

export default function Nav() {
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const toggleRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observers = NAV_LINKS.map(({ id }) => {
            const element = document.getElementById(id);
            if (!element) return null;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveId(id);
                },
                { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
            );
            observer.observe(element);
            return observer;
        }).filter(Boolean);

        return () => observers.forEach(observer => observer.disconnect());
    }, []);

    useEffect(() => {
        if (!open) return undefined;
        menuRef.current?.querySelector('a')?.focus();
        const onKeyDown = event => {
            if (event.key === 'Escape') {
                setOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open]);

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
                <div className="nav-shell">
                    <a className="brand-link" href="#home" aria-label="Swaraj Reddy, back to top">
                        Swaraj Reddy
                    </a>

                    <nav className="desktop-nav" aria-label="Primary navigation">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.id}
                                href={link.href}
                                aria-current={activeId === link.id ? 'location' : undefined}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        ref={toggleRef}
                        className="menu-toggle"
                        type="button"
                        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={open}
                        aria-controls="mobile-navigation"
                        onClick={() => setOpen(value => !value)}
                    >
                        <span className={open ? 'is-open' : ''} />
                        <span className={open ? 'is-open' : ''} />
                        <span className={open ? 'is-open' : ''} />
                    </button>
                </div>

                {open && (
                    <nav ref={menuRef} id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
                        {NAV_LINKS.map(link => (
                            <a key={link.id} href={link.href} onClick={() => setOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                )}
            </header>
        </>
    );
}