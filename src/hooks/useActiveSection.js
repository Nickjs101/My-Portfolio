import { useState, useEffect, useRef } from 'react';

export default function useActiveSection(sectionIds = [], options = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const observerRef = useRef(null);

  const {
    rootMargin = '-20% 0px -60% 0px',
    threshold = [0.3, 0.5, 0.7],
  } = options;

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin,
      threshold,
    });

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
}
