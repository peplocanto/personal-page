import { useHasHeight } from '@hooks/useHasHeight';
import { useIsMobile } from '@hooks/useIsMobile';
import Typography from '@material-ui/core/Typography';
import { Trans, useTranslation } from 'next-i18next';
import React from 'react';
import { useStyles } from './About.styles';

export const About: React.FC = () => {
  const classes = useStyles();
  const isMobile = useIsMobile();
  const hasHeight = useHasHeight();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography variant="h3">{t('about.title')}</Typography>
      <div className={classes.content}>
        <Typography component={'div'} variant="body1">
          <Trans i18nKey="about.content">
            a
            <a
              href="https://en.wikipedia.org/wiki/Easter_egg#/media/File:Bg-easter-eggs.jpg"
              rel="noreferrer"
              target="_blank"
            >
              b
            </a>
            c<span style={{ fontFamily: 'monospace' }}>d</span>e
            <br />
            f
            <br />
            g
            <br />
            h
            <br />h
            <a href="https://www.instagram.com/p/CQG0ynmsmTR/" target="_blank" rel="noreferrer">
              i
            </a>
            <br />
            <a
              href="https://www.ted.com/talks/emilie_wapnick_why_some_of_us_don_t_have_one_true_calling?language=en"
              target="_blank"
              rel="noreferrer"
            >
              l
            </a>
            m
          </Trans>
        </Typography>
        {!isMobile && (
          <>
            {hasHeight && (
              <Typography component={'div'} variant="body1">
                <Trans i18nKey="about.additionalContent1">
                  a<br />b<br />c<br />d<br />e<br />f
                </Trans>
              </Typography>
            )}
            <Typography component={'div'} variant="body1">
              <Trans i18nKey="about.additionalContent2">
                a<br />b<br />c<br />d<br />e<br />f
              </Trans>
            </Typography>
          </>
        )}
      </div>
    </div>
  );
};
