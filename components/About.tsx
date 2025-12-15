import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { fadeInUp, staggerContainer } from './ui/SectionWrapper';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-dark-bg/50 border-t border-gray-100 dark:border-gray-800">
      <motion.div variants={staggerContainer} className="grid md:grid-cols-12 gap-12">
        <motion.div variants={fadeInUp} className="md:col-span-4">
          <h2 className="text-sm font-bold tracking-widest text-primary dark:text-primary-dark uppercase mb-4">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Based in Lagos, delivering global impact.</h3>
        </motion.div>
        <motion.div variants={fadeInUp} className="md:col-span-8">
          <p className="text-lg text-gray-600 dark:text-dark-muted leading-relaxed mb-6">
            {PERSONAL_INFO.summary}
          </p>
          <p className="text-lg text-gray-600 dark:text-dark-muted leading-relaxed">
            I approach software development with a strategic mindset, focusing on <span className="text-gray-900 dark:text-gray-200 font-medium">scalability, maintainability, and business value</span>. 
            Whether architecting a complex backend system in Node.js or crafting a pixel-perfect interface in React Native, 
            my goal is to write clean code that drives efficiency and growth.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mt-10 border-t border-gray-200 dark:border-gray-800 pt-8">
            <div>
               <h4 className="font-bold text-gray-900 dark:text-white text-5xl mb-1">4+</h4>
               <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Years Experience</p>
            </div>
            <div>
               <h4 className="font-bold text-gray-900 dark:text-white text-5xl mb-1">15+</h4>
               <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Projects Delivered</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;