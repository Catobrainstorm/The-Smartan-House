import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (ref, animation = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const {
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      ...animationProps
    } = animation;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        ...animationProps,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
        },
      });
    });

    return () => ctx.revert();
  }, [ref, animation]);
};

export default useScrollAnimation;