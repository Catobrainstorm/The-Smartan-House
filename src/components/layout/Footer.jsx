import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Gallery', path: '/gallery' },
    ],
    'Programs': [
      { name: 'Culture Series', path: '/culture-series' },
      { name: 'Campaign', path: '/campaign' },
      { name: 'War Room', path: '/war-room' },
      { name: 'Culture Course', path: '/culture-course' },
    ],
    'Get Involved': [
      { name: 'Become a Champion', path: '/cng' },
      { name: 'Join Consortium', path: '/consortium' },
      { name: 'Donate', path: '/cng' },
      { name: 'News & Blogs', path: '/news' },
    ],
  };

  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=100090208773102', color: 'hover:text-blue-500' },
    { icon: FaTwitter, url: 'https://x.com/EliteSmartans', color: 'hover:text-sky-400' },
    { icon: FaInstagram, url: 'https://www.instagram.com/smartanhouse/', color: 'hover:text-pink-500' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/elitesmartanprogramme/posts/?feedView=all', color: 'hover:text-blue-600' },
    { icon: FaYoutube, url: 'https://www.youtube.com/@SmartanTv', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="relative bg-smartan-navy border-t border-white/10 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-smartan-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-smartan-pink/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div>
                  <img src='/images/logo.png' alt='' />
                  <p className="text-sm text-smartan-gray">Raising the Smartan Generation</p>
                </div>
              </Link>
              
              <p className="text-smartan-gray mb-6 leading-relaxed">
                Transforming brilliant young minds from underserved communities into Africa's next generation of transformers, innovators, and leaders.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 glass-effect rounded-full flex items-center justify-center transition-colors ${social.color}`}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gradient">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-smartan-gray hover:text-smartan-orange transition-colors inline-flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-smartan-orange group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/10"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-smartan-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <HiLocationMarker className="text-smartan-orange text-xl" />
            </div>
            <div>
              <h5 className="font-semibold mb-1">Location</h5>
              <p className="text-sm text-smartan-gray">
                Plot 2, Omotayo Street, Agric, Ikorodu, Lagos State
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-smartan-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <HiMail className="text-smartan-blue text-xl" />
            </div>
            <div>
              <h5 className="font-semibold mb-1">Email</h5>
              <a href="mailto:thesmartanhouse@gmail.com" className="text-sm text-smartan-gray hover:text-smartan-blue transition-colors">
                thesmartanhouse@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-smartan-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <HiPhone className="text-smartan-teal text-xl" />
            </div>
            <div>
              <h5 className="font-semibold mb-1">Phone</h5>
              <p className="text-sm text-smartan-gray">
                +234 803 993 5728<br />
                +234 814 454 4490
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
        >
          <p className="text-smartan-gray text-sm">
            © {currentYear} Elite Smartan Project. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-smartan-gray hover:text-smartan-orange transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-smartan-gray hover:text-smartan-orange transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Animated Bottom Line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-smartan-orange via-smartan-pink to-smartan-purple"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </footer>
  );
};

export default Footer;