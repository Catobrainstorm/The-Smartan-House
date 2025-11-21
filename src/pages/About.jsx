import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import { HiLightningBolt, HiStar, HiTrendingUp, HiHeart } from 'react-icons/hi';

const About = () => {
  const vision = [
    { icon: HiLightningBolt, title: 'Innovation First', description: 'Pioneering tomorrow\'s solutions today with breakthrough technologies.' },
    { icon: HiStar, title: 'Excellence Driven', description: 'Delivering uncompromising quality in every project.' },
    { icon: HiTrendingUp, title: 'Future Ready', description: 'Building scalable solutions that evolve with technology.' },
    { icon: HiHeart, title: 'Passion', description: 'Genuine enthusiasm driving everything we create.' },
  ];

  const leaders = [
    { name: 'Johnson Abbaly', role: 'Founder (SmartanDAD)', image: '/images/visionaries/about-two.png', bio: 'Visionary leader with 15+ years driving digital transformation.' },
    { name: 'Temitope Abere', role: 'Executive Director', image: '/api/placeholder/300/300', bio: 'Award-winning designer crafting compelling visual narratives.' },
    { name: 'Solomon Taiwo', role: 'Chief Operating Officer', image: '/images/visionaries/about-one.png', bio: 'Full-stack architect building scalable solutions.' },
    { name: 'Toluwalope Ilori', role: 'Creative Director', image: '/images/visionaries/about-three.png', bio: 'Strategic product leader focused on user-centered design.' },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy via-smartan-navy/90 to-smartan-navy">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 className="text-6xl md:text-8xl font-display font-bold mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gradient">About</span> Us
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-smartan-gray max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Crafting extraordinary digital experiences that push the boundaries of innovation and design excellence.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* Vision */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-display font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-smartan-gray max-w-4xl mx-auto">
              To revolutionize digital experiences through cutting-edge technology, innovative design, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vision.map((item, idx) => (
              <Card key={idx} delay={idx * 0.1}>
                <div className="p-8 text-center">
                  <item.icon className="w-16 h-16 mx-auto mb-4 text-smartan-orange" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-smartan-gray">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy to-smartan-navy/80">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-display font-bold mb-6">Meet Our Visionaries</h2>
            <p className="text-xl text-smartan-gray max-w-3xl mx-auto">
              The brilliant minds behind our revolutionary approach to digital excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, idx) => (
              <Card key={idx} delay={idx * 0.1}>
                <img src={leader.image} alt={leader.name} className="w-full aspect-square object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-sm text-smartan-orange mb-3">{leader.role}</p>
                  <p className="text-sm text-smartan-gray">{leader.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;