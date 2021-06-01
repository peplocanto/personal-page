import { Theme } from '@domain/Themes';
import clsx from 'clsx';
import React from 'react';
import classes from './Splash.module.scss';

export const Splash: React.FC<{ theme: Theme }> = ({ theme }: { theme: Theme }) => {
  return <div className={clsx(classes[theme], classes.root)}></div>;
};
