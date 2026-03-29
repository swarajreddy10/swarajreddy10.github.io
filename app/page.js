'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Preloader from '../components/Preloader';
import SmoothScroll from '../components/SmoothScroll';

const Cursor       = dynamic(() => import('../components/Cursor'),       { ssr: false });
const About        = dynamic(() => import('../components/About'),        { ssr: false });
const Projects     = dynamic(() => import('../components/Projects'),     { ssr: false });
const Skills       = dynamic(() => import('../components/Skills'),       { ssr: false });
const Certifications = dynamic(() => import('../components/Certifications'), { ssr: false });
const Contact      = dynamic(() => import('../components/Contact'),      { ssr: false });
const Footer       = dynamic(() => import('../components/Footer'),       { ssr: false });

export default function Home() {
    const [ready, setReady] = useState(false);

    return (
        <>
            <Preloader onDone={() => setReady(true)} />

            <SmoothScroll>
                <Cursor />
                <Nav />
                <main style={{
                    minHeight: '100svh',
                    background: 'var(--base)',
                    opacity: ready ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: ready ? 'auto' : 'none',
                }}>
                    <Hero />
                    <About />
                    <Projects />
                    <Skills />
                    <Certifications />
                    <Contact />
                    <Footer />
                </main>
            </SmoothScroll>
        </>
    );
}
