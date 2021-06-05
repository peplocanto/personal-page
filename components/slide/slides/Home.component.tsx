import Typography from '@material-ui/core/Typography';
import { Trans, useTranslation } from 'next-i18next';
import React from 'react';
import { useStyles } from './Home.styles';

export const Home: React.FC = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* {!isMobile && (
        <div className={classes.hiContainer}>
          <Typography variant="h6">{t('home.bash')}</Typography>
          <Typography variant="h6" className={classes.hi}>
            {t('home.hi')}
          </Typography>
        </div>
      )} */}
      <div className={classes.header}>
        <Typography variant="h1">{t('home.title')}</Typography>
        <Typography variant="h4"><Trans i18nKey="home.sub1" >a<br/>b<br/>c</Trans></Typography>
        <Typography variant="h4"><Trans i18nKey="home.sub2" >a<br/>b<br/>c</Trans></Typography>
      </div>
    </div>
  );
};
