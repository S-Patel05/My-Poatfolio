import React from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, CheckCircle } from 'lucide-react';

// STABLE GITHUB ICON (Optional here, but kept for consistency)
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const HireMe = ({ darkMode }) => {
  return (
    <section className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative overflow-hidden rounded-[3rem] bg-linear-to-r from-orange-500 to-amber-600 p-8 md:p-16 text-white shadow-2xl shadow-orange-500/20"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md mb-6 border border-white/30 text-sm font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for new projects
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Got a project in mind? Let's make it happen.
            </h2>
            
            <p className="text-lg opacity-90 mb-8 max-w-md">
              I'm looking for opportunities to contribute to innovative projects and grow alongside a dynamic team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-orange-600 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl"
              >
                Start a Conversation
                <Send size={18} />
              </motion.a>
              
              <motion.a
                href="https://github.com/S-Patel05"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black/20 backdrop-blur-md text-white border border-white/30 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black/30 transition-all"
              >
                Visit GitHub
                <GithubIcon />
              </motion.a>
            </div>
          </div>

          {/* Right Column: Key Selling Points */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Fast Delivery", desc: "Efficient workflows", icon: <Calendar className="text-orange-200" /> },
              { title: "Clean Code", desc: "Scalable architecture", icon: <CheckCircle className="text-orange-200" /> },
              { title: "Modern Tech", desc: "Latest stack usage", icon: <CheckCircle className="text-orange-200" /> },
              { title: "UX Focused", desc: "User-centric design", icon: <CheckCircle className="text-orange-200" /> }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <div className="mb-3">{item.icon}</div>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-sm opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default HireMe;