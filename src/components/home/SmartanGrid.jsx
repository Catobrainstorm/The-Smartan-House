import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { smartans } from '../../data/smartans';

const SmartanGrid = () => {
  const [selectedSmartan, setSelectedSmartan] = useState(null);
  const [filter, setFilter] = useState('all');

  const roles = ['all', ...new Set(smartans.map(s => s.role).filter(Boolean))];

  const filteredSmartans = filter === 'all' 
    ? smartans 
    : smartans.filter(s => s.role === filter);

  return (
    <AnimatedSection 
      className="py-24 bg-gradient-to-b from-smartan-navy to-smartan-navy/50"
      dataSection="Smartans"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-gradient">Meet The</span>
            <br />
            <span>Smartans</span>
          </h2>
          <p className="text-xl text-smartan-gray max-w-3xl mx-auto">
            The brilliant minds transforming communities and building Africa's future
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {roles.map((role, index) => (
            <motion.button
              key={role}
              onClick={() => setFilter(role)}
              className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${
                filter === role
                  ? 'bg-gradient-to-r from-smartan-orange to-smartan-pink'
                  : 'glass-effect hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {role === 'all' ? 'All Smartans' : role}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSmartans.map((smartan, index) => (
              <SmartanCard
                key={smartan.name}
                smartan={smartan}
                index={index}
                onClick={() => setSelectedSmartan(smartan)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSmartan && (
          <SmartanModal
            smartan={selectedSmartan}
            onClose={() => setSelectedSmartan(null)}
          />
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};

const SmartanCard = ({ smartan, index, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden glass-effect">
        {/* Image */}
        <img
          src={smartan.image || '/api/placeholder/300/300'}
          alt={smartan.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-smartan-navy via-smartan-navy/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <h3 className="font-bold text-sm md:text-base line-clamp-1">
            {smartan.name}
          </h3>
          {smartan.role && (
            <p className="text-xs text-smartan-orange opacity-0 group-hover:opacity-100 transition-opacity">
              {smartan.role}
            </p>
          )}
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-smartan-orange opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

const SmartanModal = ({ smartan, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[999] flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-effect rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src={smartan.image || '/api/placeholder/300/300'}
              alt={smartan.name}
              className="w-full aspect-square object-cover rounded-2xl"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-display font-bold mb-2 text-gradient">
              {smartan.name}
            </h2>
            {smartan.role && (
              <p className="text-smartan-orange font-semibold mb-4">
                {smartan.role}
              </p>
            )}
            {smartan.bio && (
              <p className="text-smartan-gray leading-relaxed mb-6">
                {smartan.bio}
              </p>
            )}
            {smartan.skills && (
              <div className="flex flex-wrap gap-2 mb-6">
                {smartan.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-smartan-orange/20 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-smartan-orange/20 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SmartanGrid;