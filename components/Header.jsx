import { assets } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='w-11/12 max-w-3xl text-center mx-auto py-20 md:py-28 flex flex-col items-center justify-center gap-4'>
        <div className='rounded-full w-32 h-32 bg-gray-200 dark:bg-gray-700 animate-pulse'></div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Welcome! I'm Swaraj Reddy <span className='w-6 h-6 inline-block'></span>
        </h3>
        <h1 className='text-4xl sm:text-7xl lg:text-[45px] font-Ovo opacity-0'>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='w-full bg-white dark:bg-darkTheme'>
      <div id="top" className='w-11/12 max-w-4xl text-center mx-auto pt-16 sm:pt-18 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 flex flex-col items-center justify-center gap-6 relative'>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
        className='mb-6 relative group'
      >
        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300'></div>
        <Image src={assets.profile_img} alt='Swaraj Reddy Profile' className='rounded-full w-28 sm:w-32 md:w-36 mx-auto relative z-10 border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300'/>
      </motion.div>

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className='mb-4'
      >
        <h3 className='flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent tracking-tight'>
          Hey there! I'm Swaraj Reddy
          <motion.div
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <Image src={assets.hand_icon} alt='hand wave' className='w-6 sm:w-7'/>
          </motion.div>
        </h3>
      </motion.div>

      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 px-2'
      >
        <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block tracking-tight'>
          Computer Science Graduate
        </span>
        <br />
        <span className='text-gray-700 dark:text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-normal'>
          based in Hyderabad, India
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className='max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-8 px-4 text-gray-600 dark:text-gray-400 tracking-normal'
      >
        <span className='font-bold text-gray-800 dark:text-gray-200'>Passionate Software Engineer</span>{' '}
        with expertise in{' '}
        <span className='font-semibold text-blue-600 dark:text-blue-400'>Java</span>,{' '}
        <span className='font-semibold text-green-600 dark:text-green-400'>Python</span>,{' '}
        <span className='font-semibold text-cyan-600 dark:text-cyan-400'>React</span>, and{' '}
        <span className='font-semibold text-purple-600 dark:text-purple-400'>Cloud Technologies</span>.{' '}
        Building scalable applications that drive{' '}
        <span className='font-bold text-orange-600 dark:text-orange-400'>business success</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-6'
      >
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className='group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 overflow-hidden'
        >
          <span className='absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
          <span className='relative z-10'>Let's Connect</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            className='relative z-10'
          >
            <Image src={assets.right_arrow_white} alt='' className='w-4'/>
          </motion.div>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="#work"
          className='px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-base hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-3'
        >
          View Projects
          <span className='text-lg'>→</span>
        </motion.a>
      </motion.div>
      </div>
    </div>
  )
}

export default Header
