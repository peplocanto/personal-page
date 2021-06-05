import { ThemeOptions } from '@material-ui/core';

import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

export type Theme = 'dark' | 'light';

export const THEMES: Record<Theme, ThemeOptions> = {
  light: lightTheme,
  dark: darkTheme,
};
