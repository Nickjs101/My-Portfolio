import { useCallback } from 'react';

export default function useScrollToSection(navbarHeight = 64) {
  const scrollToSection = useCallback((sectionId, event) => {
    if (event) {
      event.preventDefault();
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }, [navbarHeight]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return { scrollToSection, scrollToTop };
}
