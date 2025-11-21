import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';

const WarRoom = () => {
  return (
    <div className="pt-24">
      <AnimatedSection className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <h1 className="text-8xl md:text-9xl font-display font-bold mb-6 text-gradient">
              Coming Soon
            </h1>
            <p className="text-2xl text-smartan-gray mb-8">
              The War Room is under construction
            </p>
            <div className="glass-effect inline-block px-8 py-4 rounded-full">
              <p className="text-smartan-orange font-semibold">Stay Tuned!</p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default WarRoom;