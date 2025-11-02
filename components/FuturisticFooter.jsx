'use client';

import { assets } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';

const FuturisticFooter = ({ isDarkMode }) => {
    return (
        <footer className='relative overflow-hidden bg-black'>
            {/* Animated Background */}
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent' />
                
                {/* Grid Pattern */}
                <motion.div 
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className='absolute inset-0 opacity-20'
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>

            <div className='relative z-10 px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[12%] py-16'>
                {/* Terminal Window */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='max-w-4xl mx-auto'
                >
                    <div className='bg-gray-800/90 backdrop-blur-xl rounded-t-2xl p-4 border border-gray-700/50'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                            <span className='ml-4 text-gray-400 text-sm font-mono'>footer_info.sh</span>
                        </div>
                    </div>

                    <div className='bg-black/90 backdrop-blur-xl rounded-b-2xl border-x border-b border-gray-700/50 p-8'>
                        <div className='font-mono text-green-400 space-y-6'>
                            {/* Header */}
                            <div>
                                <span className='text-blue-400'>$ </span>
                                <span className='text-white'>cat developer_info.txt</span>
                            </div>

                            {/* Logo and Info */}
                            <div className='flex flex-col md:flex-row items-center gap-8 pl-4'>
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className='relative'
                                >
                                    <div className='absolute inset-0 bg-blue-500/20 rounded-2xl blur-lg'></div>
                                    <Image
                                        src={assets.logo2}
                                        alt='Swaraj Reddy Logo'
                                        className='w-32 h-auto relative z-10'
                                    />
                                </motion.div>

                                <div className='flex-1 text-center md:text-left'>
                                    <h3 className='text-2xl font-bold text-white mb-2'>SWARAJ_REDDY.exe</h3>
                                    <p className='text-gray-400 mb-4'>Full Stack Developer | AI Enthusiast | Cloud Architect</p>
                                    
                                    {/* Contact Info */}
                                    <div className='space-y-2 text-sm'>
                                        <div className='flex items-center justify-center md:justify-start gap-2'>
                                            <span className='text-yellow-400'>EMAIL:</span>
                                            <a href="mailto:swarajchandra22@gmail.com" className='text-blue-400 hover:text-blue-300 transition-colors'>
                                                swarajchandra22@gmail.com
                                            </a>
                                        </div>
                                        <div className='flex items-center justify-center md:justify-start gap-2'>
                                            <span className='text-yellow-400'>LOCATION:</span>
                                            <span className='text-white'>Hyderabad, India</span>
                                        </div>
                                        <div className='flex items-center justify-center md:justify-start gap-2'>
                                            <span className='text-yellow-400'>STATUS:</span>
                                            <span className='text-green-400'>Available for hire</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className='pl-4'>
                                <div className='mb-4'>
                                    <span className='text-blue-400'>$ </span>
                                    <span className='text-white'>ls -la /social_networks/</span>
                                </div>
                                
                                <div className='flex flex-wrap justify-center md:justify-start gap-4 pl-4'>
                                    {[
                                        { name: 'GitHub', url: 'https://github.com/swarajreddy10/', color: 'text-purple-400' },
                                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/swarajreddy/', color: 'text-blue-400' },
                                        { name: 'Credly', url: 'https://www.credly.com/users/swarajreddy', color: 'text-orange-400' }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={social.name}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={social.url}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            className={`px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg hover:border-blue-500/50 transition-all duration-300 ${social.color} text-sm`}
                                        >
                                            {social.name}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className='pl-4'>
                                <div className='mb-4'>
                                    <span className='text-blue-400'>$ </span>
                                    <span className='text-white'>cat navigation.json</span>
                                </div>
                                
                                <div className='flex flex-wrap justify-center md:justify-start gap-6 pl-4 text-sm'>
                                    {[
                                        { name: 'Home', href: '#home' },
                                        { name: 'About', href: '#about' },
                                        { name: 'Projects', href: '#work' },
                                        { name: 'Contact', href: '#contact' }
                                    ].map((nav) => (
                                        <motion.a
                                            key={nav.name}
                                            whileHover={{ scale: 1.1 }}
                                            href={nav.href}
                                            className='text-gray-400 hover:text-white transition-colors duration-300'
                                        >
                                            {nav.name}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* System Stats */}
                            <div className='pl-4 border-t border-gray-700/50 pt-6'>
                                <div className='mb-4'>
                                    <span className='text-blue-400'>$ </span>
                                    <span className='text-white'>system_info --version</span>
                                </div>
                                
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pl-4 text-xs'>
                                    <div>
                                        <div className='text-yellow-400'>VERSION</div>
                                        <div className='text-white'>v2025.1.0</div>
                                    </div>
                                    <div>
                                        <div className='text-yellow-400'>BUILD</div>
                                        <div className='text-white'>STABLE</div>
                                    </div>
                                    <div>
                                        <div className='text-yellow-400'>UPTIME</div>
                                        <div className='text-green-400'>24/7</div>
                                    </div>
                                    <div>
                                        <div className='text-yellow-400'>LICENSE</div>
                                        <div className='text-white'>MIT</div>
                                    </div>
                                </div>
                            </div>

                            {/* Copyright */}
                            <div className='pl-4 border-t border-gray-700/50 pt-6 text-center'>
                                <p className='text-gray-500 text-sm'>
                                    © 2025 Swaraj Reddy. All rights reserved. | Built with Next.js & ❤️
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Elements */}
                <div className='absolute top-10 right-10 opacity-20'>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.5
                            }}
                            className='absolute w-2 h-2 bg-blue-400 rounded-full'
                            style={{
                                left: `${i * 15}px`,
                                top: `${i * 10}px`
                            }}
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default FuturisticFooter;