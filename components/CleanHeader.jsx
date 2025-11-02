'use client';

import { assets } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';

const CleanHeader = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-black text-white px-6'>
            <div className='max-w-4xl mx-auto text-center'>
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='mb-8'
                >
                    <Image 
                        src={assets.profile_img} 
                        alt='Swaraj Reddy' 
                        className='w-32 h-32 rounded-full mx-auto border-2 border-gray-700'
                    />
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='text-4xl md:text-6xl font-bold mb-4'
                >
                    Swaraj Reddy
                </motion.h1>

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='text-xl md:text-2xl text-gray-400 mb-8'
                >
                    Full Stack Developer
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed'
                >
                    Computer Science Graduate building production-ready applications 
                    with React, Python, and AWS.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex flex-col sm:flex-row gap-4 justify-center'
                >
                    <button className='px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors'>
                        View Work
                    </button>
                    <button className='px-8 py-3 border border-gray-600 text-white rounded-lg font-medium hover:border-gray-400 transition-colors'>
                        Contact Me
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default CleanHeader;