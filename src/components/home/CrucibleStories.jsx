import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const CrucibleStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      image: '/images/crucible/crucible03.webp',
      title: 'Week 1: The Awakening',
      description: 'Smartans begin their transformative journey, discovering their potential',
      category: 'Discovery'
    },
    {
      image: '/images/crucible/crucible05.webp',
      title: 'Week 3: Building Confidence',
      description: 'Public speaking workshops unlock hidden communication talents',
      category: 'Growth'
    },
    {
      image: '/images/crucible/crucible06.webp',
      title: 'Week 5: Leadership Emerge',
      description: 'Team projects reveal natural leaders and collaborative spirits',
      category: 'Leadership'
    },
    {
      image: '/images/crucible/crucible04.webp',
      title: 'Week 6: Tech Innovation',
      description: 'Hands-on tech sessions spark creativity and digital literacy',
      category: 'Innovation'
    },
    {
      image: '/images/crucible/crucible10.webp',
      title: 'Week 8: Transformation',
      description: 'Graduation day - witnessing the incredible metamorphosis',
      category: 'Achievement'
    },
    {
      image: '/images/crucible/crucible01.webp',
      title: 'Community Impact',
      description: 'Smartans return to their communities as change agents',
      category: 'Impact'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <AnimatedSection 
      className="py-24 bg-smartan-navy relative overflow-hidden"
      dataSection="Stories"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-smartan-pink/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-smartan-blue/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-gradient">Crucible</span>
            <br />
            <span>Stories</span>
          </h2>
          <p className="text-xl text-smartan-gray max-w-3xl mx-auto">
            Capturing transformative moments from our 2-week journey of discovery and growth
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Image */}
                  <img
                    src={stories[currentIndex].image}
                    alt={stories[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-smartan-navy via-smartan-navy/60 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block px-4 py-2 bg-smartan-orange/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-4"
                    >
                      {stories[currentIndex].category}
                    </motion.span>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-5xl font-bold mb-4"
                    >
                      {stories[currentIndex].title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-smartan-gray max-w-2xl"
                    >
                      {stories[currentIndex].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'w-12 h-3 bg-gradient-to-r from-smartan-orange to-smartan-pink'
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  } rounded-full`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
            {stories.map((story, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-video rounded-lg overflow-hidden ${
                  index === currentIndex ? 'ring-4 ring-smartan-orange' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  index === currentIndex ? 'bg-smartan-orange/30' : 'bg-black/50'
                } transition-all`} />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CrucibleStories;