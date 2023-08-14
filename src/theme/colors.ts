import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff4500',
    background: '#f7f7f7',
    card: '#fff',
    text: '#000',
    border: 'rgba(0, 0, 0, 0.05)',
    notification: '#000',
    headline: 'rgba(0, 0, 0, 0.8)',
    transparent: 'rgba(0, 0, 0, 0)',
    white: '#fff',
  },
};

const dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#00BAFF',
    background: '#171B1C',
    card: '#23282A',
    text: '#fff',
    border: 'rgba(255, 255,255, 0.05)',
    notification: '#fff',
    headline: 'rgba(255, 255, 255, 0.8)',
    transparent: 'rgba(0, 0, 0, 0)',
    white: '#000',
  },
};

export {light, dark};
