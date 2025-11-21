import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { HiSparkles, HiLightningBolt, HiUsers, HiTrendingUp } from 'react-icons/hi';

const CultureSeries = () => {
  const features = [
    {
      icon: HiSparkles,
      title: 'Quaterly Gatherings',
      description: '100 brilliant young minds from underserved communities',
      color: 'from-smartan-orange to-smartan-red'
    },
    {
      icon: HiLightningBolt,
      title: 'Electrifying Energy',
      description: 'Where neurons wire and fire, ideas collide, and sparks fly',
      color: 'from-smartan-pink to-smartan-purple'
    },
    {
      icon: HiUsers,
      title: 'Deep Conversations',
      description: 'Inspiring discussions about the future and tomorrow\'s solutions',
      color: 'from-smartan-blue to-smartan-teal'
    },
    {
      icon: HiTrendingUp,
      title: 'Transformative Impact',
      description: 'Creating a generation who will transform Africa',
      color: 'from-smartan-teal to-smartan-orange'
    }
  ];

  return (
    <AnimatedSection 
      className="relative py-24 overflow-hidden"
      dataSection="Culture Series"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-smartan-orange/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-smartan-pink/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="px-4 py-2 bg-smartan-orange/20 rounded-full text-sm font-semibold text-smartan-orange border border-smartan-orange/30">
                Quarterly Event
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">Smartan</span>
              <br />
              Culture Series
            </h2>

            <p className="text-xl text-smartan-gray leading-relaxed mb-8">
              Enter the Smartan Culture Series, an <span className="text-smartan-orange font-semibold">electrifying quaterly gathering</span> that brings together 100 of the brightest young minds from underserved communities.
            </p>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-smartan-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-smartan-orange" />
                </div>
                <p className="text-smartan-gray">
                  A room crackling with energy as <strong className="text-white">neurons wire and fire</strong>, ideas collide, and sparks fly
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-smartan-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-smartan-pink" />
                </div>
                <p className="text-smartan-gray">
                  Designed to inspire <strong className="text-white">in-depth conversations</strong> about the future
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-smartan-teal/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-smartan-teal" />
                </div>
                <p className="text-smartan-gray">
                  Creating a generation of <strong className="text-white">transformers</strong> who will transform Africa
                </p>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <Button to="/culture-series" size="lg">
                Learn More
              </Button>
              <Button to="/cng" variant="outline" size="lg">
                Support The Series
              </Button>
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-smartan-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { number: '100+', label: 'Young Minds' },
            { number: '4', label: 'Events/Year' },
            { number: '50+', label: 'Topics Covered' },
            { number: '1000+', label: 'Lives Impacted' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-effect p-6 rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </h4>
              <p className="text-smartan-gray">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default CultureSeries;