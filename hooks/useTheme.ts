import useIsMounted from './useIsMounted';
import { useEffect, useState } from 'react';
import { Theme } from '@domain/Themes';

export const useTheme = () => {
  const isMounted = useIsMounted();
  const [theme, setTheme] = useState<Theme>(undefined);

  useEffect(() => {
    if (!isMounted) return;
    if (!theme) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      e.matches ? setTheme('dark') : setTheme('light');
    });
    return () => {
      setTheme(undefined);
    };
  }, [isMounted]);

  return { theme, setTheme };
};
