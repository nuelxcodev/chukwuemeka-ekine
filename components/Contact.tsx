import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { fadeInUp, staggerContainer } from './ui/SectionWrapper';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    alert('Email copied to clipboard!');
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-900 dark:bg-slate-900 text-white border-t border-gray-800">
      <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-16">
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let's build something great.</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            I am actively seeking opportunities to contribute my engineering expertise to forward-thinking teams. 
            Reach out to discuss how we can drive your technical vision forward.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center group cursor-pointer" onClick={handleCopyEmail}>
              <div className="w-12 h-12 bg-gray-800 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary dark:group-hover:bg-primary transition-colors">
                <Mail size={20} className="text-gray-300 group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-medium text-white">{PERSONAL_INFO.email}</p>
                  <Copy size={14} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="w-12 h-12 bg-gray-800 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary dark:group-hover:bg-primary transition-colors">
                <Phone size={20} className="text-gray-300 group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                <p className="text-lg font-medium text-white">{PERSONAL_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="w-12 h-12 bg-gray-800 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary dark:group-hover:bg-primary transition-colors">
                <MapPin size={20} className="text-gray-300 group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
                <p className="text-lg font-medium text-white">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form variants={fadeInUp} className="bg-white dark:bg-slate-800 p-8 rounded-sm shadow-xl dark:shadow-none" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a message</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-dark text-gray-900 dark:text-white rounded-sm transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-dark text-gray-900 dark:text-white rounded-sm transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-dark text-gray-900 dark:text-white rounded-sm resize-none transition-colors"
                placeholder="How can I help you?"
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-gray-900 dark:bg-primary text-white font-bold tracking-wide hover:bg-black dark:hover:bg-primary-hover transition-colors duration-300 rounded-sm shadow-lg dark:shadow-primary/20 uppercase"
            >
              SEND MESSAGE
            </button>
          </div>
        </motion.form>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;