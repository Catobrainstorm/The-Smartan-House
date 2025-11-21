// ============================================
// src/pages/News.jsx
// ============================================
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import { HiClock, HiUser, HiTag, HiX, HiArrowRight } from 'react-icons/hi';
import { newsArticles, newsCategories } from '../data/newsData';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Get featured article (newest with featured: true)
  const featuredArticle = newsArticles.find(article => article.featured);
  
  // Filter articles
  const filteredArticles = newsArticles
    .filter(article => selectedCategory === 'All' || article.category === selectedCategory)
    .filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Get latest 3 articles for sidebar
  const latestArticles = newsArticles.slice(0, 3);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-smartan-navy via-smartan-navy/95 to-smartan-navy relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-smartan-orange/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-smartan-pink/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              <span className="text-gradient">News &</span>
              <br />
              <span>Stories</span>
            </h1>
            <p className="text-xl text-smartan-gray max-w-3xl mx-auto mb-8">
              Stay updated with the latest from Smartan House - stories of transformation, program updates, and community impact
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full focus:border-smartan-orange focus:outline-none pl-12"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-smartan-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Featured Article */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FeaturedArticle article={featuredArticle} onRead={() => setSelectedArticle(featuredArticle)} />
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      {/* Category Filter */}
      <AnimatedSection className="py-12 sticky top-24 z-40 bg-smartan-navy/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {newsCategories.map((category, idx) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-smartan-orange to-smartan-pink'
                    : 'glass-effect hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Articles Grid */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Articles */}
            <div className="lg:col-span-2">
              {filteredArticles.length === 0 ? (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-2xl text-smartan-gray">No articles found</p>
                </motion.div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredArticles.map((article, idx) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      delay={idx * 0.1}
                      onRead={() => setSelectedArticle(article)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Latest Articles */}
              <Card variant="gradient">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Latest Posts</h3>
                  <div className="space-y-4">
                    {latestArticles.map((article, idx) => (
                      <motion.button
                        key={article.id}
                        onClick={() => setSelectedArticle(article)}
                        className="block w-full text-left group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="flex gap-4">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-smartan-orange transition-colors">
                              {article.title}
                            </h4>
                            <p className="text-xs text-smartan-gray">{article.date}</p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Newsletter Signup */}
              <Card variant="gradient">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-smartan-gray mb-6">
                    Get the latest stories delivered to your inbox
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-smartan-orange focus:outline-none"
                    />
                    <motion.button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-smartan-orange to-smartan-pink rounded-xl font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Subscribe
                    </motion.button>
                  </form>
                </div>
              </Card>

              {/* Popular Tags */}
              <Card variant="gradient">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Youth', 'Transformation', 'Leadership', 'Community', 'Tech', 'Education', 'Impact'].map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-smartan-orange/20 rounded-full text-sm hover:bg-smartan-orange/30 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

// Featured Article Component
const FeaturedArticle = ({ article, onRead }) => {
  return (
    <motion.div
      className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onRead}
    >
      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-smartan-navy via-smartan-navy/60 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <span className="inline-block px-4 py-2 bg-smartan-orange/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 w-fit">
          ⭐ Featured Story
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 group-hover:text-smartan-orange transition-colors">
          {article.title}
        </h2>
        <p className="text-lg text-smartan-gray mb-6 line-clamp-2">{article.excerpt}</p>
        
        <div className="flex items-center gap-6 text-sm text-smartan-gray">
          <span className="flex items-center gap-2">
            <HiUser className="w-4 h-4" /> {article.author}
          </span>
          <span className="flex items-center gap-2">
            <HiClock className="w-4 h-4" /> {article.readTime}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Article Card Component
const ArticleCard = ({ article, delay, onRead }) => {
  return (
    <Card delay={delay}>
      <motion.div
        className="cursor-pointer"
        whileHover={{ y: -5 }}
        onClick={onRead}
      >
        <div className="relative h-48 overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-smartan-orange/80 backdrop-blur-sm rounded-full text-xs font-semibold">
              {article.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-smartan-orange transition-colors">
            {article.title}
          </h3>
          <p className="text-smartan-gray text-sm mb-4 line-clamp-3">{article.excerpt}</p>
          
          <div className="flex items-center justify-between text-xs text-smartan-gray">
            <span className="flex items-center gap-1">
              <HiUser className="w-4 h-4" /> {article.author}
            </span>
            <span>{article.date}</span>
          </div>
          
          <div className="flex items-center gap-2 mt-4 text-smartan-orange font-semibold text-sm group">
            Read More 
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

// Article Modal Component
const ArticleModal = ({ article, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[999] overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="min-h-screen py-12 px-6">
        <motion.div
          className="max-w-4xl mx-auto glass-effect rounded-3xl overflow-hidden"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-smartan-orange/20 transition-colors z-10"
          >
            <HiX className="w-6 h-6" />
          </button>

          {/* Header Image */}
          <div className="relative h-96">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-smartan-navy to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-smartan-orange/20 rounded-full text-sm font-semibold">
                {article.category}
              </span>
              <span className="flex items-center gap-2 text-smartan-gray">
                <HiUser className="w-4 h-4" /> {article.author}
              </span>
              <span className="flex items-center gap-2 text-smartan-gray">
                <HiClock className="w-4 h-4" /> {article.readTime}
              </span>
              <span className="text-smartan-gray">{article.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-smartan-gray mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-display
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-smartan-gray prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-smartan-gray prose-ul:my-6
                prose-li:mb-2
                prose-strong:text-white
                prose-blockquote:border-l-4 prose-blockquote:border-smartan-orange 
                prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-smartan-gray"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-3">
                  <HiTag className="w-5 h-5 text-smartan-orange" />
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-smartan-orange/20 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default News;