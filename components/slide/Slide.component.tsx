import { LinkMenu } from '@components/link-menu/LinkMenu.component';
import { Pages } from '@domain/Pages';
import React from 'react';
import { useStyles } from './Slide.styles';
import { About } from './slides/about/About.component';
import { Home } from './slides/home/Home.component';

export const Slide: React.FC<{ page: Pages }> = ({ page }: { page: Pages }) => {
  const classes = useStyles();
  const getSlide = (page: Pages) => {
    switch (page) {
      case Pages.HOME:
        return <Home />;
      case Pages.ABOUT:
        return <About />;
    }
  };
  return (
    <article className={classes.root}>
      {getSlide(page)}
      <LinkMenu />
    </article>
  );
};
