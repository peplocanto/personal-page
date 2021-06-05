import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { baseTheme } from '@styles/themes/baseTheme';
import { Theme, THEMES } from '@styles/themes/themes';
import { defaultsDeep } from 'lodash';
import React, { ReactNode } from 'react';

export const Main: React.FC<{ children: ReactNode; theme: Theme }> = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: Theme;
}) => {
  return (
    <MuiThemeProvider theme={createMuiTheme(defaultsDeep({}, baseTheme, THEMES[theme]))}>
      <CssBaseline />
      <main>{children}</main>
    </MuiThemeProvider>
  );
};
