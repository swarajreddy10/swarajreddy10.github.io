'use client'
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

// Import components with no SSR
const About = dynamic(() => import('../components/About'), { ssr: false });
const Accomplishemnts = dynamic(() => import('../components/Accomplishemnts'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Work = dynamic(() => import('../components/Work'), { ssr: false });

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // This effect runs only on the client side
  useEffect(() => {
    setMounted(true);
    
    // Check for dark mode preference after component mounts
    const isDark = localStorage.theme === 'dark' ||
                  (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDarkMode(isDark);

    // Apply dark mode class to document element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update dark mode when isDarkMode changes
  useEffect(() => {
    if (!mounted) return; // Skip initial render

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode, mounted]);

  // Don't render anything on the server
  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Accomplishemnts isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}
