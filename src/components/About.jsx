import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, Globe, Cpu, Smartphone } from 'lucide-react';

const About = ({ darkMode }) => {
  // Stats Data
  const stats = [

    { label: 'Projects Completed', value: '15+' },
    { label: 'Happy Clients', value: '5+' },
  ];

  // Skills Data
  const skills = [
    { name: 'Frontend', icon: <Code size={20} />, level: '90%' },
    { name: 'Backend', icon: <Database size={20} />, level: '85%' },
    { name: 'Mobile', icon: <Smartphone size={20} />, level: '70%' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className={`relative z-10 rounded-2xl overflow-hidden border-2 ${darkMode ? 'border-gray-700' : 'border-gray-100 shadow-xl'}`}>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="About Workspace" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl "></div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Professional <span className="text-orange-500">Full Stack Developer</span>
            </h3>
            
            <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              I am a passionate developer dedicated to crafting seamless digital experiences. 
              My journey in tech is driven by curiosity and a commitment to solving complex 
              problems through clean, efficient code.
            </p>

            {/* Experience Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                  <h4 className="text-2xl font-bold text-orange-500">{stat.value}</h4>
                  <p className={`text-xs uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills Progress Bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className={`flex items-center gap-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {skill.icon} {skill.name}
                    </span>
                    <span className="text-orange-500 font-bold">{skill.level}</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-linear-to-r from-orange-500 to-amber-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;