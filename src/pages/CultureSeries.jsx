import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

const CultureSeriesPage = () => {
  return (
    <div className="pt-24">
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16 max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              <span className="text-gradient">Smartan</span><br />Culture Series
            </h1>
            <p className="text-2xl text-smartan-gray mb-8">
              Enter the Smartan Culture Series, an electrifying monthly gathering that brings together 100 of the brightest young minds from underserved communities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" disabled>Register (Coming Soon)</Button>
              <Button variant="outline" size="lg" to="/cng">Support The Series</Button>
            </div>
          </motion.div>

          <motion.div className="glass-effect rounded-3xl p-12 max-w-5xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">About The Series</h2>
            <div className="space-y-4 text-smartan-gray text-lg">
              <p>Imagine a room crackling with energy as neurons wire and fire, ideas collide, and sparks fly. The sheer energy as ideas interact, evolve, and ignite, a place where minds are molded and knowledge multiplies.</p>
              <p>These series are designed to inspire in-depth conversations about the future, laying the foundation for the solutions of tomorrow.</p>
              <p>Our mission is simple but ambitious: to raise young minds who expand their vision of what's possible and understand they are central to the equation. This is about creating a generation of transformers who carry the vision, determination, and drive to transform Africa.</p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CultureSeriesPage;