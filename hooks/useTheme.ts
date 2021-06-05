import { makeSelectTheme } from '@store/theme/theme.selectors';
import { actions } from '@store/theme/theme.store';
import { Theme } from '@styles/themes/themes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(makeSelectTheme());
  const setTheme = (t: Theme) => {
    dispatch(actions.updateTheme(t));
  };

  useEffect(() => {
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
  }, []);

  return { theme, setTheme };
};
