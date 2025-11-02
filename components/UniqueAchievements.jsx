'use client';

import { serviceData } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';

const UniqueAchievements = () => {
    return (
        <div className='min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900'>
            {/* Circuit Board Background */}
            <div className='absolute inset-0'>
                <svg className='w-full h-full opacity-20' viewBox='0 0 100 100'>
                    <defs>
                        <pattern id='circuit-board' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'>
                            <path d='M 0,5 L 5,5 L 5,0 M 5,10 L 5,5 L 10,5' stroke='#f97316' strokeWidth='0.2' fill='none'/>
                            <circle cx='5' cy='5' r='0.5' fill='#f97316' opacity='0.6'/>
                        </pattern>
                    </defs>
                    <rect width='100%' height='100%' fill='url(#circuit-board)' />
                </svg>
                
                {/* Floating Circuit Elements */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 180, 360],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3
                        }}
                        className='absolute w-4 h-4 bg-orange-500/60 rounded-sm'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className='relative z-10 flex items-center justify-center min-h-screen p-8'>
                <div className='max-w-6xl mx-auto'>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-mono'>
                            CORE_SYSTEMS
                        </h2>
                        <p className='text-orange-200 font-mono'>Specialized modules powering innovation</p>
                    </motion.div>

                    {/* Hexagonal Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {serviceData.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    rotate: 5,
                                    boxShadow: '0 0 40px rgba(249, 115, 22, 0.6)'
                                }}
                                className='relative group'
                            >
                                {/* Hexagon Shape */}
                                <div className='relative bg-gradient-to-br from-orange-800/50 to-red-800/50 backdrop-blur-xl border-2 border-orange-500/40 rounded-2xl p-8 hover:border-orange-400/80 transition-all duration-500'>
                                    {/* Corner Circuits */}
                                    <div className='absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-orange-400/60'></div>
                                    <div className='absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-orange-400/60'></div>
                                    <div className='absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-orange-400/60'></div>
                                    <div className='absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-orange-400/60'></div>

                                    {/* Icon with Power Glow */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.6 }}
                                        className='relative w-16 h-16 mx-auto mb-6'
                                    >
                                        <div className='absolute inset-0 bg-orange-500/30 rounded-xl blur-lg group-hover:bg-orange-400/50 transition-all duration-300'></div>
                                        <div className='relative w-full h-full bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-xl border border-orange-400/50 flex items-center justify-center'>
                                            <Image src={service.icon} alt={service.title} className='w-8 h-8' />
                                        </div>
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className='text-xl font-bold text-white mb-4 text-center font-mono group-hover:text-orange-300 transition-colors'>
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className='text-orange-200/80 text-sm leading-relaxed text-center mb-6'>
                                        {service.description}
                                    </p>

                                    {/* Power Level */}
                                    <div className='space-y-2'>
                                        <div className='flex justify-between text-xs font-mono'>
                                            <span className='text-orange-400'>POWER_LEVEL</span>
                                            <span className='text-white'>95%</span>
                                        </div>
                                        <div className='w-full bg-gray-800 rounded-full h-2 overflow-hidden'>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '95%' }}
                                                transition={{ duration: 2, delay: index * 0.3 }}
                                                className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 h-full rounded-full relative'
                                            >
                                                <motion.div
                                                    animate={{ x: ['-100%', '100%'] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                                    className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent'
                                                />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Status Indicator */}
                                    <div className='flex items-center justify-center gap-2 mt-4'>
                                        <motion.div
                                            animate={{ 
                                                scale: [1, 1.3, 1],
                                                opacity: [0.6, 1, 0.6]
                                            }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className='w-2 h-2 bg-green-400 rounded-full'
                                        />
                                        <span className='text-green-400 text-xs font-mono'>ONLINE</span>
                                    </div>
                                </div>

                                {/* Electrical Arcs */}
                                <motion.div
                                    animate={{
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 0.1,
                                        repeat: Infinity,
                                        repeatDelay: 2 + Math.random() * 3
                                    }}
                                    className='absolute inset-0 border-2 border-orange-400 rounded-2xl opacity-0'
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* System Status */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className='mt-16 bg-black/60 backdrop-blur-xl rounded-2xl border border-orange-500/40 p-6'
                    >
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-center'>
                            {[
                                { label: 'MODULES', value: '4', unit: 'ACTIVE' },
                                { label: 'EFFICIENCY', value: '98', unit: '%' },
                                { label: 'UPTIME', value: '99.9', unit: '%' },
                                { label: 'PERFORMANCE', value: 'MAX', unit: '' }
                            ].map((stat, index) => (
                                <div key={stat.label}>
                                    <div className='text-2xl font-bold text-orange-400 mb-1'>
                                        {stat.value}<span className='text-sm'>{stat.unit}</span>
                                    </div>
                                    <div className='text-orange-200/60 text-xs'>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default UniqueAchievements;