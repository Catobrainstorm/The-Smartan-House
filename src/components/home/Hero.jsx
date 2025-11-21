import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [letterIndex, setLetterIndex] = useState(0);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const line1 = "WELCOME TO";
  const line2 = "SMARTAN HOUSE";
  const fullText = line1 + " " + line2;

  useEffect(() => {
    // Letter-by-letter animation
    if (letterIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setLetterIndex(letterIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      // Fade out loading screen after text completes
      setTimeout(() => setLoading(false), 1000);
    }
  }, [letterIndex, fullText.length]);

  useEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        // Parallax effect
        gsap.to(heroRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        // Content reveal
        gsap.from(contentRef.current, {
          opacity: 0,
          y: 50,
          duration: 1.5,
          ease: 'power3.out',
        });
      });

      return () => ctx.revert();
    }
  }, [loading]);

  // Generate floating particles
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const renderText = (text, startIndex) => {
    return text.split('').map((char, index) => {
      const globalIndex = startIndex + index;
      return (
        <motion.span
          key={globalIndex}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: globalIndex < letterIndex ? 1 : 0,
          }}
          className={char === ' ' ? 'inline-block w-4 sm:w-6 md:w-8 lg:w-12' : 'inline-block'}
          style={{
            textShadow: '0 0 40px rgba(247, 150, 29, 0.9), 0 0 80px rgba(236, 41, 123, 0.7)',
          }}
        >
          {char}
        </motion.span>
      );
    });
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-smartan-navy px-4 sm:px-6 md:px-8"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, #f7961d 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, #ec297b 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 80%, #0076c6 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, #f7961d 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Loading text */}
            <div className="relative z-10 w-full max-w-7xl text-center">
              <motion.div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                {/* Line 1: WELCOME TO */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white tracking-wider leading-none">
                  {renderText(line1, 0)}
                </h1>

                {/* Line 2: SMARTAN HOUSE */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white tracking-wider leading-none">
                  {renderText(line2, line1.length + 1)}
                </h1>
              </motion.div>
            </div>

            {/* Loading bar */}
            <motion.div 
              className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-80 h-1 bg-white/20 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: letterIndex > fullText.length * 0.5 ? 1 : 0 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-smartan-orange via-smartan-pink to-smartan-blue"
                initial={{ width: '0%' }}
                animate={{ width: `${(letterIndex / fullText.length) * 100}%` }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-smartan-navy">
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070)',
              filter: 'blur(20px) brightness(0.3)',
              transform: 'scale(1.1)',
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                background: `radial-gradient(circle, ${
                  particle.id % 3 === 0 ? '#f7961d' : particle.id % 3 === 1 ? '#ec297b' : '#0076c6'
                }, transparent)`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-smartan-navy/80 via-smartan-navy/40 to-smartan-navy z-10" />
        <motion.div 
          className="absolute inset-0 z-10"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(247, 150, 29, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 70% 60%, rgba(236, 41, 123, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 30% 40%, rgba(247, 150, 29, 0.15) 0%, transparent 60%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Content */}
        <div ref={contentRef} className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="w-full max-w-7xl text-center">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
              className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            >
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #f7961d 0%, #ec297b 50%, #0076c6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Where Brilliance
                <br />
                Becomes Legacy
              </motion.h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-relaxed font-light px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
            >
              Transforming Africa's brightest young minds into tomorrow's
              <span className="text-smartan-orange font-semibold"> visionaries</span>,
              <span className="text-smartan-pink font-semibold"> innovators</span>, and
              <span className="text-smartan-blue font-semibold"> leaders</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1.2, ease: 'easeOut' }}
            >
              <motion.button
                onClick={scrollToContent}
                className="px-8 sm:px-10 md:px-12 lg:px-14 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold rounded-full border-2 border-white/40 backdrop-blur-md bg-transparent text-white hover:bg-white/10 hover:border-white/60 transition-all duration-500 ease-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Your Journey
              </motion.button>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 flex items-center justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.2, ease: 'easeOut' }}
            >
              <motion.div
                className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-smartan-orange to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-smartan-orange text-xs sm:text-sm tracking-widest">EST. 2024</span>
              <motion.div
                className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-smartan-pink to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-30"
          style={{ transform: "translateX(-40%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
          }}
        >



          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-[10px] sm:text-xs tracking-widest">
              SCROLL TO EXPLORE
            </span>

            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full flex justify-center p-1.5 sm:p-2">
              <motion.div
                className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-smartan-orange rounded-full"
                animate={{ y: [0, 14, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>


      </section>
    </>
  );
};

export default Hero;