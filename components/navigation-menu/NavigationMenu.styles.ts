import { makeStyles } from '@material-ui/core/styles';
import { flexCenter } from '@styles/utils/flex';
import { smallIcon } from '@styles/utils/icons';
const planeSide = 16;
export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    right: theme.spacing(3),
    top: '55%',
    transform: 'translateY(-50%)',
    zIndex: theme.zIndex.appBar,
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    listStyle: 'none',
    textDecoration: 'none',
    color: 'inherit',
    padding: 0,
  },
  item: {
    ...flexCenter(),
    flexDirection: 'column',
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    'overflow-y': 'hidden',
    marginTop: 12,
    height: 0,
    opacity: 0,
    transition: 'height 1.5s ease-out, opacity 1s ease-out',
    '& span': {
      writingMode: 'vertical-rl',
    },
  },
  labelActive: {
    height: 152,
    [theme.breakpoints.down('md')]: {
      height: 120,
    },
    opacity: 1,
    transition: 'height 1.5s ease-out, opacity 1s ease-out',
    border: '1px solid transparent',
  },
  icon: {
    [theme.breakpoints.down('md')]: {
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
  iconActive: {
    backgroundColor: theme.palette.secondary.main,
    '&::after': {
      transform: 'translateY(-100%) rotate(500deg)',
      transition: 'transform 1.3s ease-in',
      transitionDelay: '0.2s',
    },
  },
  user: {
    '& svg': {
      marginTop: theme.spacing(2),
    },
  },
  plane: {
    '& svg': {
      width: planeSide,
      height: planeSide,
      minWidth: planeSide,
      minHeight: planeSide,
      maxWidth: planeSide,
      maxHeight: planeSide,
      marginLeft: '-3px',
    },
  },
}));
