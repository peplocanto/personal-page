export const SIZES = {
  spacing: {
    padding: 24,
    margin: 12,
    highZIndex: 1000,
    highestZIndex: 3000,
  },
  typography: {
    fontSize: {
      baseDesktop: 22,
      baseMobile: 16,
      sm: '0.8rem',
      normal: '1rem',
      md: '1.5rem',
      lg: '3rem',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  icons: {
    smallIconSide: 24,
    get smallIconContainerSide() {
      return this.smallIconSide * 1.6;
    },
  },
};
