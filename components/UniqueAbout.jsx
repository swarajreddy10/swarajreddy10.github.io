'use client';

import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';
import { useState } from 'react';

const UniqueAbout = () => {
    const [activeHolo, setActiveHolo] = useState(0);

    return (
        <div className='min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900'>
            {/* Holographic Grid */}
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10' />
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            opacity: [0.1, 0.6, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3
                        }}
                        className='absolute w-32 h-32 border border-cyan-400/30 rounded-full'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                ))}
            </div>

            <div className='relative z-10 flex items-center justify-center min-h-screen p-8'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    {/* Holographic Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='relative'
                    >
                        <div className='relative w-96 h-96 mx-auto'>
                            {/* Hologram Base */}
                            <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full blur-xl' />
                            
                            {/* Rotating Rings */}
                            {[0, 1, 2].map((ring) => (
                                <motion.div
                                    key={ring}
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 10 + ring * 5,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                    className={`absolute inset-${ring * 4} border border-cyan-400/40 rounded-full`}
                                />
                            ))}
                            
                            {/* Profile Image */}
                            <motion.div
                                animate={{ 
                                    y: [0, -10, 0],
                                    rotateY: [0, 5, -5, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className='absolute inset-8 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/50'
                            >
                                <Image 
                                    src={assets.my_image} 
                                    alt='Swaraj Reddy' 
                                    className='w-full h-full object-cover'
                                />
                                {/* Hologram Scan Lines */}
                                <motion.div
                                    animate={{ y: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent h-8'
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Data Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='space-y-8'
                    >
                        <div className='bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-400/30 p-8'>
                            <motion.h2 
                                className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'
                            >
                                NEURAL_PROFILE.exe
                            </motion.h2>
                            
                            <div className='space-y-4 font-mono text-sm'>
                                <div className='flex justify-between'>
                                    <span className='text-cyan-400'>NAME:</span>
                                    <span className='text-white'>Swaraj Reddy</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-cyan-400'>DESIGNATION:</span>
                                    <span className='text-white'>Full Stack Engineer</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-cyan-400'>EXPERIENCE:</span>
                                    <span className='text-green-400'>0-1 Year</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-cyan-400'>STATUS:</span>
                                    <span className='text-green-400 animate-pulse'>ACTIVE</span>
                                </div>
                            </div>
                        </div>

                        {/* Skills Matrix */}
                        <div className='grid grid-cols-3 gap-4'>
                            {infoList.map((info, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, rotateY: 10 }}
                                    onHoverStart={() => setActiveHolo(index)}
                                    className={`bg-black/40 backdrop-blur-xl rounded-xl border p-6 cursor-pointer transition-all duration-300 ${
                                        activeHolo === index ? 'border-cyan-400/60' : 'border-gray-700/50'
                                    }`}
                                >
                                    <div className='w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4'>
                                        <Image src={info.iconDark} alt={info.title} className='w-6 h-6' />
                                    </div>
                                    <h3 className='text-white font-bold text-sm mb-2'>{info.title}</h3>
                                    <div className='w-full bg-gray-700 rounded-full h-2'>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: activeHolo === index ? '90%' : '70%' }}
                                            className='bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full'
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tech Arsenal */}
                        <div className='bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-400/30 p-6'>
                            <h3 className='text-cyan-400 font-mono mb-4'>TECH_ARSENAL:</h3>
                            <div className='flex flex-wrap gap-3'>
                                {toolsData.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        className='w-12 h-12 bg-gray-800/50 rounded-lg border border-gray-600/50 flex items-center justify-center hover:border-cyan-400/50 transition-all duration-300'
                                    >
                                        <Image src={tool} alt='Tool' className='w-6 h-6' />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default UniqueAbout;