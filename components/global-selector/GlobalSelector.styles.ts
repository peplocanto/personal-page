import { makeStyles } from '@material-ui/core/styles';
import { flexCenter } from '@styles/utils/flex';
import { smallIcon } from '@styles/utils/icons';
import { SIZES } from '@styles/variables/sizes';

const bk = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  borderRadius: '100%',
};

const zeroSize = { width: 0, height: 0 };
const fullSize = { width: '100%', height: '100%' };

const en = "url('/icons/en.svg')";
const es = "url('/icons/es.svg')";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    right: theme.spacing(3),
    top: theme.spacing(3),
    zIndex: theme.zIndex.appBar,
  },
  themeIcon: {
    marginTop: 12,
    ...smallIcon(false),
  },
  langIcon: {
    ...flexCenter(),
    position: 'relative',
    height: SIZES.icons.smallIconContainerSide,
    width: SIZES.icons.smallIconContainerSide,
    borderRadius: '100%',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  es: {
    ...bk,
    backgroundImage: es,
    animation: '$pulseEs 0.8s ease-out',
  },
  en: {
    ...bk,
    backgroundImage: en,
    animation: '$pulseEn 0.8s ease-out',
  },

  '@keyframes pulseEn': {
    '0%': {
      backgroundImage: es,
      ...fullSize,
    },
    '25%': {
      ...zeroSize,
    },
    '50%': {
      backgroundImage: en,
    },
    '100%': {
      ...fullSize,
    },
  },

  '@keyframes pulseEs': {
    '0%': {
      backgroundImage: en,
      ...fullSize,
    },
    '25%': {
      ...zeroSize,
    },
    '50%': {
      backgroundImage: es,
    },
    '100%': {
      ...fullSize,
    },
  },
}));
