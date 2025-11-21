import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-24">
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              <span className="text-gradient">Get In</span> Touch
            </h1>
            <p className="text-xl text-smartan-gray max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div className="glass-effect rounded-3xl p-8" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-orange focus:outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-orange focus:outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-orange focus:outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-orange focus:outline-none resize-none" required />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="space-y-6" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="glass-effect rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-smartan-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="w-7 h-7 text-smartan-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Location</h3>
                    <p className="text-smartan-gray">Plot 2, Omotayo Street, Agric, Ikorodu, Lagos State</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-smartan-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiMail className="w-7 h-7 text-smartan-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a href="mailto:thesmartanhouse@gmail.com" className="text-smartan-gray hover:text-smartan-blue">
                      thesmartanhouse@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-smartan-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiPhone className="w-7 h-7 text-smartan-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-smartan-gray">+234 803 993 5728<br />+234 814 454 4490</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;