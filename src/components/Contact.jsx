import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// --- CUSTOM SVG ICONS ---
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  // Reusable style for inputs to keep code clean and fix visibility
  const inputStyle = `w-full p-4 rounded-xl outline-none border transition-all placeholder-gray-400 ${
    darkMode 
      ? 'bg-gray-800 border-gray-700 text-white focus:border-orange-500' 
      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-orange-500 shadow-sm'
  }`;

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Get In <span className="text-orange-500">Touch</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Info</h3>
            
            <div className="space-y-4">
              <div className={`p-6 rounded-2xl flex items-center gap-4 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-md'}`}>
                <Mail className="text-orange-500" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600 font-medium'}>soham@example.com</span>
              </div>
              <div className={`p-6 rounded-2xl flex items-center gap-4 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-md'}`}>
                <MapPin className="text-orange-500" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600 font-medium'}>Kudasan, Gujarat, India</span>
              </div>
            </div>

            {/* Social Row */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: <GithubIcon />, url: "#" },
                { icon: <LinkedinIcon />, url: "#" },
                { icon: <InstagramIcon />, url: "#" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.url}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    darkMode 
                      ? 'bg-gray-800 text-white hover:bg-orange-500' 
                      : 'bg-white text-gray-700 shadow-md hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-2xl'}`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <input 
                type="text" 
                placeholder="Name"
                className={inputStyle}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Email"
                className={inputStyle}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <textarea 
                placeholder="Message" 
                rows="4"
                className={inputStyle}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30">
                Send <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;