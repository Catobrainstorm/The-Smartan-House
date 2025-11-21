import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  HiAcademicCap, 
  HiLightBulb, 
  HiChartBar, 
  HiUserGroup, 
  HiClock, 
  HiCheckCircle,
  HiStar,
  HiTrendingUp
} from 'react-icons/hi';

const CultureCourse = () => {
  const courseModules = [
    {
      icon: HiAcademicCap,
      title: 'Foundation of Smartan Culture',
      description: 'Understanding the philosophy, values, and principles that define the Smartan identity',
      duration: '2 weeks',
      color: 'from-smartan-orange to-smartan-red'
    },
    {
      icon: HiLightBulb,
      title: 'Innovation & Creative Thinking',
      description: 'Developing problem-solving skills and cultivating an innovative mindset',
      duration: '2 weeks',
      color: 'from-smartan-pink to-smartan-purple'
    },
    {
      icon: HiUserGroup,
      title: 'Leadership & Community Building',
      description: 'Learn to lead effectively and build thriving communities',
      duration: '3 weeks',
      color: 'from-smartan-blue to-smartan-teal'
    },
    {
      icon: HiChartBar,
      title: 'Personal Development',
      description: 'Emotional intelligence, time management, and goal setting',
      duration: '2 weeks',
      color: 'from-smartan-teal to-smartan-orange'
    },
    {
      icon: HiTrendingUp,
      title: 'Impact & Transformation',
      description: 'Strategies for creating lasting change in your community',
      duration: '3 weeks',
      color: 'from-smartan-purple to-smartan-pink'
    }
  ];

  const benefits = [
    { icon: HiCheckCircle, text: 'Self-paced learning with lifetime access' },
    { icon: HiCheckCircle, text: 'Interactive modules and real-world projects' },
    { icon: HiCheckCircle, text: 'Certificate of completion' },
    { icon: HiCheckCircle, text: 'Access to exclusive Optimus Trybe community' },
    { icon: HiCheckCircle, text: 'Monthly live Q&A sessions with mentors' },
    { icon: HiCheckCircle, text: 'Networking opportunities with fellow Smartans' },
    { icon: HiCheckCircle, text: 'Resource library and learning materials' },
    { icon: HiCheckCircle, text: 'Invitation to annual Smartan gatherings' }
  ];

  const requirements = [
    'Passion for personal growth and community transformation',
    'Commitment to complete the 12-week program',
    'Interest in joining the Optimus Trybe',
    'Open mindset and willingness to learn',
    'Basic computer/smartphone literacy',
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy via-smartan-navy/95 to-smartan-navy relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-smartan-orange/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-smartan-teal/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
              <span className="px-6 py-3 bg-gradient-to-r from-smartan-teal/20 to-smartan-orange/20 rounded-full text-sm font-semibold border border-smartan-teal/30 flex items-center gap-2">
                <HiAcademicCap className="w-5 h-5" />
                12-Week Transformative Program
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6">
              <span className="text-gradient">Smartan Culture</span>
              <br />
              <span>Course</span>
            </h1>

            <p className="text-xl md:text-2xl text-smartan-gray leading-relaxed mb-8">
              Master the principles, values, and practices of Smartan Culture. This comprehensive course is designed for individuals who want to join the <strong className="text-smartan-orange">Optimus Trybe</strong> and become part of a transformative movement shaping Africa's future.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-2">
                <HiClock className="w-5 h-5 text-smartan-orange" />
                <span>12 Weeks</span>
              </div>
              <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-2">
                <HiStar className="w-5 h-5 text-smartan-orange" />
                <span>Self-Paced</span>
              </div>
              <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-2">
                <HiAcademicCap className="w-5 h-5 text-smartan-orange" />
                <span>Certificate Included</span>
              </div>
            </div>

            <Button size="lg" disabled className="opacity-50 cursor-not-allowed">
              Course Registration Opening Soon
            </Button>
            <p className="text-smartan-gray mt-4 text-sm">
              Be the first to know when enrollment opens. Join our mailing list!
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* What You'll Learn */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              What You'll <span className="text-gradient">Learn</span>
            </h2>
            <p className="text-xl text-smartan-gray max-w-3xl mx-auto">
              A comprehensive curriculum designed to transform you into a Smartan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {courseModules.map((module, idx) => (
              <Card key={idx} variant="gradient" delay={idx * 0.1}>
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6`}>
                    <module.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                  <p className="text-smartan-gray mb-4 leading-relaxed">{module.description}</p>
                  <div className="flex items-center gap-2 text-sm text-smartan-orange">
                    <HiClock className="w-4 h-4" />
                    <span>{module.duration}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Course Structure */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy to-smartan-navy/80">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-12">
              <h2 className="text-4xl font-display font-bold mb-8 text-center">
                About <span className="text-gradient">The Course</span>
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-smartan-orange">01</span>
                    Who Is This Course For?
                  </h3>
                  <p className="text-smartan-gray leading-relaxed text-lg">
                    The Smartan Culture Course is specifically designed for individuals who want to join the <strong className="text-white">Optimus Trybe</strong>—an elite community of change-makers, innovators, and leaders. Whether you're a young professional, student, entrepreneur, or community leader, this course will equip you with the mindset, skills, and knowledge to become a true Smartan.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-smartan-orange">02</span>
                    What is the Optimus Trybe?
                  </h3>
                  <p className="text-smartan-gray leading-relaxed text-lg">
                    The Optimus Trybe is an exclusive network of individuals who have embraced the Smartan culture and are committed to personal excellence and community transformation. Members gain access to exclusive opportunities, mentorship, resources, and a supportive community of like-minded changemakers.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-smartan-orange">03</span>
                    Learning Format
                  </h3>
                  <p className="text-smartan-gray leading-relaxed text-lg mb-4">
                    The course features a blend of:
                  </p>
                  <ul className="space-y-3 text-smartan-gray">
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="w-6 h-6 text-smartan-teal flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Video lessons</strong> - Engaging content from Smartan leaders and mentors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="w-6 h-6 text-smartan-teal flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Interactive exercises</strong> - Practical activities to apply what you learn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="w-6 h-6 text-smartan-teal flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Community discussions</strong> - Connect with fellow learners and share insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="w-6 h-6 text-smartan-teal flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Live sessions</strong> - Monthly Q&A with instructors and guest speakers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="w-6 h-6 text-smartan-teal flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Projects & assignments</strong> - Real-world challenges to test your skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Benefits & Requirements */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Benefits */}
            <Card variant="gradient">
              <div className="p-8">
                <h3 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="text-gradient">Course Benefits</span>
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <benefit.icon className="w-6 h-6 text-smartan-teal flex-shrink-0 mt-1" />
                      <span className="text-smartan-gray">{benefit.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Requirements */}
            <Card variant="gradient">
              <div className="p-8">
                <h3 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="text-gradient">Requirements</span>
                </h3>
                <ul className="space-y-4">
                  {requirements.map((req, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-smartan-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-smartan-orange" />
                      </div>
                      <span className="text-smartan-gray">{req}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
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
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Join the <span className="text-gradient">Optimus Trybe?</span>
            </h2>
            <p className="text-xl text-smartan-gray mb-8">
              The Smartan Culture Course will be available soon. Register your interest now to be notified when enrollment opens and receive exclusive early-bird benefits!
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full focus:border-smartan-orange focus:outline-none"
                />
                <Button type="submit">
                  Notify Me
                </Button>
              </form>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-sm text-smartan-gray">
              <span className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-smartan-teal" />
                No spam, ever
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-smartan-teal" />
                Early-bird discount
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-smartan-teal" />
                Exclusive resources
              </span>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Questions Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Have Questions?
            </h2>
            <p className="text-smartan-gray mb-8">
              Reach out to us for more information about the Smartan Culture Course
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
              <Button to="/about" variant="ghost" size="lg">
                Learn More About Smartan House
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CultureCourse;