import { makeStyles } from '@material-ui/core/styles';
import { smallIcon } from '@styles/utils/icons';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: theme.spacing(3),
    bottom: theme.spacing(3),
    zIndex: theme.zIndex.appBar,
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
    justifyContent: 'center',
    listStyle: 'none',
    textDecoration: 'none',
    color: 'inherit',
    padding: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: 0,
    animationFillMode: 'forwards !important',
    [theme.breakpoints.down('sm')]: {
      animation: '$itemMobile 2s ease-out',
      '& + $item': {
        marginLeft: theme.spacing(2),
      },
    },
    [theme.breakpoints.up('md')]: {
      animation: '$itemDesktop 2s ease-out',
      '& + $item': {
        marginTop: theme.spacing(2),
      },
    },
    '&:nth-of-type(2)': {
      animationDelay: '0.66s',
    },
    '&:nth-of-type(3)': {
      animationDelay: '1.22s',
    },
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      ...smallIcon(false),
    },
    [theme.breakpoints.up('md')]: {
      ...smallIcon(true),
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: 2,
      bottom: '-50%',
      left: '-50%',
      height: '200%',
      width: '200%',
      borderRadius: '33%',
      backgroundColor: theme.palette.primary.main,
    },
  },
  '@keyframes itemDesktop': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-200%)',
    },
    '40%': { opacity: 0 },
    '100%': {
      opacity: 1,
      transform: 'translateX(0%)',
    },
  },
  '@keyframes itemMobile': {
    '0%': {
      opacity: 0,
      transform: 'translateY(300%)',
    },
    '40%': { opacity: 0 },
    '100%': {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  },
}));
