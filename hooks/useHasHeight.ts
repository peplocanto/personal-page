import { useIsMobile } from '@hooks/useIsMobile';
import { useEffect, useState } from 'react';
import { SIZES } from '../styles/variables/sizes';

export const useHasHeight = () => {
  const [windowSize, setWindowSize] = useState(undefined);
  const isMobile = useIsMobile();
  const heightBreakpoint = isMobile
    ? SIZES.breakpoints.mobileHeight
    : SIZES.breakpoints.desktopHeight;

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
