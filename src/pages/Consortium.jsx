// ============================================
// src/pages/Consortium.jsx - COMPLETE PAYSTACK INTEGRATION
// ============================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePaystackPayment } from 'react-paystack';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import { HiLightningBolt, HiGlobe, HiUserGroup, HiCube } from 'react-icons/hi';
import { PAYSTACK_PUBLIC_KEY, amountToKobo, generateReference } from '../utils/paystack';

const Consortium = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    currency: 'NGN',
    amount: '20000'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const projects = [
    {
      icon: HiGlobe,
      title: 'Prestigious 1000',
      description: 'Developing next-generation renewable energy solutions that will power the world sustainably by 2045.',
      image: '/api/placeholder/600/400',
      impact: '1k+ Lives'
    },
    // {
    //   icon: HiLightningBolt,
    //   title: 'Digital Africa Initiative',
    //   description: 'Bridging the digital divide across Africa through innovative technology solutions and infrastructure.',
    //   image: '/api/placeholder/600/400',
    //   impact: '50+ Countries'
    // },
    // {
    //   icon: HiUserGroup,
    //   title: 'Youth Leadership Program',
    //   description: 'Empowering young leaders with skills and resources to drive transformative change in their communities.',
    //   image: '/api/placeholder/600/400',
    //   impact: '100K+ Leaders'
    // },
    // {
    //   icon: HiCube,
    //   title: 'Innovation Hubs Network',
    //   description: 'Creating collaborative spaces where innovators can develop solutions to Africa\'s most pressing challenges.',
    //   image: '/api/placeholder/600/400',
    //   impact: '20+ Hubs'
    // }
  ];

  // Paystack configuration
  const paystackConfig = {
    reference: generateReference('CONSORTIUM'),
    email: formData.email,
    amount: amountToKobo(formData.amount),
    currency: formData.currency,
    publicKey: PAYSTACK_PUBLIC_KEY,
    metadata: {
      custom_fields: [
        {
          display_name: "Full Name",
          variable_name: "full_name",
          value: formData.fullName
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: formData.phone
        },
        {
          display_name: "LinkedIn",
          variable_name: "linkedin",
          value: formData.linkedin || 'N/A'
        },
        {
          display_name: "Membership Type",
          variable_name: "membership_type",
          value: "2045 Consortium Monthly"
        }
      ]
    },
  };

  // Initialize Paystack payment
  const initializePayment = usePaystackPayment(paystackConfig);

  // Success callback
  const onSuccess = async (reference) => {
    setIsProcessing(true);
    console.log('Payment successful:', reference);
    
    try {
      // Verify payment with your backend
      const response = await fetch('http://localhost:3001/api/payments/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reference: reference.reference,
          formData: formData,
          paymentType: '2045 Consortium Monthly Membership',
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(`🎉 Welcome to the 2045 Consortium!\n\nPayment successful!\nReference: ${reference.reference}\n\nA confirmation email has been sent to ${formData.email}`);
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          linkedin: '',
          currency: 'NGN',
          amount: '20000'
        });
      } else {
        alert('Payment successful but verification failed. Please contact us with your reference: ' + reference.reference);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Payment successful! However, we encountered an error sending confirmation. Please save this reference: ' + reference.reference);
    } finally {
      setIsProcessing(false);
    }
  };

  // Close callback
  const onClose = () => {
    console.log('Payment popup closed');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    const minAmount = formData.currency === 'NGN' ? 20000 : 10;
    if (parseFloat(formData.amount) < minAmount) {
      alert(`Minimum contribution is ${formData.currency === 'NGN' ? '₦20,000' : '$10'}`);
      return;
    }

    // Initialize payment
    initializePayment(onSuccess, onClose);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy via-smartan-navy/95 to-smartan-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-smartan-purple/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-smartan-blue/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
              <span className="px-6 py-3 bg-gradient-to-r from-smartan-purple/20 to-smartan-blue/20 rounded-full text-sm font-semibold border border-smartan-purple/30">
                🚀 Building Tomorrow, Today
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6">
              <span className="text-gradient">2045</span>
              <br />
              <span>CONSORTIUM</span>
            </h1>

            <p className="text-2xl font-display text-smartan-gray mb-4">
              ...young professionals supporting smartan culture...
            </p>

            <p className="text-xl md:text-2xl text-smartan-gray leading-relaxed mb-8 max-w-4xl mx-auto">
              Join visionary leaders and innovators in shaping the future. Your monthly contribution of <strong className="text-smartan-orange">₦20,000 or $10</strong> helps fund groundbreaking projects that will transform our world by 2045.
            </p>

            <motion.a
              href="#join"
              className="inline-block px-8 py-4 bg-gradient-to-r from-smartan-purple to-smartan-blue rounded-full font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Consortium
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Vision Statement */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="glass-effect rounded-3xl p-12 max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Vision for 2045</span>
            </h2>
            <p className="text-xl text-smartan-gray leading-relaxed">
              The 2045 Consortium brings together young professionals, entrepreneurs, and visionaries who believe in the power of collective action. Together, we're funding transformative projects that will shape Africa's future—from sustainable energy solutions to digital innovation hubs, from leadership development programs to cutting-edge research initiatives.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Transformative Projects */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy to-smartan-navy/80">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              Our Transformative <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-smartan-gray max-w-3xl mx-auto">
              Discover the groundbreaking initiatives your contribution helps fund
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, idx) => (
              <Card key={idx} variant="gradient" delay={idx * 0.1}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-smartan-navy via-smartan-navy/60 to-transparent" />
                  <div className="absolute top-6 right-6">
                    <div className="w-14 h-14 bg-smartan-orange/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <project.icon className="w-7 h-7 text-smartan-orange" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-2 bg-smartan-purple/30 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {project.impact}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-smartan-gray leading-relaxed">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Membership Form */}
      <AnimatedSection id="join" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="glass-effect rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-display font-bold mb-4">
                  Join the <span className="text-gradient">2045 Consortium</span>
                </h2>
                <p className="text-smartan-gray text-lg">
                  Become part of an exclusive community of innovators and visionaries working towards a better future.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-gradient-to-r from-smartan-purple/20 to-smartan-blue/20 rounded-2xl p-6 border border-smartan-purple/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Monthly Membership</h3>
                      <p className="text-smartan-gray">Recurring monthly contribution to fuel innovation</p>
                    </div>
                    <div className="text-3xl">🌟</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name <span className="text-smartan-orange">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-purple focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address <span className="text-smartan-orange">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-purple focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone Number <span className="text-smartan-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-purple focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-purple focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Select Currency</label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, currency: 'NGN', amount: '20000'})}
                      className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all ${
                        formData.currency === 'NGN'
                          ? 'bg-gradient-to-r from-smartan-purple to-smartan-blue'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-2xl mb-1">₦</div>
                      <div>Nigerian Naira</div>
                      <div className="text-sm text-smartan-gray mt-1">Min: ₦20,000</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, currency: 'USD', amount: '10'})}
                      className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all ${
                        formData.currency === 'USD'
                          ? 'bg-gradient-to-r from-smartan-purple to-smartan-blue'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-2xl mb-1">$</div>
                      <div>US Dollar</div>
                      <div className="text-sm text-smartan-gray mt-1">Min: $10</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Monthly Contribution Amount
                  </label>
                  <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    min={formData.currency === 'NGN' ? '20000' : '10'}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-purple focus:outline-none text-2xl font-bold"
                    required
                  />
                  <p className="text-sm text-smartan-gray mt-2">
                    Minimum: {formData.currency === 'NGN' ? '₦20,000' : '$10'}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-smartan-purple/10 to-smartan-blue/10 rounded-2xl p-6 border border-smartan-purple/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-smartan-gray">Monthly Contribution</span>
                    <span className="text-3xl font-bold text-gradient">
                      {formData.currency === 'NGN' ? '₦' : '$'}
                      {parseInt(formData.amount || 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-smartan-gray">
                    <span>Billed monthly • Cancel anytime</span>
                    <span>🔒 Secure</span>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full px-8 py-5 bg-gradient-to-r from-smartan-purple to-smartan-blue rounded-full font-semibold text-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                  whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                >
                  <span>{isProcessing ? 'Processing...' : 'Join 2045 Consortium - Start Monthly Membership'}</span>
                </motion.button>

                <p className="text-center text-sm text-smartan-gray">
                  🔒 Secure payment powered by Paystack
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy/80 to-smartan-navy">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Member <span className="text-gradient">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '🎯', title: 'Quarterly Impact Reports', description: 'Detailed insights into project progress and your contribution\'s impact' },
              { icon: '🤝', title: 'Exclusive Networking', description: 'Connect with fellow innovators and industry leaders at members-only events' },
              { icon: '🏆', title: 'Recognition', description: 'Featured on our website and annual reports as a 2045 Consortium member' },
              { icon: '💡', title: 'Project Voting Rights', description: 'Have a say in which transformative projects we fund next' },
              { icon: '📚', title: 'Resource Library', description: 'Access to research, whitepapers, and exclusive content' },
              { icon: '🎓', title: 'Learning Opportunities', description: 'Invitations to workshops, webinars, and masterclasses' }
            ].map((benefit, idx) => (
              <Card key={idx} delay={idx * 0.1}>
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-smartan-gray">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Consortium;