import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bhardwajvikash240@gmail.com',
      href: 'mailto:bhardwajvikash240@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 70XXXXXXX',
      href: 'tel:+9170XXXXXXX',
      color: 'text-emerald-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Gurgaon , India',
      href: '#',
      color: 'text-orange-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/vikash893',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vikash-bhardwaj-ab16b5325/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      color: 'hover:text-pink-500'
    }
  ];

  // return (
  //   <section id="contact" className="py-20 bg-white">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="text-center mb-16">
  //         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
  //           Let's Connect
  //         </h2>
  //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  //           Ready to collaborate on exciting projects or just want to chat about technology? 
  //           I'd love to hear from you!
  //         </p>
  //       </div>

  //       <div className="grid lg:grid-cols-2 gap-16">
  //         {/* Contact Information */}
  //         <div>
  //           <h3 className="text-2xl font-bold text-gray-900 mb-8">
  //             Get In Touch
  //           </h3>
            
  //           <div className="space-y-6 mb-12">
  //             {contactInfo.map(({ icon: Icon, title, value, href, color }) => (
  //               <a
  //                 key={title}
  //                 href={href}
  //                 className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group"
  //               >
  //                 <div className={`w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center ${color}`}>
  //                   <Icon size={24} />
  //                 </div>
  //                 <div>
  //                   <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
  //                     {title}
  //                   </h4>
  //                   <p className="text-gray-600">{value}</p>
  //                 </div>
  //               </a>
  //             ))}
  //           </div>

  //           {/* Social Links */}
  //           <div>
  //             <h4 className="text-lg font-semibold text-gray-900 mb-6">
  //               Follow Me
  //             </h4>
  //             <div className="flex space-x-4">
  //               {socialLinks.map(({ icon: Icon, name, href, color }) => (
  //                 <a
  //                   key={name}
  //                   href={href}
  //                   className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${color} transform hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg`}
  //                   aria-label={name}
  //                 >
  //                   <Icon size={20} />
  //                 </a>
  //               ))}
  //             </div>
  //           </div>

  //           {/* Additional Image */}
  //           <div className="mt-12 hidden lg:block">
  //             <img
  //               src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
  //               alt="Contact"
  //               className="w-full h-64 object-cover rounded-2xl shadow-lg"
  //             />
  //           </div>
  //         </div>

  //         {/* Contact Form */}
  //         <div className="bg-gray-50 p-8 rounded-2xl">
  //           <h3 className="text-2xl font-bold text-gray-900 mb-8">
  //             Send a Message
  //           </h3>

  //           <form onSubmit={handleSubmit} className="space-y-6">
  //             <div className="grid md:grid-cols-2 gap-6">
  //               <div>
  //                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
  //                   Full Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   id="name"
  //                   name="name"
  //                   value={formData.name}
  //                   onChange={handleChange}
  //                   required
  //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
  //                   placeholder="Your Name"
  //                 />
  //               </div>
  //               <div>
  //                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
  //                   Email Address
  //                 </label>
  //                 <input
  //                   type="email"
  //                   id="email"
  //                   name="email"
  //                   value={formData.email}
  //                   onChange={handleChange}
  //                   required
  //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
  //                   placeholder="your.email@example.com"
  //                 />
  //               </div>
  //             </div>

  //             <div>
  //               <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
  //                 Subject
  //               </label>
  //               <input
  //                 type="text"
  //                 id="subject"
  //                 name="subject"
  //                 value={formData.subject}
  //                 onChange={handleChange}
  //                 required
  //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
  //                 placeholder="What's this about?"
  //               />
  //             </div>

  //             <div>
  //               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
  //                 Message
  //               </label>
  //               <textarea
  //                 id="message"
  //                 name="message"
  //                 value={formData.message}
  //                 onChange={handleChange}
  //                 required
  //                 rows={6}
  //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
  //                 placeholder="Tell me about your project or just say hello!"
  //               />
  //             </div>

  //             <button
  //               type="submit"
  //               className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
  //             >
  //               <Send size={20} />
  //               <span>Send Message</span>
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Contact;