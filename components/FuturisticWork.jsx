'use client';

import { workData } from '@/assets/assets';
import { motion } from "motion/react";
import { useState } from 'react';

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className='group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500'
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
        >
            {/* Holographic Border Effect */}
            <motion.div
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8
                }}
                className='absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm'
            />

            {/* Project Image */}
            <div className='relative h-48 overflow-hidden'>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className='w-full h-full bg-cover bg-center'
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                />
                
                {/* Overlay with Scan Lines */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent' />
                
                {/* Scanning Effect */}
                <motion.div
                    animate={{
                        x: isHovered ? ['0%', '100%'] : '0%'
                    }}
                    transition={{
                        duration: 2,
                        repeat: isHovered ? Infinity : 0,
                        ease: 'linear'
                    }}
                    className='absolute top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-60'
                />

                {/* Category Badge */}
                <div className='absolute top-4 left-4'>
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        className='px-3 py-1 bg-black/60 backdrop-blur-sm text-blue-400 text-xs font-mono rounded-full border border-blue-500/30'
                    >
                        {project.description}
                    </motion.span>
                </div>

                {/* Status Indicator */}
                <div className='absolute top-4 right-4'>
                    <motion.div
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity 
                        }}
                        className='w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50'
                    />
                </div>
            </div>

            {/* Content */}
            <div className='p-6 relative z-10'>
                <motion.h3
                    whileHover={{ x: 5 }}
                    className='text-xl font-bold text-white mb-3 font-mono'
                >
                    {project.title.replace('🔗', '')}
                </motion.h3>

                {/* Impact Metrics */}
                {project.impact && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg'
                    >
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
                            <span className='text-green-400 text-sm font-mono'>{project.impact}</span>
                        </div>
                    </motion.div>
                )}

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech && project.tech.map((tech, techIndex) => (
                        <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className='px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-mono rounded border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300'
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                {/* Description */}
                <p className='text-gray-400 text-sm mb-6 font-mono leading-relaxed'>
                    {project.title.includes('Employee Management') && 'Production Employee Management System with <50ms API responses via optimized HTTP parser and Prisma connection pooling.'}
                    {project.title.includes('Echo AI') && 'Production-ready RAG architecture with dual-LLM integration achieving sub-350ms response times for 100+ concurrent users.'}
                    {project.title.includes('Crop Disease') && 'Computer vision system using deep learning for agricultural disease detection with 95% accuracy and real-time processing.'}
                    {project.title.includes('Portfolio') && 'Enterprise-grade portfolio website with 100% Lighthouse performance score and advanced animations.'}
                </p>

                {/* Action Buttons */}
                <div className='flex gap-3'>
                    <motion.a
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-mono text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300'
                    >
                        <span>EXECUTE</span>
                        <span>→</span>
                    </motion.a>

                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className='p-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300'
                    >
                        <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Glitch Effect on Hover */}
            <motion.div
                animate={{
                    opacity: isHovered ? [0, 0.1, 0] : 0
                }}
                transition={{
                    duration: 0.2,
                    repeat: isHovered ? Infinity : 0,
                    repeatDelay: 1
                }}
                className='absolute inset-0 bg-red-500 mix-blend-multiply pointer-events-none'
            />
        </motion.div>
    );
};

const FuturisticWork = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' 
            className='w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[12%] pt-20 pb-16 scroll-mt-20 relative'
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-center mb-16'
            >
                <div className='inline-block p-4 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 mb-6'>
                    <span className='text-blue-400 font-mono text-sm'>~/projects</span>
                </div>
                
                <h2 className='text-4xl md:text-6xl font-bold font-mono mb-6'>
                    <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                        FEATURED_PROJECTS
                    </span>
                </h2>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className='max-w-2xl mx-auto text-gray-400 font-mono text-sm leading-relaxed'
                >
                    Production-ready applications demonstrating expertise in modern web technologies, 
                    cloud architecture, and AI/ML implementations.
                </motion.p>
            </motion.div>

            {/* Projects Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                {workData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            {/* Terminal Stats */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className='mt-20 max-w-4xl mx-auto'
            >
                <div className='bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6'>
                    <div className='flex items-center gap-2 mb-4'>
                        <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                        <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                        <span className='ml-4 text-gray-400 text-sm font-mono'>system_stats.sh</span>
                    </div>
                    
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 font-mono'>
                        {[
                            { label: 'PROJECTS', value: '4+', color: 'text-blue-400' },
                            { label: 'TECH_STACK', value: '10+', color: 'text-green-400' },
                            { label: 'UPTIME', value: '99.9%', color: 'text-purple-400' },
                            { label: 'PERFORMANCE', value: 'A+', color: 'text-pink-400' }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + index * 0.1 }}
                                className='text-center'
                            >
                                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                                    {stat.value}
                                </div>
                                <div className='text-gray-500 text-xs'>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FuturisticWork;