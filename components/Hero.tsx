import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Smartphone, Database, Code as CodeIcon, Download, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 relative overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-20 -z-10 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-0 -right-20 -z-10 w-[500px] h-[500px] bg-secondary/20 dark:bg-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary"></span>
            <p className="text-gray-600 dark:text-gray-300 font-bold tracking-wide uppercase text-sm">
              {PERSONAL_INFO.location}
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6"
          >
            Building Scalable <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-tertiary to-secondary animate-gradient-x">
              Digital Solutions.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-dark-muted leading-relaxed mb-8 max-w-lg font-light"
          >
            I am <strong className="text-gray-900 dark:text-white font-semibold">Chukwuemeka Ekine</strong>, a junior Software Engineer crafting high-performance web and mobile applications with modern architectures.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('projects');
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="inline-flex justify-center items-center px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:bg-primary dark:hover:bg-gray-200 transition-colors duration-300 rounded-lg shadow-xl shadow-primary/10"
            >
              View My Work
            </a>
            <a 
              href="./assets/Chukwuemeka_Ekine_CV.pdf"
              download="Chukwuemeka_Ekine_CV.pdf"
              className="inline-flex justify-center items-center gap-2 px-8 py-3.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors duration-300 rounded-lg group"
            >
              <FileText size={20} className="group-hover:-translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="mt-12 flex gap-6 text-gray-500 dark:text-gray-400"
          >
              <a href="https://linkedin.com/in/chukwuemeka-ekine-07560b290" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-secondary dark:hover:text-secondary transition-colors transform hover:scale-110 duration-200">
                <Mail size={24} />
              </a>
          </motion.div>
        </div>

        {/* Right Column: Animated Code Editor Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="order-1 md:order-2 flex justify-center md:justify-end relative perspective-1000"
        >
           {/* Decorative Glow */}
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-tertiary/30 rounded-full blur-[80px] transform scale-75"></div>

           <motion.div
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10 w-full max-w-lg"
           >
              {/* Code Window */}
              <div className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden transform transition-transform hover:scale-[1.02] duration-300 font-sans">
                  {/* Window Header */}
                  <div className="bg-[#2d2d2d] px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                     <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                     </div>
                     <div className="text-xs text-gray-400 font-mono">Portfolio.tsx</div>
                     <div className="w-10"></div> {/* Spacer for alignment */}
                  </div>

                  {/* Code Area */}
                  <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                      <div className="text-gray-400 mb-2">// Initializing Senior Developer Profile</div>
                      
                      <div className="text-purple-400">const <span className="text-yellow-300">Engineer</span> <span className="text-white">=</span> <span className="text-blue-300">{`{`}</span></div>
                      
                      <div className="pl-4">
                        <span className="text-blue-400">name</span><span className="text-white">:</span> <span className="text-green-400">'Chukwuemeka'</span><span className="text-white">,</span>
                      </div>
                      
                      <div className="pl-4">
                        <span className="text-blue-400">role</span><span className="text-white">:</span> <span className="text-green-400">'Senior Software Engineer'</span><span className="text-white">,</span>
                      </div>
                      
                      <div className="pl-4">
                        <span className="text-blue-400">stack</span><span className="text-white">:</span> <span className="text-white">[</span>
                          <span className="text-orange-400">'React'</span><span className="text-white">, </span>
                          <span className="text-orange-400">'Next.js'</span><span className="text-white">, </span>
                          <span className="text-orange-400">'Node'</span>
                        <span className="text-white">],</span>
                      </div>

                      <div className="pl-4">
                        <span className="text-purple-400">hardWorker</span><span className="text-white">:</span> <span className="text-blue-500">true</span><span className="text-white">,</span>
                      </div>

                      <div className="pl-4">
                         <span className="text-purple-400">problemSolver</span><span className="text-white">:</span> <span className="text-blue-500">true</span><span className="text-white">,</span>
                      </div>

                      <div className="pl-4">
                         <span className="text-purple-400">hireable</span><span className="text-white">:</span> <span className="text-white">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-blue-300">{`{`}</span>
                      </div>
                      
                      <div className="pl-8">
                         <span className="text-purple-400">return</span> <span className="text-blue-500">true</span><span className="text-white">;</span>
                      </div>

                      <div className="pl-4 text-blue-300">{`}`}</div>
                      <div className="text-blue-300 flex items-center">
                        {`}`}
                        <motion.div 
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="w-2.5 h-5 bg-primary ml-1"
                        />
                      </div>
                  </div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -right-6 -top-6 w-14 h-14 bg-[#20232a] rounded-xl flex items-center justify-center shadow-lg border border-gray-700"
              >
                 <CodeIcon className="text-[#61dafb]" size={28} />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -left-6 bottom-10 w-12 h-12 bg-white dark:bg-[#1a1a1a] rounded-xl flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700"
              >
                 <Smartphone className="text-purple-500" size={24} />
              </motion.div>

              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute right-10 -bottom-5 w-12 h-12 bg-white dark:bg-[#1a1a1a] rounded-xl flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700"
              >
                 <Database className="text-emerald-500" size={24} />
              </motion.div>

           </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <ArrowDown className="text-gray-400 dark:text-gray-600 animate-bounce" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;