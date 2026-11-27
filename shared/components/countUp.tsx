'use client';

import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  end: number;
  duration?: number;
};

const CountUp = ({ end, duration = 1500 }: CountUpProps) => {
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;

        animated.current = true;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          return;
        }

        setCount(0);

        const startTime = performance.now();

        const updateCount = (currentTime: number) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          // Smooth ease-out
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCount(
            progress < 1 ? Math.floor(easedProgress * end) : end
          );

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        };

        requestAnimationFrame(updateCount);
        observer.disconnect();
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}+</span>;
};

export default CountUp;