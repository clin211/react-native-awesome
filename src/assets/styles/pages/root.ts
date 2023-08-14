import {StyleSheet} from 'react-native';
import useMakeStyle from '../../../hooks/useMakeStyle';

const useStyles = () => {
  const {theme} = useMakeStyle();
  return StyleSheet.create({
    content: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.colors.headline,
      textTransform: 'capitalize',
    },
    header: {
      backgroundColor: theme.colors.background,
    },
  });
};

export default useStyles;
