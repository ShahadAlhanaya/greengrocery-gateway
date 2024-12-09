import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const countingRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (inView) {
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      
      countingRef.current = setInterval(() => {
        if (current < end) {
          current += increment;
          setCount(Math.min(Math.round(current), end));
        } else {
          clearInterval(countingRef.current);
        }
      }, duration / steps);
    }
    
    return () => {
      if (countingRef.current) {
        clearInterval(countingRef.current);
      }
    };
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;