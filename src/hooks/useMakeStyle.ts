import {useMemo} from 'react';
import {useColorScheme} from 'react-native';
import theme from '../theme';
import {dark, light} from '../theme/colors';
import shared from '../utils/shared';

const useMakeStyle = () => {
  const mode = useColorScheme() || 'light';
  const t = {...theme, ...(mode === 'light' ? light : dark)};
  shared.systemColorScheme = useMemo(() => mode, [mode]);
  return {mode, theme: t};
};

export default useMakeStyle;
