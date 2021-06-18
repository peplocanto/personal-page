import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { COLORS } from '@styles/variables/colors';
import { SIZES } from '@styles/variables/sizes';
const breakpoints = createBreakpoints({});
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
          [breakpoints.up('sm')]: {
            fontSize: SIZES.typography.fontSize.baseDesktop,
          },
        },
        body: {
          width: '100%',
          height: '100%',
          'overflow-x': 'hidden',
          fontSize: SIZES.typography.fontSize.baseMobile,
          [breakpoints.up('sm')]: {
            fontSize: SIZES.typography.fontSize.baseDesktop,
          },
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontWeightBold: SIZES.typography.fontWeight.bold,
    fontWeightRegular: SIZES.typography.fontWeight.normal,
    h1: {
      fontSize: '2.8rem',
      lineHeight: '2.8rem',
      fontFamily: 'Playfair Display',
    },
    h3: { fontSize: '1.8rem', lineHeight: '2rem', fontFamily: 'Arvo', fontWeight: 'bold' },
    h4: { fontSize: '1.4rem', lineHeight: '2rem', fontFamily: 'Arvo' },
    subtitle1: {
      fontWeight: 'bold',
      fontFamily: 'Arvo',
    },
    body1: {
      fontSize: '0.9rem',
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
