'use client'
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

// Import optimized slider system
const Portfolio = dynamic(() => import('../components/OptimizedSlider'), { ssr: false });
const RenderBackground = dynamic(() => import('../components/RenderBackground'), { ssr: false });

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // This effect runs only on the client side
  useEffect(() => {
    setMounted(true);

    // Force dark mode initially, but allow user preference if set
    const isDark = localStorage.theme === 'light' ? false : true;

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

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <main className="min-h-screen relative overflow-hidden text-white">
      <RenderBackground />
      <div className="relative z-10">
        <Portfolio />
      </div>
    </main>
  );
}
