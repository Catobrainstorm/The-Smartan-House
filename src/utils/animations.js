// ============================================
// src/utils/animations.js
// ============================================
import gsap from 'gsap';

export const fadeIn = (element, delay = 0) => {
  gsap.fromTo(element, 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out' }
  );
};

export const slideIn = (element, direction = 'left', delay = 0) => {
  const xValue = direction === 'left' ? -100 : 100;
  gsap.fromTo(element,
    { opacity: 0, x: xValue },
    { opacity: 1, x: 0, duration: 0.8, delay, ease: 'power3.out' }
  );
};

export const scaleUp = (element, delay = 0) => {
  gsap.fromTo(element,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.6, delay, ease: 'back.out(1.7)' }
  );
};

export const staggerChildren = (parent, delay = 0.1) => {
  gsap.from(parent.children, {
    opacity: 0,
    y: 30,
    stagger: delay,
    duration: 0.6,
    ease: 'power3.out'
  });
};