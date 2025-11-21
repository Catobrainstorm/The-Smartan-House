import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { 
      name: 'Explore', 
      dropdown: [
        { name: 'Gallery', path: '/gallery' },
        { name: 'War Room', path: '/war-room' }
      ]
    },
    { name: 'News', path: '/news' },
    { name: 'Culture Series', path: '/culture-series' },
    { name: 'Campaign', path: '/campaign' },
    { 
      name: 'Donate', 
      dropdown: [
        { name: 'CNG', path: '/cng' },
        { name: 'Consortium', path: '/consortium' }
      ]
    },
    { name: 'Culture Course', path: '/culture-course' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 relative z-50">
              <img src='images/logo.png' alt='Smartan House' className="h-12" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <NavItem key={index} link={link} />
              ))}
            </div>

            {/* Mobile Menu Button - Always on top */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-3xl relative z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            navLinks={navLinks} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

const NavItem = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (link.dropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="hover:text-smartan-orange transition-colors">
          {link.name}
        </button>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 glass-effect rounded-xl p-4 min-w-[200px]"
            >
              {link.dropdown.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="block py-2 hover:text-smartan-orange transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={link.path}
      className="hover:text-smartan-orange transition-colors relative group"
    >
      {link.name}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-smartan-orange group-hover:w-full transition-all duration-300" />
    </Link>
  );
};

const MobileMenu = ({ navLinks, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="lg:hidden fixed inset-0 bg-smartan-navy/98 backdrop-blur-xl z-40"
    >
      {/* Scrollable Content Container */}
      <div className="h-full overflow-y-auto pt-24 pb-8">
        <div className="container mx-auto px-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="py-4 border-b border-white/10"
            >
              {link.dropdown ? (
                <div>
                  <p className="text-xl font-semibold mb-3 text-smartan-orange">{link.name}</p>
                  {link.dropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={onClose}
                      className="block py-3 pl-4 text-lg text-smartan-gray hover:text-smartan-orange transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={onClose}
                  className="block text-xl font-semibold hover:text-smartan-orange transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;