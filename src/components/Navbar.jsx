import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react"; 

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ];

  // Logic to track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Navbar background change
      setScrolled(window.scrollY > 20);

      // 2. Scroll Spy: Detect which section is in view
      const sectionIds = navItems.map(item => item.link.replace('#', ''));
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the screen
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lightColors = {
    navBg: scrolled ? 'bg-white/90 shadow-md' : 'bg-orange-50/50',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    textActive: 'text-orange-600',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  };

  const darkColors = {
    navBg: scrolled ? 'bg-gray-900/90 shadow-2xl border-b border-gray-800' : 'bg-gray-900/40',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textHover: 'text-orange-400',
    textActive: 'text-orange-400',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-between w-full max-w-4xl ${colors.navBg} backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/10`}
        >
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className={`text-xl font-black tracking-tighter ${colors.textPrimary}`}>
              SOHAM<span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative group"
              >
                <span className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? colors.textActive
                    : `${colors.textSecondary} group-hover:text-orange-500`
                }`}>
                  {item.name}
                </span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r rounded-full ${colors.indicator}`}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:block px-6 py-2 text-sm font-bold uppercase tracking-tighter rounded-xl bg-gradient-to-r ${colors.button} text-white shadow-lg`}
            >
              Hire Me
            </motion.a>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className={colors.textPrimary} /> : <Menu className={colors.textPrimary} />}
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-24 left-4 right-4 p-6 rounded-3xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-xl'} lg:hidden`}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.link} 
                  onClick={() => handleNavClick(item.name)}
                  className={`text-lg font-bold text-center ${activeSection === item.name.toLowerCase() ? 'text-orange-500' : colors.textSecondary}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;