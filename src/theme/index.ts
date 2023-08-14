import {Theme} from '@react-navigation/native';
import {Appearance, Dimensions, PixelRatio} from 'react-native';
import {dark, light} from './colors';

interface ExtendedTheme extends Theme {
  colors: Theme['colors'] & typeof light & typeof dark;
}

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}

const {width, height, scale} = Dimensions.get('screen');

const mode = Appearance.getColorScheme() === 'dark' ? dark : light;
export type ThemeType = typeof theme;

const theme = {
  ...(mode ? dark : light),
  line: {
    onePixel: 1 / scale,
  },
  scaleRatio: {
    width: width / 375,
    height: height / 812,
    scale,
    fontScale: PixelRatio.getFontScale(),
  },
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    scale,
  },
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    scale: Dimensions.get('window').scale,
  },
};

export default theme;
