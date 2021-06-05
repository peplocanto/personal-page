import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Theme } from '@styles/themes/themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useStyles } from './GlobalSelector.styles';

export const GlobalSelector: React.FC<{ setTheme: (t: Theme) => void; theme: Theme }> = ({
  setTheme,
  theme,
}: {
  setTheme: (t: Theme) => void;
  theme: Theme;
}) => {
  const router = useRouter();
  const classes = useStyles();

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
        <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} width="16" />
      </div>
    </div>
  );
};
