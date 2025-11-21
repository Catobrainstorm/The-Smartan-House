// ============================================
// src/pages/Campaign.jsx
// ============================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { HiUsers, HiLightningBolt, HiCurrencyDollar, HiChevronDown, HiChevronUp } from 'react-icons/hi';

const Campaign = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const goals = [
    {
      icon: HiUsers,
      title: 'Raising 2500 Transformers',
      description: '11-month Smartan Culture Series hosting 200 participants monthly',
      target: '2,500 Young People',
      color: 'from-smartan-orange to-smartan-red'
    },
    {
      icon: HiLightningBolt,
      title: 'Ignite Hope',
      description: 'Inspiring thousands across communities to dream again',
      target: '3,000+ Lives Touched',
      color: 'from-smartan-pink to-smartan-purple'
    },
    {
      icon: HiCurrencyDollar,
      title: 'Raising $100,000',
      description: 'Funding programs and establishing the Smartan House War Room',
      target: '$100,000 Goal',
      color: 'from-smartan-blue to-smartan-teal'
    },
  ];

  const faqs = [
    {
      question: 'How Can I Make Donation?',
      answer: 'You can donate through our CNG (Champions of the Next Generation) or 2045 Consortium programs. Visit our donation page to choose your preferred method.'
    },
    {
      question: 'How Will My Donation Be Used?',
      answer: 'Your donation directly funds the Smartan Culture Series events, the 8-week Crucible programs, educational resources, mentorship programs, and the establishment of the Smartan House War Room facility.'
    },
    {
      question: 'Can I Set Up A Recurring Donation?',
      answer: 'Yes! We encourage monthly recurring donations through our CNG program (minimum ₦50,000/month) or the 2045 Consortium (minimum ₦20,000/month or $10/month).'
    },
    {
      question: 'Who is a Transformer?',
      answer: 'A Transformer is a young person who has gone through our programs and is committed to transforming their communities. They are change agents, leaders, and innovators who carry the vision to build a better Africa.'
    },
    {
      question: 'How can I be a part of this Campaign?',
      answer: 'You can participate by: 1) Making a financial contribution, 2) Becoming a CNG member or Consortium partner, 3) Volunteering your time and skills, 4) Spreading the word on social media, or 5) Partnering with us as an organization.'
    },
    {
      question: 'Is this campaign exclusively for teenagers, or can young adults join too?',
      answer: 'While our Crucible program focuses on teenagers (13-19), our Culture Series and broader initiatives welcome young adults up to age 25. Different programs target different age groups for maximum impact.'
    },
    {
      question: 'Can I participate from any location?',
      answer: 'Currently, our in-person programs are focused in Lagos and select Federal Government Colleges across Nigeria. However, we are developing online components and expanding to more locations. Stay connected for updates!'
    },
    {
      question: 'Will I have the opportunity to network with Smartans?',
      answer: 'Absolutely! As a donor or partner, you will receive exclusive invitations to our events, graduation ceremonies, and networking sessions where you can meet and interact with our Smartans.'
    },
    {
      question: 'Can I also have a Transformer Name?',
      answer: 'Yes! When you become a significant supporter or join our community, you can adopt a Transformer name that reflects your commitment to the movement. This is part of our culture of transformation.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy via-smartan-navy/95 to-smartan-navy relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-smartan-orange/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-smartan-pink/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-smartan-orange/20 to-smartan-pink/20 rounded-full text-sm font-semibold border border-smartan-orange/30">
                🚀 2025 Campaign
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6">
              <span className="text-gradient">The Age of</span>
              <br />
              <span>Transformers</span>
            </h1>

            <p className="text-xl md:text-2xl text-smartan-gray leading-relaxed mb-8">
              We're on a mission to unlock the incredible potential of Nigeria's youth. At Smartan House, we believe that young people hold the key to our nation's brighter future. By 2025, we aim to inspire and empower <strong className="text-smartan-orange">2,500 young changemakers</strong> through hands-on programs, mentorship, and meaningful opportunities.
            </p>

            <motion.p
              className="text-2xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Together, let's turn dreams into action and hope into impact—because <span className="text-gradient">the future starts with them!</span>
            </motion.p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/cng" size="lg" icon={HiUsers}>
                Become a Champion
              </Button>
              <Button to="/consortium" variant="outline" size="lg">
                Join Consortium
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Goals Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              <span className="text-gradient">Our</span> Mission
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {goals.map((goal, idx) => (
              <Card key={idx} variant="gradient" delay={idx * 0.1}>
                <div className="p-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${goal.color} flex items-center justify-center mb-6 mx-auto`}>
                    <goal.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{goal.title}</h3>
                  <p className="text-smartan-gray mb-6 text-center">{goal.description}</p>
                  <div className="text-center">
                    <div className="inline-block px-6 py-3 bg-white/5 rounded-full border border-smartan-orange/30">
                      <span className="text-smartan-orange font-bold">{goal.target}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Welcome Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy to-smartan-navy/80">
        <div className="container mx-auto px-6">
          <motion.div
            className="glass-effect rounded-3xl p-12 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">
              <span className="text-gradient">Welcome To The Age</span>
              <br />
              <span>Of Transformers</span>
            </h2>
            <div className="space-y-6 text-smartan-gray text-lg leading-relaxed">
              <p>
                We're raising a generation of <strong className="text-white">2,500 young people</strong> through The Smartan Culture Series event—an exclusive 11-month invitation hosting 200 participants monthly.
              </p>
              <p>
                We also seek to reach over <strong className="text-white">3,000 young people</strong> from impoverished communities who will go through the eight-week residential Smartan Crucible spread over three cohorts.
              </p>
              <p>
                Our goal is to raise <strong className="text-smartan-orange">$100,000</strong> ahead of 2025 to empower these young changemakers. In addition to hosting the Culture Series, we are setting up a fully functional <strong className="text-white">Smartan House Acorn War Room</strong> to secure a property lease for the Crucible.
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="glass-effect rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg text-left">{faq.question}</span>
                  {openFAQ === idx ? (
                    <HiChevronUp className="w-6 h-6 text-smartan-orange flex-shrink-0" />
                  ) : (
                    <HiChevronDown className="w-6 h-6 text-smartan-gray flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openFAQ === idx ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-smartan-gray leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy/80 to-smartan-navy">
        <div className="container mx-auto px-6">
          <motion.div
            className="glass-effect rounded-3xl p-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Transform Lives?
            </h2>
            <p className="text-xl text-smartan-gray mb-8">
              Join us in creating the next generation of African leaders and changemakers
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/cng" size="xl">
                Make a Donation
              </Button>
              <Button to="/contact" variant="outline" size="xl">
                Partner With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Campaign;