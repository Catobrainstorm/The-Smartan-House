// ============================================
// src/pages/Gallery.jsx - FIXED VERSION
// ============================================
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  
  // FIXED: Each image now has a unique src using Unsplash with unique IDs
  const images = [
    { id: 1, src: '/images/gallery/gallery1.jpg', title: 'Smartans at BIMUN', category: 'Event' },
    { id: 2, src: '/images/gallery/gallery2.jpg', title: 'Smartan Session', category: 'Community' },
    { id: 3, src: '/images/gallery/gallery3.jpg', title: 'Smartan Tosin at ALA', category: 'Event' },
    { id: 4, src: '/images/gallery/gallery4.jpg', title: 'Smartan at Telex Owutu 1', category: 'Event' },
    { id: 5, src: '/images/gallery/gallery5.jpg', title: 'Smartan at Telex Owutu 2', category: 'Event' },
    { id: 6, src: '/images/gallery/gallery6.jpg', title: 'Smartan at Telex Owutu 3', category: 'Event' },
    { id: 7, src: '/images/gallery/gallery7.jpg', title: 'Smartan Culture Crucible Cohort 3', category: 'Crucible' },
    { id: 8, src: '/images/gallery/gallery8.jpg', title: 'Editi Efiong Visited Smartan house', category: 'Event' },
    { id: 9, src: '/images/gallery/gallery9.jpg', title: 'Ms. Jagun visited Smartan House', category: 'Event' },
    { id: 10, src: '/images/gallery/gallery10.jpg', title: 'Iyin Aboyeji Visited Smartan House', category: 'Event' },
    { id: 11, src: '/images/gallery/gallery11.jpg', title: 'Live Session with Mr Dapo (CFO of NNPC)', category: 'Community' },
    { id: 12, src: '/images/gallery/gallery12.jpg', title: 'Editi Efiong visite the Smartan House 2', category: 'Event' },
    { id: 13, src: '/images/gallery/gallery13.jpg', title: 'Try it on AI visted Smartan House', category: 'Event' },
    { id: 14, src: '/images/gallery/gallery14.jpg', title: 'Black Fest 2023', category: 'Event' },
    { id: 15, src: '/images/gallery/gallery15.jpg', title: 'Smartans', category: 'Community' },
    { id: 16, src: '/images/gallery/gallery16.jpg', title: 'CKA in Smartan House', category: 'Event' },
    { id: 17, src: '/images/gallery/gallery17.jpg', title: 'Smartan Playing Chess', category: 'Community' },
    { id: 18, src: '/images/gallery/gallery18.jpg', title: 'Nathan Landman Visits Smartan House', category: 'Event' },
    { id: 19, src: '/images/gallery/gallery19.jpg', title: 'Leap Africa Visits Smartan House', category: 'Event' },
    { id: 20, src: '/images/gallery/gallery20.jpg', title: 'Ms. Oniyintan Visits Smartan House', category: 'Event' },
    { id: 21, src: '/images/gallery/gallery21.jpg', title: 'Smartans 2', category: 'Community' },
    { id: 22, src: '/images/gallery/gallery22.jpg', title: 'iyin Aboyeji to Smartan House 2', category: 'Community' },
    { id: 23, src: '/images/gallery/gallery23.jpg', title: 'Iyin Visits to Smartan House 3', category: 'Event' },
    { id: 24, src: '/images/gallery/gallery24.jpg', title: 'Crucible Cohort 2', category: 'Crucible' },
  ];

  const categories = ['all', 'Culture Series', 'Crucible', 'Community', 'Event'];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="pt-24">
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              <span className="text-gradient">Our</span> Gallery
            </h1>
            <p className="text-xl text-smartan-gray max-w-3xl mx-auto">
              Capturing moments of transformation, growth, and impact
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-smartan-orange to-smartan-pink'
                    : 'glass-effect hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Image Counter */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-smartan-gray">
              Showing <span className="text-smartan-orange font-bold">{filteredImages.length}</span> {filter === 'all' ? 'images' : `${filter} images`}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: idx * 0.03 }}
                  className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-smartan-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-bold text-sm line-clamp-1">{img.title}</p>
                      <p className="text-xs text-smartan-orange">{img.category}</p>
                    </div>
                  </div>
                  
                  {/* Border effect on hover */}
                  <div className="absolute inset-0 border-2 border-smartan-orange rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-2xl text-smartan-gray">No images found in this category</p>
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-smartan-orange/20 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Details */}
            <div className="absolute top-6 left-6 glass-effect rounded-2xl px-6 py-3">
              <p className="font-bold">{selectedImage.title}</p>
              <p className="text-sm text-smartan-orange">{selectedImage.category}</p>
            </div>

            {/* Main Image */}
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-effect rounded-full px-6 py-3">
              <p className="text-sm text-smartan-gray">Click outside to close</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;