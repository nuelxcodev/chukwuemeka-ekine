import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { fadeInUp, staggerContainer } from './ui/SectionWrapper';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  // Color mapping for services to create variety
  const getServiceColor = (index: number) => {
    const colors = [
      'text-primary bg-primary/10 dark:bg-primary/20 border-primary/20',
      'text-secondary bg-secondary/10 dark:bg-secondary/20 border-secondary/20',
      'text-tertiary bg-tertiary/10 dark:bg-tertiary/20 border-tertiary/20',
      'text-orange-500 bg-orange-500/10 dark:bg-orange-500/20 border-orange-500/20',
    ];
    return colors[index % colors.length];
  };

  return (
    <SectionWrapper id="services" className="bg-gray-50 dark:bg-dark-bg/50 border-t border-gray-100 dark:border-gray-800">
      <motion.div variants={fadeInUp} className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Transforming complex requirements into scalable, user-centric digital solutions using cutting-edge technologies.
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;
          const colorClass = getServiceColor(idx);
          // Split classes for icon vs border
          const iconClasses = colorClass.split(' ').slice(0, 2).join(' '); // text & bg
          
          return (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${iconClasses}`}>
                <Icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default Services;