import {StyleSheet, StatusBar} from 'react-native';
import useMakeStyle from '@/hooks/useMakeStyle';

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
    'game-card-icon': {
      width: 140 * theme.scaleRatio.width,
      height: 140 * theme.scaleRatio.height,
    },
    'btn-all': {
      paddingHorizontal: 24,
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'stretch',
      alignSelf: 'flex-start',
    },
    button: {
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#ff4500',
      alignSelf: 'flex-start',
      marginVertical: 4,
      marginEnd: 12,
    },
    'button-text': {
      fontSize: 16,
      fontWeight: '500',
      color: '#ff4500',
      textTransform: 'capitalize',
    },
  });
};

export default useStyles;
