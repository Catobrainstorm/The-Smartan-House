import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { HiAcademicCap, HiChartBar, HiLightBulb, HiUserGroup, HiClock, HiStar } from 'react-icons/hi';

const CrucibleSection = () => {
  const features = [
    {
      icon: HiAcademicCap,
      title: 'Communication Mastery',
      description: 'Master the art of effective communication and public speaking',
    },
    {
      icon: HiChartBar,
      title: 'Work Ethics',
      description: 'Develop professional excellence and integrity',
    },
    {
      icon: HiLightBulb,
      title: 'Emotional Intelligence',
      description: 'Build self-awareness and empathy for better relationships',
    },
    {
      icon: HiUserGroup,
      title: 'Leadership Skills',
      description: 'Cultivate the mindset of transformative leaders',
    },
    {
      icon: HiClock,
      title: 'Time Management',
      description: 'Maximize productivity and achieve your goals',
    },
    {
      icon: HiStar,
      title: 'Tech Proficiency',
      description: 'Gain essential digital skills for the modern world',
    },
  ];

  return (
    <AnimatedSection 
      className="relative py-24 bg-gradient-to-b from-smartan-navy/50 to-smartan-navy"
      dataSection="Crucible"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-smartan-purple/20 to-smartan-pink/20 rounded-full text-sm font-semibold border border-smartan-purple/30">
                🔥 2-Week Transformation
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">Smartan Culture</span>
              <br />
              <span>Crucible</span>
            </h2>

            <p className="text-xl text-smartan-gray max-w-4xl mx-auto leading-relaxed">
              Welcome to the <strong className="text-smartan-orange">Smartan Crucible</strong>: an 2-week transformative journey for teenagers. This is where we unlock hidden potentials, reshape narratives, and sculpt teenage minds, as they emerge as the <strong className="text-white">best version of themselves</strong>.
            </p>
          </motion.div>

          

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-center mb-8">
              What You'll Master
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <feature.icon className="w-12 h-12 text-smartan-orange mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-smartan-gray">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CrucibleSection;