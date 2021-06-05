import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { COLORS } from '@styles/variables/colors';

export const lightTheme: ThemeOptions = {
  palette: {
    type: 'light',
    text: {
      primary: COLORS.black,
    },
    background: {
      default: COLORS.white,
    },
  },
};
