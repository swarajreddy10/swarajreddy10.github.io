import { assets } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';
import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    const response = await fetch("https://formspree.io/f/mwpowvqe", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    });

    const data = await response.json();

    if (data.ok || data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Submission failed. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='w-full px-4 sm:px-6 md:px-8 lg:px-[8%] xl:px-[12%] py-16 sm:py-20 md:py-24 scroll-mt-20 bg-white dark:bg-darkTheme'
    >
      
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-center mb-8 relative z-10'
      >
        <span className='inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 mb-4'>
          💬 Let's Talk
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative z-10'>
        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Get In Touch
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className='text-center max-w-3xl mx-auto mt-5 mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 relative z-10 tracking-normal'>
        As a{' '}
        <span className='font-semibold text-blue-600 dark:text-blue-400'>fresh Computer Science graduate</span>{' '}
        with strong technical foundations, I'm eager to contribute to{' '}
        <span className='font-semibold text-purple-600 dark:text-purple-400'>innovative teams</span>{' '}
        and grow alongside{' '}
        <span className='font-semibold text-green-600 dark:text-green-400'>industry professionals</span>.{' '}
        Let's connect to explore{' '}
        <span className='font-semibold text-orange-600 dark:text-orange-400'>entry-level opportunities</span>{' '}
        where I can apply my skills and learn from experienced mentors.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className='max-w-3xl mx-auto relative z-10'
      >
        <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 dark:border-gray-700/30'>
          <motion.form onSubmit={onSubmit} className='space-y-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className='relative group'
              >
                <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                  Your Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder='John Doe'
                  required
                  className='w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400'
                  name='name'
                />
              </motion.div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className='relative group'
              >
                <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                  Email Address *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder='john@example.com'
                  required
                  className='w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400'
                  name='email'
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className='relative group'
            >
              <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                Your Message *
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                rows='6'
                placeholder='Describe your project requirements, team needs, or collaboration opportunity...'
                required
                className='w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none'
                name='message'
              ></motion.textarea>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className='flex justify-center pt-4'
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                className='group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 overflow-hidden min-w-[200px] justify-center'
              >
                <span className='absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                <span className='relative z-10'>Send Message</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  className='relative z-10'
                >
                  <Image src={assets.right_arrow_white} alt='send' className='w-5 h-5' />
                </motion.div>
              </motion.button>
            </motion.div>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-4 rounded-2xl ${result.includes('Successfully') 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                  : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                }`}
              >
                <p className='font-semibold'>{result}</p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;