import {StyleSheet} from 'react-native';
import useMakeStyle from '../../../hooks/useMakeStyle';

const useStyles = () => {
  const {theme} = useMakeStyle();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    text: {
      fontSize: 20,
      lineHeight: 24,
      color: theme.colors.text,
    },
    'carousel-container': {
      width: '100%',
      alignItems: 'center',
    },
    carousel: {
      width: theme.scaleRatio.width * 343,
      height: theme.scaleRatio.width * 343,
    },
    'carousel-box': {
      width: theme.scaleRatio.width * 343,
      height: theme.scaleRatio.width * 343,
      borderRadius: 16,
      overflow: 'hidden',
    },
    pressable: {
      flex: 1,
      justifyContent: 'center',
    },
    'carousel-image': {
      width: '100%',
      height: '100%',
    },
  });
};

export default useStyles;
