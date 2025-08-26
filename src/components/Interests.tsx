import React from 'react';
import { Camera, Music, Trophy, Code } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      icon: Trophy,
      title: 'Cricket',
      description: 'Following matches, analyzing player statistics, and understanding game strategies. Cricket fuels my passion for data analysis.',
      image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments and telling stories through images. Photography enhances my eye for design and composition.',
      image: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Discovering new genres and artists. Music provides inspiration and helps me focus during coding sessions.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Technology',
      description: 'Staying updated with latest tech trends, experimenting with new frameworks, and building innovative solutions.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Beyond Coding
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My interests and hobbies that inspire creativity and balance in my life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map(({ icon: Icon, title, description, image, color }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={32} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Life Philosophy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I believe that the best developers are well-rounded individuals who draw inspiration from diverse experiences. 
              Whether it's the strategic thinking from cricket, the aesthetic sense from photography, the rhythm from music, 
              or the problem-solving from technology - each interest contributes to my growth as both a developer and a person.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;