import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import classes from './LanguageSelector.module.scss';

export const LanguageSelector: React.FC = () => {
  const router = useRouter();
  return (
    <div className={classes.root}>
      <Link href="/" locale={router.locale === 'en' ? 'es' : 'en'}>
        <div className={classes.iconContainer}>
          <div className={classes[router.locale]}></div>
        </div>
      </Link>
    </div>
  );
};
