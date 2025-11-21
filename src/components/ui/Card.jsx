import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  variant = 'glass',
  hover = true,
  delay = 0,
  ...props 
}) => {
  const variants = {
    glass: 'glass-effect',
    solid: 'bg-white/5 border border-white/10',
    gradient: 'bg-gradient-to-br from-smartan-orange/10 via-smartan-pink/10 to-smartan-purple/10 border border-white/10',
    outline: 'border-2 border-smartan-orange/50 bg-transparent',
  };

  const hoverEffects = hover ? {
    scale: 1.03,
    y: -5,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  } : {};

  return (
    <motion.div
      className={`rounded-2xl overflow-hidden ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.5 }}
      whileHover={hoverEffects}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 border-t border-white/10 ${className}`}>
    {children}
  </div>
);

export const CardImage = ({ src, alt, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <motion.img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4 }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-smartan-navy/80 to-transparent" />
  </div>
);

export default Card;