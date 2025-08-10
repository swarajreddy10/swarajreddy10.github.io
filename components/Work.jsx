'use client';

import { assets, workData } from '@/assets/assets';
import { motion } from "framer-motion";
import Image from 'next/image';

const Work = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[12%] py-16 sm:py-20 md:py-24 scroll-mt-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10'>

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-center mb-8'
            >
                <span className='inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 mb-4'>
                    🚀 My Portfolio
                </span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                    Featured Projects
                </span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className='text-center max-w-3xl mx-auto mt-5 mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 tracking-normal'>
                Explore my recent projects that combine the power of{' '}
                <span className='font-semibold text-blue-600 dark:text-blue-400'>cloud architecture</span>,{' '}
                <span className='font-semibold text-indigo-600 dark:text-indigo-400'>full-stack engineering</span>, and{' '}
                <span className='font-semibold text-purple-600 dark:text-purple-400'>intelligent automation</span>.{' '}
                Each solution reflects my passion for creating{' '}
                <span className='font-bold text-gray-800 dark:text-white'>scalable, user-centric, and impactful applications</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 my-8 sm:my-12 max-w-6xl mx-auto'>
                {workData.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1 + index * 0.15 }}
                        key={index}
                        className='group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700'
                    >
                        {/* Project Image Container */}
                        <div className='relative h-64 sm:h-72 overflow-hidden'>
                            <div 
                                className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110'
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                            ></div>
                            
                            {/* Overlay gradient */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500'></div>
                            
                            {/* Category Badge */}
                            <div className='absolute top-4 left-4'>
                                <span className='inline-flex items-center px-3 py-1.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 dark:text-gray-200 border border-white/20 dark:border-gray-700/30'>
                                    {project.description}
                                </span>
                            </div>
                            
                            {/* External Link Indicator */}
                            <div className='absolute top-4 right-4'>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className='w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300'
                                >
                                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                                    </svg>
                                </motion.div>
                            </div>
                        </div>
                        
                        {/* Project Content */}
                        <div className='p-6 sm:p-8'>
                            <div className='flex items-start justify-between gap-4 mb-4'>
                                <div className='flex-1'>
                                    <h3 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight'>
                                        {project.title.replace('🔗', '')}
                                    </h3>
                                    
                                    {/* Tech Stack Tags */}
                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {project.description === 'Deep Learning / AI' && (
                                            <>
                                                <span className='px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full'>TensorFlow</span>
                                                <span className='px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full'>Python</span>
                                                <span className='px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full'>CNN</span>
                                            </>
                                        )}
                                        {project.description === 'Web Dev' && (
                                            <>
                                                <span className='px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full'>React</span>
                                                <span className='px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full'>Next.js</span>
                                                <span className='px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full'>Tailwind</span>
                                            </>
                                        )}
                                        {project.description === 'AI / ML' && (
                                            <>
                                                <span className='px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium rounded-full'>Scikit-learn</span>
                                                <span className='px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-medium rounded-full'>LSTM</span>
                                                <span className='px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-medium rounded-full'>Pandas</span>
                                            </>
                                        )}
                                        {project.description === 'Generative AI' && (
                                            <>
                                                <span className='px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full'>RAG</span>
                                                <span className='px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs font-medium rounded-full'>LLM</span>
                                                <span className='px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-medium rounded-full'>Vector DB</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Project Description */}
                            <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6'>
                                {project.title.includes('Crop Disease') && 'Advanced deep learning model using CNNs for accurate crop disease detection and classification with real-time image processing capabilities.'}
                                {project.title.includes('Portfolio') && 'Modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode, animations, and optimized performance.'}
                                {project.title.includes('Stock Price') && 'Machine learning model using LSTM networks for stock price prediction with technical analysis and market sentiment integration.'}
                                {project.title.includes('RAG Web') && 'Retrieval-Augmented Generation web application leveraging LLMs and vector databases for intelligent document-based responses.'}
                            </p>
                            
                            {/* Action Buttons */}
                            <div className='flex items-center gap-3'>
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl'
                                >
                                    <span>View Project</span>
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                                    </svg>
                                </motion.a>
                                
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 group/btn'
                                >
                                    <svg className='w-5 h-5 text-gray-600 dark:text-gray-400 group-hover/btn:text-gray-800 dark:group-hover/btn:text-gray-200 transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                        
                        {/* Hover Border Effect */}
                        <div className='absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-3xl transition-all duration-500 pointer-events-none'></div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className='flex justify-center mt-12 sm:mt-16'
            >
                <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://github.com/swarajreddy10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 overflow-hidden'
                >
                    <span className='absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                    <span className='relative z-10'>Explore All Projects</span>
                    <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                        className='relative z-10'
                    >
                        <Image src={assets.right_arrow_bold} alt='GitHub arrow' className='w-4 filter invert' />
                    </motion.div>
                </motion.a>
            </motion.div>

            {/* Project Statistics */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto'
            >
                {[
                    { number: '4+', label: 'Projects Completed', icon: '🚀' },
                    { number: '3', label: 'Tech Domains', icon: '💻' },
                    { number: '100%', label: 'GitHub Public', icon: '📖' },
                    { number: '2024', label: 'Latest Update', icon: '⚡' }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className='text-center p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300'
                    >
                        <div className='text-2xl sm:text-3xl mb-2'>{stat.icon}</div>
                        <div className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1'>{stat.number}</div>
                        <div className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium'>{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    );
};

export default Work;
