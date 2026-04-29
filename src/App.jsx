import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import HireMe from "./components/HireMe.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    // Set initial theme on the document element
    document.documentElement.classList.add('dark');
  }, []);

// ✅ CORRECT
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 100
  });
  document.documentElement.classList.add('dark');
}, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Toggle the 'dark' class for Tailwind CSS dark mode support
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={
      darkMode 
        ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen' 
        : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode}></About>
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <HireMe darkMode={darkMode} />
    </div>
  );
}

export default App;