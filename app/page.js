'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import Preloader from '../components/Preloader';

const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false });

export default function Home() {
    const [ready, setReady] = useState(false);

    return (
        <>
            <Preloader onDone={() => setReady(true)} />

            <SmoothScroll>
                <Cursor />
                <Nav />
                <main
                    className="min-h-screen bg-[#09080A]"
                    style={{
                        opacity: ready ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: ready ? 'auto' : 'none',
                    }}
                >
                    <Hero />
                    <About />
                    <Projects />
                    <Skills />
                    <Contact />
                    <Footer />
                </main>
            </SmoothScroll>
        </>
    );
}
