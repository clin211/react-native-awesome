import {StyleSheet, StatusBar} from 'react-native';
import useMakeStyle from '../../../hooks/useMakeStyle';

const useStyles = () => {
  const {theme} = useMakeStyle();
  const statusBarHeight = StatusBar.currentHeight;
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: statusBarHeight,
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.colors.headline,
      textTransform: 'capitalize',
    },
  });
};

export default useStyles;