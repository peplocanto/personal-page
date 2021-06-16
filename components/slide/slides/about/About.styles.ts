import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    '& .MuiTypography-h3': {
      marginBottom: theme.spacing(3),
    },
  },
  content: {
    '& .MuiTypography-root + .MuiTypography-root': {
      marginTop: theme.spacing(3),
    },
  },
}));
