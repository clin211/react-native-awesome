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
  });
};

export default useStyles;
