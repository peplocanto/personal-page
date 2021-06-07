import { CSSProperties } from '@material-ui/styles';
import { COLORS } from '../variables/colors';
import { SIZES } from '../variables/sizes';
import { flexCenter } from './flex';

export const icon = (
  side: number,
  containerSide: number,
  iconColor: string,
  containerColor: string,
): CSSProperties => ({
  ...flexCenter(),
  position: 'relative',
  height: containerSide,
  width: containerSide,
  borderRadius: '100%',
  backgroundColor: containerColor,
  cursor: 'pointer',
  overflow: 'hidden',
  transform: 'translateZ(0)',
  '& svg': {
    zIndex: 3,
    position: 'relative',
    height: side,
    width: side,
    minHeight: side,
    minWidth: side,
    maxHeight: side,
    maxWidth: side,
    color: iconColor,
  },
});

export const smallIcon = (
  animated: boolean,
  iconColor: string = COLORS.white,
  containerColor: string = COLORS.primaryMain,
  fillColor: string = COLORS.secondaryMain,
): CSSProperties => {
  const animation = animated ? iconAnimationFill(SIZES.icons.smallIconSide, fillColor) : {};
  return {
    ...icon(
      SIZES.icons.smallIconSide,
      SIZES.icons.smallIconContainerSide,
      iconColor,
      containerColor,
    ),
    ...animation,
  };
};

export const iconAnimationFill = (iconSize: number, fillColor: string): CSSProperties => ({
  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: '100%',
    boxShadow: `inset 0 0 0 0 ${fillColor}`,
    transition: 'box-shadow 0.5s ease',
  },
  '&:hover::before': {
    boxShadow: `inset 0 0 0 ${iconSize}px ${fillColor}`,
  },
});
