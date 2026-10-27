import { useState, useEffect, useRef } from "react";

/**
 * Custom hook that uses IntersectionObserver to detect when an element
 * enters the viewport.
 *
 * @param {IntersectionObserverInit} options
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Once visible, stop observing
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, ...options }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return [ref, inView];
}
