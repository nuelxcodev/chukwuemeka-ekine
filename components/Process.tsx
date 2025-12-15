import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { fadeInUp, staggerContainer } from './ui/SectionWrapper';
import { WORK_PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <SectionWrapper id="process" className="bg-white dark:bg-dark-bg">
      <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Workflow</h2>
        <p className="text-gray-600 dark:text-gray-400">
          A methodical approach to software engineering ensures that every project is delivered with quality, reliability, and scalability in mind.
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-tertiary to-secondary opacity-30 -z-10" />

        {WORK_PROCESS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div key={idx} variants={fadeInUp} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white dark:bg-dark-bg border-4 border-gray-50 dark:border-gray-800 rounded-full flex items-center justify-center mb-6 shadow-sm z-10 group hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
                <Icon size={32} className="text-gray-400 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              <div className="absolute top-0 right-0 left-0 flex justify-center -z-10 opacity-0 md:opacity-100">
                 <span className="bg-white dark:bg-dark-bg px-2 text-xs font-bold text-secondary dark:text-secondary-dark tracking-widest uppercase mt-9">
                   Step 0{idx + 1}
                 </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed px-2">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default Process;