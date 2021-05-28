import useIsMounted from './useIsMounted';
import { useEffect, useState } from 'react';

const useWindowLocation = (): Location | void => {
  const isMounted = useIsMounted();
  const [location, setLocation] = useState<Location | void>(
    isMounted ? window.location : undefined,
  );

  useEffect(() => {
    if (!isMounted) return;

    const setWindowLocation = () => {
      setLocation(window.location);
    };

    if (!location) {
      setWindowLocation();
    }

    window.addEventListener('popstate', setWindowLocation);
    window.addEventListener('hashChange', setWindowLocation);

    return () => {
      window.removeEventListener('popstate', setWindowLocation);
      window.removeEventListener('hashChange', setWindowLocation);
    };
  }, [isMounted, location]);

  return location;
};

export default useWindowLocation;
