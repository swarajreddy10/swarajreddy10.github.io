'use client';

import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';
import { useState } from 'react';

const FuturisticAbout = ({ isDarkMode }) => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'PROFILE.exe', icon: '👨‍💻' },
        { id: 'skills', label: 'SKILLS.json', icon: '⚡' },
        { id: 'tools', label: 'TOOLS.config', icon: '🛠️' }
    ];

    return (
        <div id='about' className='w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[12%] py-20 scroll-mt-20 relative overflow-hidden'>
            {/* Background Effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-xl' />
            
            {/* Animated Grid */}
            <motion.div 
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className='absolute inset-0 opacity-20'
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className='relative z-10'>
                {/* Terminal Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='max-w-6xl mx-auto mb-12'
                >
                    <div className='bg-gray-800/90 backdrop-blur-xl rounded-t-2xl p-4 border border-gray-700/50'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                <span className='ml-4 text-gray-400 text-sm font-mono'>about_swaraj.sh</span>
                            </div>
                            <div className='flex gap-2'>
                                {tabs.map((tab) => (
                                    <motion.button
                                        key={tab.id}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 ${
                                            activeTab === tab.id
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50'
                                        }`}
                                    >
                                        {tab.icon} {tab.label}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div className='bg-black/90 backdrop-blur-xl rounded-b-2xl border-x border-b border-gray-700/50 min-h-[600px]'>
                        {/* Profile Tab */}
                        {activeTab === 'profile' && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className='p-8 font-mono text-green-400'
                            >
                                <div className='flex flex-col lg:flex-row gap-12 items-start'>
                                    {/* Profile Image with Hologram Effect */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        className='relative group'
                                    >
                                        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500'></div>
                                        <div className='relative bg-gray-900/50 p-4 rounded-2xl border border-blue-500/30'>
                                            <Image 
                                                src={assets.my_image} 
                                                alt='Swaraj Reddy' 
                                                className='w-64 h-80 object-cover rounded-xl'
                                            />
                                            {/* Scanning Line */}
                                            <motion.div
                                                animate={{ y: [0, 320, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                                className='absolute left-4 w-56 h-0.5 bg-blue-400/60 blur-sm'
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Profile Info */}
                                    <div className='flex-1 space-y-6'>
                                        <div>
                                            <span className='text-blue-400'>$ </span>
                                            <span className='text-white'>cat personal_info.txt</span>
                                        </div>
                                        
                                        <div className='space-y-4 pl-4'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
                                                <div className='space-y-2'>
                                                    <div><span className='text-yellow-400'>Name:</span> <span className='text-white'>Swaraj Reddy</span></div>
                                                    <div><span className='text-yellow-400'>Role:</span> <span className='text-white'>Software Engineer</span></div>
                                                    <div><span className='text-yellow-400'>Education:</span> <span className='text-white'>B.Tech CSE (2025)</span></div>
                                                    <div><span className='text-yellow-400'>CGPA:</span> <span className='text-white'>8.2/10</span></div>
                                                </div>
                                                <div className='space-y-2'>
                                                    <div><span className='text-yellow-400'>Location:</span> <span className='text-white'>Hyderabad, India</span></div>
                                                    <div><span className='text-yellow-400'>Status:</span> <span className='text-green-400'>Available for hire</span></div>
                                                    <div><span className='text-yellow-400'>Experience:</span> <span className='text-white'>0-1 year</span></div>
                                                    <div><span className='text-yellow-400'>Projects:</span> <span className='text-white'>4+ Production Apps</span></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-8'>
                                            <div><span className='text-blue-400'>$ </span><span className='text-white'>cat bio.md</span></div>
                                            <div className='pl-4 mt-4 text-gray-300 leading-relaxed'>
                                                <p className='mb-4'>
                                                    Results-driven <span className='text-blue-400'>Software Engineer</span> with expertise in 
                                                    building <span className='text-green-400'>production-ready applications</span>. 
                                                    Specialized in <span className='text-yellow-400'>full-stack development</span>, 
                                                    <span className='text-purple-400'> cloud technologies</span>, and 
                                                    <span className='text-pink-400'> AI/ML implementations</span>.
                                                </p>
                                                <p>
                                                    Passionate about creating <span className='text-orange-400'>scalable systems</span> that 
                                                    solve real-world problems with clean, efficient code.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Skills Tab */}
                        {activeTab === 'skills' && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className='p-8 font-mono text-green-400'
                            >
                                <div><span className='text-blue-400'>$ </span><span className='text-white'>node skills.js --verbose</span></div>
                                
                                <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
                                    {infoList.map((info, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className='bg-gray-800/50 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300'
                                        >
                                            <div className='flex items-center gap-3 mb-4'>
                                                <div className='w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center'>
                                                    <Image 
                                                        src={isDarkMode ? info.iconDark : info.icon} 
                                                        alt={info.title} 
                                                        className='w-6 h-6' 
                                                    />
                                                </div>
                                                <h3 className='text-white font-bold'>{info.title}</h3>
                                            </div>
                                            <p className='text-gray-400 text-sm leading-relaxed'>{info.description}</p>
                                            
                                            {/* Progress Bar */}
                                            <div className='mt-4'>
                                                <div className='w-full bg-gray-700 rounded-full h-2'>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: '85%' }}
                                                        transition={{ duration: 1, delay: index * 0.3 }}
                                                        className='bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full'
                                                    />
                                                </div>
                                                <span className='text-xs text-gray-500 mt-1'>Proficiency: 85%</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Tools Tab */}
                        {activeTab === 'tools' && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className='p-8 font-mono text-green-400'
                            >
                                <div><span className='text-blue-400'>$ </span><span className='text-white'>ls -la /usr/local/bin/</span></div>
                                
                                <div className='mt-6'>
                                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6'>
                                        {toolsData.map((tool, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                                                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                                whileHover={{ 
                                                    scale: 1.2, 
                                                    rotateY: 360,
                                                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                                                }}
                                                className='group relative bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 cursor-pointer'
                                            >
                                                <div className='flex flex-col items-center gap-2'>
                                                    <div className='w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300'>
                                                        <Image 
                                                            src={tool} 
                                                            alt='Tool' 
                                                            className='w-8 h-8 group-hover:drop-shadow-lg transition-all duration-300' 
                                                        />
                                                    </div>
                                                    <div className='w-full bg-gray-700 rounded-full h-1'>
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                                                            transition={{ duration: 1, delay: index * 0.1 }}
                                                            className='bg-gradient-to-r from-green-500 to-blue-500 h-1 rounded-full'
                                                        />
                                                    </div>
                                                </div>
                                                
                                                {/* Hover Effect */}
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    whileHover={{ opacity: 1 }}
                                                    className='absolute inset-0 bg-blue-500/10 rounded-xl'
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* System Stats */}
                                <div className='mt-12 bg-gray-800/30 rounded-xl p-6 border border-gray-700/50'>
                                    <div className='text-white mb-4'>System Performance:</div>
                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
                                        <div>
                                            <div className='text-yellow-400'>CPU Usage</div>
                                            <div className='text-green-400'>23% ████░░░░░░</div>
                                        </div>
                                        <div>
                                            <div className='text-yellow-400'>Memory</div>
                                            <div className='text-blue-400'>67% ██████░░░░</div>
                                        </div>
                                        <div>
                                            <div className='text-yellow-400'>Uptime</div>
                                            <div className='text-purple-400'>99.9% ██████████</div>
                                        </div>
                                        <div>
                                            <div className='text-yellow-400'>Projects</div>
                                            <div className='text-pink-400'>4+ Active</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FuturisticAbout;