import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// 1. MANUALLY IMPORT YOUR 6 IMAGES
import proj1 from '../assets/project1.png';
import proj2 from '../assets/project2.png';
import proj3 from '../assets/project3.png';
import proj4 from '../assets/project4.png';
import proj5 from '../assets/project5.png';
import proj6 from '../assets/project6.png';

// 2. STABLE GITHUB ICON (Bypasses Lucide-React Errors)
const GithubIcon = ({ size = 20 }) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" 
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = ({ darkMode }) => {
  const projectData = [
    {
      title: "Real-Time Chat Application",
      description: "A full-stack, secure communication platform that allows users to connect and chat in real-time. This application features a robust authentication system, instant messaging delivery via WebSockets, and a responsive interface designed for seamless use across desktop and mobile devices. It leverages a modern MERN stack to ensure scalability and smooth data management.",
      image: proj1,
      tags: ["React","Express" ,"Node.js", "MongoDB"],
      github: "https://github.com/S-Patel05/chat",
      demo: "https://just-chat-do2w.onrender.com/signup"
    },
    {
      title: "Play Music",
      description: "Play Music is a sleek, high-performance music streaming interface designed for a seamless user experience across all devices. The application features a dynamic audio player with real-time progress tracking, volume controls, and a curated playlist sidebar. By prioritizing a glassmorphism aesthetic and smooth transitions, the project demonstrates a high level of front-end polish and a focus on intuitive navigation for music enthusiasts.",
      image: proj2,
      tags: ["HTML", "CSS", "JS"],
      github: "https://s-patel05.github.io/play_music/",
      demo: "https://s-patel05.github.io/play_music/"
    },
    {
      title: "Urban Company Clone",
      description: "UrbanClone is a technical study in precision front-end development, recreating the sophisticated interface of a leading service marketplace. The project focuses on pixel-perfect replication of complex grid layouts, responsive navigation components, and high-trust visual hierarchies. It serves as a showcase of my ability to translate high-end industry designs into clean, semantic code.",
      image: proj3,
      tags: ["HTML", "CSS", "JS"],
      github: "https://github.com/S-Patel05/urban_company",
      demo: "https://s-patel05.github.io/urban_company/"
    },
    {
      title: "Shop Grocery",
      description: "Shop Grocery is a high-fidelity front-end exploration of a modern e-commerce grocery platform. This project focuses on solving the visual complexity of item-heavy interfaces by using a clean, organized grid system and intuitive category navigation. It serves as a technical demonstration of how to build a high-trust, conversion-focused shopping experience that remains fast and responsive across all devices.",
      image: proj4,
      tags: ["TypeScript", "Chart.js", "SQL"],
      github: "https://github.com/S-Patel05/Shop_Grocery",
      demo: "https://demo.com"
    },
    {
      title: "Crypto Dashboard",
      description: "Live tracking of cryptocurrency prices using CoinGecko API.",
      image: proj5,
      tags: ["React", "Axios", "Framer"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Social Media App",
      description: "Community platform with real-time chat and post sharing.",
      image: proj6,
      tags: ["Socket.io", "React", "Redux"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Latest <span className="text-orange-500">Projects</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-3xl overflow-hidden border transition-all duration-300 group ${
                darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100 shadow-xl shadow-gray-200/50'
              }`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-orange-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-orange-500/10 text-orange-500 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;