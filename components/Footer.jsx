import { assets } from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'

const Footer = ({ isDarkMode }) => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`mt-16 sm:mt-20 relative overflow-hidden transition-all duration-500 ${
        isDarkMode 
          ? 'bg-darkTheme text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      {/* Navbar-style background */}
      <div className='absolute inset-0 bg-white bg-opacity-50 backdrop-blur-lg dark:bg-darkTheme dark:bg-opacity-95'></div>

      <div className='relative z-10 px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[12%] py-16 sm:py-20'>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center mb-12'
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='inline-block mb-8'
          >
            <Image
              src={isDarkMode ? assets.logo2 : assets.logo_light}
              alt='Swaraj Reddy Logo'
              className='w-48 h-auto cursor-pointer mx-auto transition-all duration-300'
            />
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex items-center justify-center gap-3 mb-10'
          >
            <div className='relative'>
              <div className='w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-sm'>
                <svg className='w-5 h-5 text-gray-600 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
            </div>
            <a 
              href="mailto:swarajchandra22@gmail.com" 
              className={`font-medium transition-colors duration-300 hover:underline ${
                isDarkMode ? 'text-white hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              swarajchandra22@gmail.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12'
          >
            {[
              { name: 'GitHub', url: 'https://github.com/swarajreddy10/' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/swarajreddy/' },
              { name: 'Credly', url: 'https://www.credly.com/users/swarajreddy'}
            ].map(({ name, url }) => (
              <motion.a
                key={name}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={url}
                target='_blank'
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                  isDarkMode
                    ? 'border-white/20 hover:border-white/40 text-white hover:bg-white/10'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {name}
              </motion.a>
            ))}
          </motion.div>

          {/* Quick navigation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='flex flex-wrap items-center justify-center gap-6 mb-8'
          >
            {[
              { name: 'Home', href: '#top' },
              { name: 'About', href: '#about' },
              { name: 'Work', href: '#work' },
              { name: 'Contact', href: '#contact' }
            ].map(({ name, href }) => (
              <motion.a
                key={name}
                whileHover={{ scale: 1.05 }}
                href={href}
                className={`text-sm font-medium transition-colors duration-300 hover:underline ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`border-t pt-8 flex flex-col items-center justify-center gap-4 ${
            isDarkMode ? 'border-white/10' : 'border-gray-200'
          }`}
        >
          <p className={`text-sm font-medium text-center ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2025 Swaraj Reddy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
