import { useIsMobile } from '@hooks/useIsMobile';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from 'next-i18next';
import React from 'react';
import classes from './Home.module.scss';

export const Home: React.FC = () => {
  const { t } = useTranslation('common');
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  console.log(theme);
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>{t('home.title')}</h1>
        {!isMobile && <h2 className={classes.hi}>{t('home.hi')}</h2>}
      </div>
    </div>
  );
};
