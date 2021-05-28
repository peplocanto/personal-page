import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import classes from './GlobalSelector.module.scss';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '@domain/Themes';

export const GlobalSelector: React.FC<{ theme: Theme; setTheme: (theme: Theme) => void }> = ({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}) => {
  const router = useRouter();
  return (
    <div className={classes.root}>
      <Link href="/" locale={router.locale === 'en' ? 'es' : 'en'}>
        <div className={classes.langIcon}>
          <div className={classes[router.locale]}></div>
        </div>
      </Link>
      <div
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={classes.themeIcon}
      >
        <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
      </div>
    </div>
  );
};
