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
  //  
  // );
};

export default Contact;