import { useEffect, useState } from 'react';
import { SIZES } from '../styles/variables/sizes';

export const useHasHeight = () => {
  const [windowSize, setWindowSize] = useState(undefined);
  const heightBreakpoint = SIZES.breakpoints.md;

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize >= heightBreakpoint;
};
