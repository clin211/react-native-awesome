import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {Appearance} from 'react-native';

const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff4500',
    background: '#f7f7f7',
    card: '#fff',
    text: '#000',
    border: '#ccc',
    notification: '#000',
    headline: 'rgba(0, 0, 0, 0.8)',
  },
};

const dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#00BAFF',
    background: '#171B1C',
    card: '#000',
    text: '#fff',
    border: '#ccc',
    notification: '#fff',
    headline: 'rgba(255, 255, 255, 0.8)',
  },
};

const theme = Appearance.getColorScheme() === 'dark' ? dark : light;
export type ThemeType = typeof theme;

export {light, dark};
export default theme;
