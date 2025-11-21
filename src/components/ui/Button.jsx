import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  href, 
  onClick,
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  ...props 
}) => {
  const baseClasses = 'font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-smartan-orange to-smartan-pink hover:shadow-lg hover:shadow-smartan-orange/50',
    secondary: 'glass-effect hover:bg-white/10',
    outline: 'border-2 border-smartan-orange hover:bg-smartan-orange/20',
    ghost: 'hover:bg-white/5',
    gradient: 'bg-gradient-to-r from-smartan-blue via-smartan-purple to-smartan-pink hover:shadow-lg hover:shadow-smartan-purple/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  );

  const MotionButton = motion.button;
  const MotionLink = motion.a;
  const MotionRouterLink = motion.create(Link);

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (to) {
    return (
      <MotionRouterLink to={to} className={classes} {...motionProps} {...props}>
        {content}
      </MotionRouterLink>
    );
  }

  if (href) {
    return (
      <MotionLink href={href} className={classes} {...motionProps} {...props}>
        {content}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {content}
    </MotionButton>
  );
};

export default Button;