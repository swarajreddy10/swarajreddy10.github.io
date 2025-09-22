import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'

const About = ({ isDarkMode }) => {
    return (
        <motion.div id='about' className='w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[12%] py-8 sm:py-12 md:py-16 pb-4 sm:pb-6 md:pb-8 scroll-mt-20 bg-white dark:bg-darkTheme'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-center mb-8'
            >
                <span className='inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 mb-4'>
                    📖 Get to know me
                </span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
                    About Me
                </span>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:gap-24 my-12 sm:my-16'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                    className='w-72 sm:w-80 md:w-96 rounded-3xl max-w-none relative group'>
                    <div className='absolute inset-0 rounded-3xl bg-blue-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500'></div>
                    <Image src={assets.my_image} alt='Swaraj Reddy' className='w-full rounded-3xl relative z-10 shadow-2xl border-4 border-white dark:border-gray-700 hover:scale-105 transition-transform duration-300' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className='mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 tracking-normal'>
                        <span className='font-bold text-gray-800 dark:text-white'>Results-driven Software Engineer</span>{' '}
                        graduating from{' '}
                        <span className='font-semibold text-blue-600 dark:text-blue-400'>GITAM University (2025)</span>{' '}
                        with{' '}
                        <span className='font-semibold text-purple-600 dark:text-purple-400'>8.2 CGPA</span>{' '}
                        and proven expertise in building{' '}
                        <span className='font-bold text-green-600 dark:text-green-400'>production-ready applications</span>.{' '}
                        <br className='hidden sm:block'/>
                        Specialized in{' '}
                        <span className='font-semibold text-orange-600 dark:text-orange-400'>Java</span>,{' '}
                        <span className='font-semibold text-green-600 dark:text-green-400'>Python</span>,{' '}
                        <span className='font-semibold text-cyan-600 dark:text-cyan-400'>React</span>, and{' '}
                        <span className='font-semibold text-purple-600 dark:text-purple-400'>Cloud Technologies</span>{' '}
                        with hands-on experience in{' '}
                        <span className='font-medium text-indigo-600 dark:text-indigo-400'>AWS</span>,{' '}
                        <span className='font-medium text-blue-600 dark:text-blue-400'>full-stack development</span>, and{' '}
                        <span className='font-medium text-red-600 dark:text-red-400'>database management</span>.{' '}
                        Passionate about creating{' '}
                        <span className='font-bold text-pink-600 dark:text-pink-400'>scalable, efficient systems</span>{' '}
                        that solve real-world problems.
                    </motion.p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -8 }}
                                className='group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden'
                                key={index}>
                                <div className='absolute inset-0 bg-blue-50 dark:bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                <div className='relative z-10'>
                                    <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6 h-6' />
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>{title}</h3>
                                    <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2'>{description}</p>
                                    {infoList[index].highlight && (
                                        <div className='inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full'>
                                            {infoList[index].highlight}
                                        </div>
                                    )}
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className='mt-12 mb-8'>
                        <h4 className='text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2'>
                            <span className='w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center'>
                                🛠️
                            </span>
                            Tech Stack & Tools
                        </h4>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.8 }}
                        className='flex flex-wrap items-center gap-4 sm:gap-6'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                                whileHover={{ scale: 1.2, rotate: 5, y: -8 }}
                                whileTap={{ scale: 0.95 }}
                                className='group relative flex items-center justify-center w-14 sm:w-16 aspect-square bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-xl'
                                key={index}>
                                <div className='absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <Image src={tool} alt='Tool' className='w-6 sm:w-8 relative z-10 group-hover:drop-shadow-lg transition-all duration-300' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
