import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hello, I'm
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> Vikash </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              B.Tech 2nd year student passionate about full-stack development, AI/ML, and creating innovative digital experiences.
              Specializing in modern web technologies with a keen interest in data science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => window.open('/Vikash.pdf', '_blank')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                 Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              {[
                { Icon: Github, href: 'https://github.com/vikash893', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/vikash-bhardwaj-ab16b5325/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:bhardwajvikash240@gmail.com', label: 'Email' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/image.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;