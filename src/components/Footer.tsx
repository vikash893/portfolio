import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-lg">Made with</span>
            <Heart className="text-red-500 animate-pulse" size={20} />
            <span className="text-lg">and</span>
            <Code className="text-blue-400" size={20} />
            <span className="text-lg">by a</span>
            <Coffee className="text-yellow-500" size={20} />
            <span className="text-lg">powered developer</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            © 2025 Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              "The best way to predict the future is to invent it." - Alan Kay
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;