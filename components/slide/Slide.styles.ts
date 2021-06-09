import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    '& > div:first-child': {
      [theme.breakpoints.down('md')]: {
        padding: `${theme.spacing(3)}px ${theme.spacing(11)}px ${theme.spacing(
          15,
        )}px ${theme.spacing(3)}px`,
      },
      [theme.breakpoints.up('md')]: {
        padding: `${theme.spacing(3)}px ${theme.spacing(11)}px ${theme.spacing(
          20,
        )}px ${theme.spacing(3)}px`,
      },
    },
  },
}));
