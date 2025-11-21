import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { HiPlay } from 'react-icons/hi';
import { impactVideos } from '../../data/smartans';

const ImpactStories = () => {
  // Use videos from data file
  const videos = impactVideos;

  return (
    <AnimatedSection 
      className="py-24 bg-gradient-to-b from-smartan-navy to-smartan-navy/80"
      dataSection="Impact"
    >
      <div className="container mx-auto px-6">
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
            <span className="px-6 py-3 bg-gradient-to-r from-smartan-red/20 to-smartan-orange/20 rounded-full text-sm font-semibold border border-smartan-red/30">
              📹 Real Stories, Real Impact
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-gradient">Impact</span>
            <br />
            <span>Stories</span>
          </h2>
          <p className="text-xl text-smartan-gray max-w-3xl mx-auto">
            Watch the incredible journeys of Smartans whose lives have been transformed
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Be Part of Their Story
            </h3>
            <p className="text-smartan-gray mb-8 max-w-2xl mx-auto">
              Your support can help transform more young lives. Join us in creating the next generation of African leaders.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/cng"
                className="px-8 py-4 bg-gradient-to-r from-smartan-orange to-smartan-pink rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Champion
              </motion.a>
              <motion.a
                href="https://youtube.com/@smartanhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-effect rounded-full font-semibold text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiPlay className="w-5 h-5" />
                View All Stories
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

const VideoCard = ({ video, index }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="glass-effect rounded-2xl overflow-hidden">
        {/* Video Container */}
        <div className="relative aspect-[9/16] bg-black">
          <a
            href={`https://youtube.com/shorts/${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-all z-10"
          >
            <motion.div
              className="w-16 h-16 bg-smartan-orange rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiPlay className="w-8 h-8 ml-1" />
            </motion.div>
          </a>
          
          {/* Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-4">
          <h4 className="font-bold mb-1 line-clamp-2 group-hover:text-smartan-orange transition-colors">
            {video.title}
          </h4>
          <p className="text-sm text-smartan-gray">{video.views} views</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactStories;