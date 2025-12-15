import React from 'react';
import { motion } from 'framer-motion';
import { Server, LayoutTemplate } from 'lucide-react';
import SectionWrapper, { fadeInUp, staggerContainer } from './ui/SectionWrapper';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Helper to determine if we should use a generic Lucide icon or a Simple Icon URL
  const renderIcon = (slug: string, className: string) => {
    if (slug === 'server') return <Server className={className} />;
    if (slug === 'codesandbox') return <LayoutTemplate className={className} />;
    
    // Use Simple Icons CDN
    return (
      <img 
        src={`https://cdn.simpleicons.org/${slug}`} 
        alt="" 
        className={`${className} dark:invert`} 
        loading="lazy"
        width={20}
        height={20}
      />
    );
  };

  return (
    <SectionWrapper id="skills">
      <motion.div variants={fadeInUp} className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Technical Expertise</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
          I leverage a robust stack of modern technologies to build secure, scalable, and high-performance digital products.
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            variants={fadeInUp}
            className="bg-white dark:bg-dark-card p-6 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700/50 px-3 py-2 rounded-md transition-colors group cursor-default"
                >
                  <span className="w-5 h-5 flex items-center justify-center text-gray-400 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                    {renderIcon(skill.icon, "w-4 h-4")}
                  </span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;