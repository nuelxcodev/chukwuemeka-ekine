import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle, User, Calendar, Monitor } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[120px]" />
        </div>

      <div className="mb-20 max-w-4xl relative z-10 mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Featured Projects
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full mx-auto" />
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              Deep dive into my recent work. Each project represents a unique challenge solved through engineering excellence.
            </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 relative z-10 max-w-6xl mx-auto">
        {PROJECTS.map((project, idx) => (
          <InteractiveProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const InteractiveProjectCard = ({ project, index }: { project: Project, index: number }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech'>('overview');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 group h-full"
        >
            {/* Image Section */}
            <div className="w-full relative overflow-hidden h-56 sm:h-64 shrink-0">
                 <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                 </div>
                 
                 {/* Floating Badge */}
                 <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-bold tracking-wide text-white bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-1.5">
                        <Monitor size={12} /> {project.type}
                    </span>
                 </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col flex-grow p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col gap-3 mb-6">
                    <div className="flex justify-between items-start gap-4">
                         <div>
                            <div className="flex items-center gap-2 mb-2 text-primary dark:text-primary-dark text-xs font-bold tracking-widest uppercase">
                                <Calendar size={12} />
                                <span>{project.year}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors line-clamp-1">
                                {project.title}
                            </h3>
                         </div>
                         {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-200 border border-gray-200 dark:border-gray-700 shrink-0"
                                aria-label="View Project"
                            >
                                <ArrowUpRight size={18} />
                            </a>
                        )}
                    </div>
                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                         <User size={14} />
                         <span className="truncate">{project.role}</span>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex border-b border-gray-100 dark:border-gray-700 mb-6 gap-4 sm:gap-6">
                    {(['overview', 'features', 'tech'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 text-sm font-medium transition-colors relative capitalize ${
                                activeTab === tab
                                ? 'text-primary dark:text-primary-dark'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                            }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId={`underline-${index}`}
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="flex-grow">
                    <AnimatePresence mode="wait">
                        {activeTab === 'overview' && (
                            <motion.div
                                key="overview"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="h-full"
                            >
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm line-clamp-4">
                                    {project.description}
                                </p>
                            </motion.div>
                        )}

                        {activeTab === 'features' && (
                            <motion.div
                                key="features"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="h-full"
                            >
                                <div className="grid grid-cols-1 gap-2">
                                    {project.features.slice(0, 3).map((feature, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                            <CheckCircle className="text-secondary shrink-0 mt-0.5" size={14} />
                                            <span className="line-clamp-2">{feature}</span>
                                        </div>
                                    ))}
                                    {project.features.length > 3 && (
                                        <span className="text-xs text-primary dark:text-primary-dark mt-1 font-medium">
                                            +{project.features.length - 3} more features
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'tech' && (
                            <motion.div
                                key="tech"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="h-full"
                            >
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 8).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;