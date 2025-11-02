'use client';

import { serviceData } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';

const FuturisticAchievements = () => {
    return (
        <div id="achievements" className='w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[12%] py-20 scroll-mt-20 relative overflow-hidden'>
            {/* Background */}
            <div className='absolute inset-0 bg-gradient-to-b from-black/95 via-gray-900/90 to-black/95' />
            
            {/* Animated Circuit Pattern */}
            <div className='absolute inset-0 opacity-20'>
                <svg className='w-full h-full' viewBox='0 0 100 100' preserveAspectRatio='none'>
                    <defs>
                        <pattern id='circuit' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
                            <path d='M 0,10 L 10,10 L 10,0 M 10,20 L 10,10 L 20,10' stroke='#3b82f6' strokeWidth='0.5' fill='none' opacity='0.3'/>
                        </pattern>
                    </defs>
                    <rect width='100%' height='100%' fill='url(#circuit)' />
                </svg>
            </div>

            <div className='relative z-10'>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='text-center mb-16'
                >
                    <div className='inline-block p-4 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-blue-500/30 mb-6'>
                        <span className='text-blue-400 font-mono text-sm'>~/achievements</span>
                    </div>
                    
                    <h2 className='text-4xl md:text-6xl font-bold font-mono mb-6'>
                        <span className='bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
                            CORE_EXPERTISE
                        </span>
                    </h2>
                    
                    <p className='max-w-3xl mx-auto text-gray-300 font-mono text-sm leading-relaxed'>
                        Specialized domains where I deliver production-ready solutions with measurable impact
                    </p>
                </motion.div>

                {/* Achievement Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                    {serviceData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: 45 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            whileHover={{ 
                                scale: 1.05, 
                                rotateY: 5,
                                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                            }}
                            className='group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden'
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Holographic Effect */}
                            <motion.div
                                animate={{
                                    background: [
                                        'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                                        'linear-gradient(225deg, transparent, rgba(147, 51, 234, 0.1), transparent)',
                                        'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)'
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className='absolute inset-0 opacity-0 group-hover:opacity-100'
                            />

                            <div className='relative p-8'>
                                {/* Icon with Glow */}
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.6 }}
                                    className='w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30 relative'
                                >
                                    <div className='absolute inset-0 bg-blue-500/20 rounded-xl blur-lg'></div>
                                    <Image src={service.icon} alt={service.title} className='w-8 h-8 relative z-10' />
                                </motion.div>

                                {/* Title */}
                                <h3 className='text-xl font-bold text-white mb-4 font-mono group-hover:text-blue-400 transition-colors duration-300'>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className='text-gray-400 text-sm leading-relaxed mb-6 font-mono'>
                                    {service.description}
                                </p>

                                {/* Status Indicator */}
                                <div className='flex items-center gap-2'>
                                    <motion.div
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className='w-2 h-2 bg-green-400 rounded-full'
                                    />
                                    <span className='text-green-400 text-xs font-mono'>ACTIVE</span>
                                </div>

                                {/* Progress Bar */}
                                <div className='mt-4'>
                                    <div className='w-full bg-gray-700 rounded-full h-1'>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '90%' }}
                                            transition={{ duration: 2, delay: index * 0.3 }}
                                            className='bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full'
                                        />
                                    </div>
                                    <span className='text-xs text-gray-500 mt-1 font-mono'>Proficiency: 90%</span>
                                </div>
                            </div>

                            {/* Scan Line Effect */}
                            <motion.div
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                className='absolute top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100'
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Stats Terminal */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className='mt-20 max-w-4xl mx-auto bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6'
                >
                    <div className='flex items-center gap-2 mb-4'>
                        <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                        <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                        <span className='ml-4 text-gray-400 text-sm font-mono'>performance_metrics.log</span>
                    </div>
                    
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-sm'>
                        {[
                            { label: 'DOMAINS', value: '4+', color: 'text-blue-400' },
                            { label: 'PROJECTS', value: '10+', color: 'text-green-400' },
                            { label: 'SUCCESS_RATE', value: '95%', color: 'text-purple-400' },
                            { label: 'IMPACT', value: 'HIGH', color: 'text-pink-400' }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2 + index * 0.1 }}
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
                </motion.div>
            </div>
        </div>
    );
};

export default FuturisticAchievements;