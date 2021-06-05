import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { COLORS } from '../variables/colors';

export const darkTheme: ThemeOptions = {
  palette: {
    type: 'dark',
    text: {
      primary: COLORS.white,
    },
    background: {
      default: COLORS.black,
    },
  },
};
