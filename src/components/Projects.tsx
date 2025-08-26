import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/4545978/pexels-photo-4545978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Dec 2024'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard showing weather patterns and trends using Python and machine learning algorithms for weather prediction.',
      image: 'https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Nov 2024'
    },
    {
      title: 'Task Management App',
      description: 'Responsive web application for task management with drag-and-drop functionality, real-time updates, and collaborative features.',
      image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Oct 2024'
    },
    // {
    //   title: 'Cricket Statistics Analyzer',
    //   description: 'Data analysis tool for cricket statistics with interactive visualizations and performance insights using Python and data science libraries.',
    //   image: 'https://images.pexels.com/photos/1585925/pexels-photo-1585925.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Python', 'Jupyter', 'Seaborn', 'Data Analysis'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   date: 'Sep 2024'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work spanning web development, data science, and creative applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      <Tag size={12} className="mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;