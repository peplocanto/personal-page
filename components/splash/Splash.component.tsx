import React from 'react';
import { useStyles } from './Splash.styles';

export const Splash: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};
