import { Pages } from '@domain/Pages';
import React from 'react';
import classes from './Slide.module.scss';
import { Home } from './slides/Home.component';

export const Slide: React.FC<{ page: Pages }> = ({ page }: { page: Pages }) => {
  const getSlide = (page: Pages) => {
    switch (page) {
      case Pages.HOME:
        return <Home />;
    }
  };
  return <article className={classes.root}>{getSlide(page)}</article>;
};
