import React from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 },
        { name: 'Tailwind CSS', level: 92 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Python', level: 88 },
        { name: 'Java', level: 75 },
        { name: 'APIs', level: 80 },
        { name: 'Databases', level: 78 }
      ]
    },
    {
      icon: Brain,
      title: 'AI/ML & Data Science',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Machine Learning', level: 70 },
        { name: 'Data Science', level: 68 },
        { name: 'Data Visualization', level: 75 },
        { name: 'Python Libraries', level: 72 },
        { name: 'Statistics', level: 65 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 70 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Problem Solving', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and ongoing learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map(({ icon: Icon, title, color, skills }) => (
            <div key={title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mr-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              </div>

              <div className="space-y-6">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{name}</span>
                      <span className="text-gray-500 text-sm">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;