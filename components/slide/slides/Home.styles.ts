import { makeStyles } from '@material-ui/core/styles';
import { flexCenter } from '@styles/utils/flex';
import { hex2rgba } from '@styles/utils/func';

const background = 'url("/images/profile-site-colors.jpg")';

export const useStyles = makeStyles((theme) => ({
  root: {
    ...flexCenter(),
    height: '100%',
    width: '100%',
    background:
      theme.palette.type === 'dark'
        ? `linear-gradient(${hex2rgba(theme.palette.common.black, 0.2)}, ${hex2rgba(
            theme.palette.common.black,
            0.7,
          )}), ${background}`
        : `linear-gradient(${hex2rgba(theme.palette.common.white, 0.7)}, ${hex2rgba(
            theme.palette.common.white,
            0.2,
          )}), ${background}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
  header: {
    position: 'absolute',
    left: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    bottom: 'auto',
    top: theme.spacing(3),
    height: '100%',
    '& h1': {
      [theme.breakpoints.down('md')]: {
        fontSize: '2.8rem',
        writingMode: 'vertical-rl',
      },
      textAlign: 'left',
    },
    '& h4': {
      position: 'absolute',
      fontSize: '1.4rem',
      bottom: theme.spacing(5 * 2),
      zIndex: 10,
      lineHeight: '2rem',
      width: 136,
      '& + h4': {
        bottom: theme.spacing(8.5),
        color: theme.palette.secondary.main,
        opacity: 0.8,
        textAlign: 'right',
        // left: theme.spacing(3),
        zIndex: 9,
      },
      //},
    },
  },
  /* hiContainer: { position: 'absolute', top: theme.spacing(3), left: theme.spacing(3) },
  hi: {
    width: '196px',
    animation: '$typing 2s steps(14), $blink 0.5s step-end infinite alternate',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRight: '16px solid',
  },

  '@keyframes typing': {
    from: {
      width: 0,
    },
  },
  '@keyframes blink': {
    '50%': {
      borderColor: 'transparent',
    },
  }, */
}));
