'use client';

import { motion } from "motion/react";
import { useState } from 'react';

const UniqueContact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Establishing quantum link...");
        
        const formData = new FormData(event.target);

        try {
            const response = await fetch("https://formspree.io/f/mwpowvqe", {
                method: "POST",
                headers: { 'Accept': 'application/json' },
                body: formData,
            });

            const data = await response.json();

            if (data.ok || data.success) {
                setResult("✓ Quantum message transmitted");
                event.target.reset();
            } else {
                setResult("✗ Transmission interference detected");
            }
        } catch (error) {
            setResult("✗ Quantum field disruption");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900'>
            {/* Cyber Grid */}
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5' />
                
                {/* Animated Data Streams */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: ['-100vw', '100vw']
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: 'linear'
                        }}
                        className='absolute h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent'
                        style={{
                            top: `${Math.random() * 100}%`,
                            width: '200px'
                        }}
                    />
                ))}

                {/* Floating Data Nodes */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3
                        }}
                        className='absolute w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className='relative z-10 flex items-center justify-center min-h-screen p-8'>
                <div className='max-w-5xl mx-auto'>
                    {/* Cyber Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='text-center mb-16'
                    >
                        <div className='inline-block relative mb-8'>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className='absolute inset-0 border-2 border-dashed border-cyan-400/30 rounded-full'
                            />
                            <div className='relative bg-black/60 backdrop-blur-xl rounded-full p-6 border border-cyan-400/50'>
                                <h2 className='text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-mono'>
                                    QUANTUM_LINK
                                </h2>
                            </div>
                        </div>
                        <p className='text-cyan-200 font-mono text-lg'>Establish secure communication protocol</p>
                    </motion.div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                        {/* Communication Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-400/30 p-8'
                        >
                            <div className='flex items-center gap-3 mb-6'>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    className='w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full'
                                />
                                <h3 className='text-cyan-400 font-mono text-xl'>TRANSMISSION_FORM</h3>
                            </div>

                            <form onSubmit={onSubmit} className='space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div className='relative group'>
                                        <label className='block text-emerald-400 font-mono text-sm mb-2'>
                                            &gt; SENDER_ID
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder='Enter your identifier...'
                                            className='w-full p-4 bg-gray-900/50 border border-gray-600 rounded-lg text-white font-mono placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all duration-300'
                                        />
                                        <motion.div
                                            animate={{ x: [0, 100, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                            className='absolute bottom-0 left-0 w-8 h-0.5 bg-cyan-400 opacity-0 group-focus-within:opacity-100'
                                        />
                                    </div>

                                    <div className='relative group'>
                                        <label className='block text-emerald-400 font-mono text-sm mb-2'>
                                            &gt; QUANTUM_ADDRESS
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder='user@quantum.net'
                                            className='w-full p-4 bg-gray-900/50 border border-gray-600 rounded-lg text-white font-mono placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all duration-300'
                                        />
                                        <motion.div
                                            animate={{ x: [0, 100, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                            className='absolute bottom-0 left-0 w-8 h-0.5 bg-cyan-400 opacity-0 group-focus-within:opacity-100'
                                        />
                                    </div>
                                </div>

                                <div className='relative group'>
                                    <label className='block text-emerald-400 font-mono text-sm mb-2'>
                                        &gt; DATA_PACKET
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="6"
                                        placeholder='Encode your message... Describe collaboration opportunities, project requirements, or technical discussions.'
                                        className='w-full p-4 bg-gray-900/50 border border-gray-600 rounded-lg text-white font-mono placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none'
                                    />
                                    <motion.div
                                        animate={{ x: [0, 100, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                        className='absolute bottom-0 left-0 w-8 h-0.5 bg-cyan-400 opacity-0 group-focus-within:opacity-100'
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='w-full py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-mono font-bold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3'
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
                                            />
                                            TRANSMITTING...
                                        </>
                                    ) : (
                                        <>
                                            INITIATE_TRANSMISSION
                                            <span className='text-lg'>⚡</span>
                                        </>
                                    )}
                                </motion.button>

                                {result && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`text-center p-4 rounded-lg font-mono text-sm border ${
                                            result.includes('✓') 
                                                ? 'bg-emerald-900/30 text-emerald-400 border-emerald-500/30' 
                                                : 'bg-red-900/30 text-red-400 border-red-500/30'
                                        }`}
                                    >
                                        {result}
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Network Status */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='space-y-6'
                        >
                            {/* Connection Status */}
                            <div className='bg-black/40 backdrop-blur-xl rounded-2xl border border-emerald-400/30 p-6'>
                                <h3 className='text-emerald-400 font-mono mb-4'>NETWORK_STATUS</h3>
                                <div className='space-y-3 font-mono text-sm'>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-400'>CONNECTION:</span>
                                        <span className='text-green-400 flex items-center gap-2'>
                                            SECURE
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                                className='w-2 h-2 bg-green-400 rounded-full'
                                            />
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-400'>ENCRYPTION:</span>
                                        <span className='text-cyan-400'>QUANTUM-256</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-400'>LATENCY:</span>
                                        <span className='text-yellow-400'>12ms</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-400'>BANDWIDTH:</span>
                                        <span className='text-blue-400'>∞ Gbps</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Nodes */}
                            <div className='grid grid-cols-1 gap-4'>
                                {[
                                    { label: 'EMAIL_NODE', value: 'swarajchandra22@gmail.com', icon: '📧', color: 'emerald' },
                                    { label: 'GEO_LOCATION', value: 'Hyderabad, India', icon: '🌐', color: 'teal' },
                                    { label: 'AVAILABILITY', value: 'Ready for hire', icon: '⚡', color: 'cyan' }
                                ].map((node, index) => (
                                    <motion.div
                                        key={node.label}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className={`bg-black/40 backdrop-blur-xl rounded-xl border border-${node.color}-400/30 p-4 hover:border-${node.color}-400/60 transition-all duration-300`}
                                    >
                                        <div className='flex items-center gap-3'>
                                            <div className={`w-10 h-10 bg-${node.color}-500/20 rounded-lg flex items-center justify-center`}>
                                                <span className='text-lg'>{node.icon}</span>
                                            </div>
                                            <div>
                                                <div className={`text-${node.color}-400 font-mono text-xs`}>{node.label}</div>
                                                <div className='text-white font-mono text-sm'>{node.value}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniqueContact;