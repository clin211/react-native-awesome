import {useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {dark, light} from '../theme/colors';
import shared from '../utils/shared';

const useMakeStyle = () => {
  const mode = useColorScheme() || 'light';
  const theme = mode === 'light' ? light : dark;
  shared.systemColorScheme = useMemo(() => mode, [mode]);
  return {mode, theme};
};

export default useMakeStyle;
