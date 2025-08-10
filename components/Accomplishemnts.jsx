'use client';

import { serviceData } from '@/assets/assets';
import { motion } from "framer-motion"; // corrected from motion/react
import Image from 'next/image';

const Accomplishemnts = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="Accomplishemnts" className='w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[12%] py-16 sm:py-20 md:py-24 scroll-mt-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-800 dark:via-purple-900/10 dark:to-pink-900/10'>

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-center mb-8'
            >
                <span className='inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-sm font-semibold text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700 mb-4'>
                    🏆 My Expertise
                </span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent'>
                    Core Achievements
                </span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className='text-center max-w-3xl mx-auto mt-5 mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 tracking-normal'>
                I am a{' '}
                <span className='font-bold text-gray-800 dark:text-white'>Computer Science Graduate</span>{' '}
                from{' '}
                <span className='font-semibold text-purple-600 dark:text-purple-400'>GITAM University</span>{' '}
                with hands-on experience in{' '}
                <span className='font-medium text-blue-600 dark:text-blue-400'>cloud computing</span>,{' '}
                <span className='font-medium text-green-600 dark:text-green-400'>full-stack web development</span>, and{' '}
                <span className='font-medium text-pink-600 dark:text-pink-400'>AI-powered applications</span>.{' '}
                I have successfully built scalable, secure, and intelligent solutions using technologies like{' '}
                <span className='font-semibold text-orange-600 dark:text-orange-400'>AWS</span>,{' '}
                <span className='font-semibold text-blue-600 dark:text-blue-400'>React.js</span>, and{' '}
                <span className='font-semibold text-purple-600 dark:text-purple-400'>Generative AI</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 my-8 sm:my-12'>
                {serviceData.map(({ icon, title, description }, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                        key={index}
                        className='group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-8 sm:p-10 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden'>
                        
                        {/* Gradient background overlay */}
                        <div className='absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        
                        {/* Floating gradient orb */}
                        <div className='absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500'></div>
                        
                        <div className='relative z-10'>
                            {/* Icon container */}
                            <div className='w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                                <Image src={icon} alt={title} className='w-8 h-8' />
                            </div>
                            
                            {/* Title */}
                            <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300'>
                                {title}
                            </h3>
                            
                            {/* Description */}
                            <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed'>
                                {description}
                            </p>
                            
                            {/* Decorative arrow */}
                            <div className='mt-6 flex items-center text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2'>
                                <span className='text-sm font-semibold mr-2'>Learn more</span>
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Accomplishemnts;
