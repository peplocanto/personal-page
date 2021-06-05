import { useEffect, useState } from 'react';
import { SIZES } from '../styles/variables/sizes';

export const useIsMobile = () => {
  const [windowSize, setWindowSize] = useState(undefined);
  const mobileBreakpoint = SIZES.breakpoints.md;

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
