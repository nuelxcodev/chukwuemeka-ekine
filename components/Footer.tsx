import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-dark-bg py-12 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="font-bold text-gray-900 dark:text-white text-lg">C. E. Ekine</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 bg-gray-50 dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-colors group border border-gray-100 dark:border-gray-700"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;