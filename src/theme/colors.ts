import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {Appearance} from 'react-native';

const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff4500',
    background: '#fff',
    card: '#fff',
    text: '#000',
    border: '#ccc',
    notification: '#000',
  },
};

const dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#00BAFF',
    background: '#000',
    card: '#000',
    text: '#fff',
    border: '#ccc',
    notification: '#fff',
  },
};

const theme = Appearance.getColorScheme() === 'dark' ? dark : light;
export type ThemeType = typeof theme;

export {light, dark};
export default theme;
