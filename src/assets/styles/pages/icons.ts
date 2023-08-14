import {StyleSheet} from 'react-native';
import useMakeStyle from '../../../hooks/useMakeStyle';

const useStyles = () => {
  const {theme} = useMakeStyle();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      borderRadius: 16,
      backgroundColor: theme.colors.card,
    },
    item: {
      marginBottom: 10,
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    name: {},
  });
};

export default useStyles;
