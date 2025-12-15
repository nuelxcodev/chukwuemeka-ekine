import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionWrapper, { fadeInUp, staggerContainer } from './ui/SectionWrapper';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Helper to generate a consistent color based on string
  const getCompanyColor = (name: string) => {
    const colors = [
      'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
      'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
      'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <SectionWrapper id="experience">
       <motion.div variants={fadeInUp} className="mb-16 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          My professional journey has been defined by solving complex technical challenges and delivering value across diverse industries.
        </p>
      </motion.div>

      <motion.div 
        ref={containerRef}
        variants={staggerContainer} 
        className="relative ml-4 md:ml-12 space-y-12"
      >
        {/* Timeline Track */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700/50 rounded-full transform -translate-x-1/2" />
        
        {/* Animated Progress Line */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary dark:bg-primary-dark origin-top rounded-full transform -translate-x-1/2 z-0" 
        />

        {EXPERIENCE.map((job, idx) => (
          <motion.div key={idx} variants={fadeInUp} className="relative pl-16 md:pl-20 group">
            {/* Company Logo / Icon Placeholder */}
            <div className={`absolute left-0 top-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold shadow-sm z-10 border-4 border-white dark:border-dark-bg ${getCompanyColor(job.company)}`}>
              {job.company.charAt(0)}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">{job.role}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-mono mt-1 sm:mt-0 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-100 dark:border-gray-700">{job.period}</span>
            </div>
            
            <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
              {job.company} <span className="text-gray-300 dark:text-gray-600 mx-2">|</span> <span className="text-gray-500 dark:text-gray-400 text-base font-normal">{job.location}</span>
            </div>
            
            <ul className="space-y-3 mb-6">
              {job.details.map((detail, dIdx) => (
                <li key={dIdx} className="text-gray-600 dark:text-dark-muted leading-relaxed text-base flex items-start">
                  <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full shrink-0"></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Experience;