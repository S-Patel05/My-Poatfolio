import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Database,
  Layout,
  Code2,
  Cpu,
  Globe,
  Layers,
  ChevronRight
} from 'lucide-react';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      description: "Building responsive and interactive user interfaces.",
      skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Backend",
      icon: <Database size={24} />,
      description: "Designing scalable server-side logic and databases.",
      skills: ["Node.js", "Express", "MongoDB"]
    },
    {
      title: "Programming",
      icon: <Code2 size={24} />,
      description: "Core languages used for logic and system design.",
      skills: ["JavaScript", "Python", "Java", "C++", "SQL"]
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal size={24} />,
      description: "Streamlining deployment and development workflows.",
      skills: [ "Git/GitHub", "Render"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-sm font-bold tracking-widest uppercase"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            My Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Skill</span>
          </motion.h2>
          <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I combine cutting-edge technologies with clean code practices to deliver high-performance digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className={`relative group p-8 rounded-[2rem] border transition-all duration-500 ${
                darkMode 
                  ? 'bg-gray-900/40 border-gray-800 hover:border-orange-500/50 hover:bg-gray-900/60' 
                  : 'bg-white border-gray-100 hover:border-orange-500/30 shadow-2xl shadow-gray-200/50'
              }`}
            >
              {/* Icon & Title */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                darkMode ? 'bg-orange-500/10 text-orange-500' : 'bg-orange-50 text-orange-600'
              }`}>
                {category.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {category.title}
              </h3>
              
              <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {category.description}
              </p>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, sIndex) => (
                  <li 
                    key={sIndex}
                    className={`flex items-center gap-2 text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <ChevronRight size={14} className="text-orange-500" />
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Tech Badges Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-gray-800/20 flex flex-wrap justify-center items-center gap-12 opacity-30 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0"
        >
          <div className="flex flex-col items-center gap-2">
             <Globe size={32} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
             <span className="text-[10px] uppercase tracking-widest font-bold">Web3 Ready</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <Cpu size={32} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
             <span className="text-[10px] uppercase tracking-widest font-bold">Optimization</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <Layers size={32} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
             <span className="text-[10px] uppercase tracking-widest font-bold">Architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;