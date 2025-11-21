import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';
import { FaLinkedin } from 'react-icons/fa';

const TeamSection = () => {
  const founder = {
    name: 'Johnson Abbaly',
    role: 'Founder & Visionary (SmartanDAD)',
    image: '/images/home-team/instadad.png',
    bio: 'Johnson Abbaly founded Smartan House with a revolutionary vision to transform how we support and nurture the next generation.',
    linkedin: '#'
  };

  const advisory = [
    { name: 'Iyin Aboyeji', role: 'Tech Entrepreneur & Investor', image: '/images/home-team/iyin.png', linkedin: '#' },
    { name: 'Telcy Okundia', role: 'Business Strategist', image: '/images/home-team/telcy.jpg', linkedin: '#' },
    { name: 'Osita Ergbubine', role: 'Financial Expert', image: '/images/home-team/osita.jpeg', linkedin: '#' },
  ];

  const team = [
    { name: 'Taiye Ojo Erhunwense', role: 'Corporate Advisor', image: '/images/home-team/taiye.jpeg' },
  ];

  return (
    <AnimatedSection className="py-24" dataSection="Team">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-gradient">Our</span> <span>Team</span>
          </h2>
          <p className="text-xl text-smartan-gray max-w-3xl mx-auto">
            Working together to build better futures
          </p>
        </motion.div>

        {/* Founder */}
        <motion.div className="max-w-4xl mx-auto mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card variant="gradient" className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img src={founder.image} alt={founder.name} className="w-full aspect-square object-cover rounded-2xl" />
              <div>
                <span className="text-sm text-smartan-orange font-semibold">Founder</span>
                <h3 className="text-3xl font-bold mb-2">{founder.name}</h3>
                <p className="text-smartan-gray mb-4">{founder.role}</p>
                <p className="text-smartan-gray mb-6">{founder.bio}</p>
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-smartan-blue hover:text-smartan-orange transition-colors">
                  <FaLinkedin className="w-5 h-5" /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Advisory Board */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Advisory Board</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {advisory.map((member, idx) => (
              <Card key={idx} delay={idx * 0.1}>
                <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-smartan-gray text-sm mb-4">{member.role}</p>
                  <a href={member.linkedin} className="text-smartan-blue hover:text-smartan-orange transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        
        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Team</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <Card key={idx} delay={idx * 0.1}>
                <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-smartan-gray text-sm mb-4">{member.role}</p>
                  <a href={member.linkedin} className="text-smartan-blue hover:text-smartan-orange transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
        

        {/* CNG Section */}
        <motion.div className="max-w-4xl mx-auto text-center glass-effect rounded-3xl p-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-3xl font-bold mb-4">Champions of the Next Generation</h3>
          <p className="text-smartan-gray mb-8">
            Join our community of visionaries supporting the next generation through mentorship, resources, and opportunities.
          </p>
          <motion.a href="/cng" className="inline-block px-8 py-4 bg-gradient-to-r from-smartan-orange to-smartan-pink rounded-full font-semibold text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default TeamSection;