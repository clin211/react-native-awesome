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
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      borderRadius: 16,
      backgroundColor: theme.colors.card,
    },
    item: {
      width: '25%',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.border,
    },
    name: {
      fontSize: 12,
      lineHeight: 16,
      color: theme.colors.text,
      textAlign: 'center',
      fontWeight: '500',
      textTransform: 'capitalize',
      marginTop: 8,
    },
  });
};

export default useStyles;
