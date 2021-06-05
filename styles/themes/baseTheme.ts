import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { COLORS } from '@styles/variables/colors';
import { SIZES } from '@styles/variables/sizes';

export const baseTheme: ThemeOptions = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          minWidth: '100%',
          height: '100%',
          minHeight: '100%',
          fontSize: SIZES.typography.fontSize.baseMobile,
          [`@media (min-width:${SIZES.breakpoints.sm})`]: {
            fontSize: SIZES.typography.fontSize.baseDesktop,
          },
        },
        body: {
          width: '100%',
          height: '100%',
          'overflow-x': 'hidden',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Arvo',
    fontWeightBold: SIZES.typography.fontWeight.bold,
    fontWeightRegular: SIZES.typography.fontWeight.normal,
    h6: {
      fontFamily: 'Roboto Mono',
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: {
      main: COLORS.primaryMain,
      light: COLORS.primaryLight,
      dark: COLORS.primaryDark,
    },
    secondary: {
      main: COLORS.secondaryMain,
      light: COLORS.secondaryLight,
      dark: COLORS.secondaryDark,
    },
    common: {
      white: COLORS.white,
      black: COLORS.black,
    },
    grey: {
      [100]: COLORS.grey10,
      [200]: COLORS.grey20,
      [300]: COLORS.grey30,
      [400]: COLORS.grey40,
    },
  },
  zIndex: {
    appBar: SIZES.spacing.highZIndex,
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: SIZES.breakpoints.xs,
      sm: SIZES.breakpoints.sm,
      md: SIZES.breakpoints.md,
      lg: SIZES.breakpoints.lg,
      xl: SIZES.breakpoints.xl,
    },
  },
};
