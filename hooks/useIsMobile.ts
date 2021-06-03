import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [windowSize, setWindowSize] = useState(undefined);
  const mobileBreakpoint = 576;

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize <= mobileBreakpoint;
};
