import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate developer constantly learning and building innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/profile2.png"
                alt="About me"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">B.Tech</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Engineering Student & Full-Stack Developer
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Currently pursuing B.Tech (2nd year), I'm passionate about creating digital solutions that make a difference. 
                My journey spans from frontend aesthetics to backend functionality, with a growing expertise in AI and machine learning.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                When I'm not coding, you'll find me capturing moments through photography, following cricket matches, 
                or discovering new music that inspires my creativity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  Icon: User,
                  title: 'Background',
                  description: 'B.Tech 2nd Year Student',
                  color: 'text-blue-600'
                },
                {
                  Icon: Award,
                  title: 'Expertise',
                  description: 'Full-Stack Development',
                  color: 'text-emerald-600'
                },
                {
                  Icon: Target,
                  title: 'Focus',
                  description: 'AI/ML & Data Science',
                  color: 'text-orange-600'
                },
                {
                  Icon: Heart,
                  title: 'Passion',
                  description: 'Cricket & Photography',
                  color: 'text-red-600'
                }
              ].map(({ Icon, title, description, color }) => (
                <div key={title} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <Icon className={`${color} mt-1`} size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;