// useOnScreen.js (Custom Hook)
import { useState, useEffect, useRef } from 'react';

export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters viewport, set true; when leaves, set false
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 } // Triggers when 20% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};