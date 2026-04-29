import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import CV from '../assets/CV.pdf';
import img from '../assets/Photo.png';

const Hero = ({ darkMode }) => {
  const socialLinks = [
    { name: "Github", icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", url: "https://github.com/S-Patel05" },
    { name: "Linkedin", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png", url: "https://www.linkedin.com/in/soham-patel-b124a7354/" },
    { name: "Instagram", icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png", url: "https://instagram.com/itz__soham___1556" }
  ];

  const skillLogos = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 text-center lg:text-left order-2 lg:order-1"
        >
          <h3 className={`text-xl font-medium mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
            Hello, I'm
          </h3>
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Soham Patel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Full Stack Developer
            </span>
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <motion.a
              href={CV}
              download="Soham_Patel_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all cursor-pointer"
            >
              <Download size={20} />
              Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-semibold flex items-center gap-2 border-2 transition-all ${
                darkMode ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-200 text-gray-900 hover:bg-gray-50'
              }`}
            >
              View Work
              <ExternalLink size={20} />
            </motion.button>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <span className={`font-semibold uppercase tracking-widest text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Follow Me:
            </span>
            <div className="flex gap-5">
              {socialLinks.map((social, index) => (
                <motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}>
                  <img src={social.icon} alt={social.name} className={`w-6 h-6 object-contain ${darkMode && social.name === "Github" ? "invert" : ""}`} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content: Profile & Fast Floating Logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0"
        >
          {/* Circular Skills Container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
            
            {/* Profile Image */}
            <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full p-1 bg-gradient-to-tr ">
              <div className={`w-full h-full rounded-full overflow-hidden border-4 ${darkMode ? 'border-gray-900' : 'border-white'}`}>
                <img src={img} alt="Soham Patel" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating Logos positioned in a Circle */}
            {skillLogos.map((logo, index) => {
              const angle = (index / skillLogos.length) * (2 * Math.PI);
              // Radius is smaller on mobile (45%) and larger on desktop (50%)
              const radius = 50; 
              
              return (
                <motion.div
                  key={index}
                  className="absolute z-20 p-2 bg-white rounded-full shadow-lg flex items-center justify-center"
                  style={{
                    width: 'clamp(40px, 8vw, 55px)',
                    height: 'clamp(40px, 8vw, 55px)',
                    left: `${50 + radius * Math.cos(angle)}%`,
                    top: `${50 + radius * Math.sin(angle)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <img src={logo.icon} alt={logo.name} className="w-full h-full object-contain p-1" />
                </motion.div>
              );
            })}

            {/* Glow Background */}
            <div className={`absolute inset-0 rounded-full blur-[60px] sm:blur-[100px] opacity-20 ${darkMode ? 'bg-orange-600' : 'bg-orange-400'}`} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;