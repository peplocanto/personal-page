import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    opacity: 0,
    zIndex: -theme.zIndex.snackbar,
    animation: '$fade 2s',
    backgroundColor: theme.palette.background.default,
  },
  '@keyframes fade': {
    '0%': {
      opacity: 1,
      zIndex: theme.zIndex.snackbar,
    },
    '75%': {
      opacity: 1,
      zIndex: theme.zIndex.snackbar,
    },
    '100%': {
      opacity: 0,
      zIndex: -theme.zIndex.snackbar,
    },
  },
}));
