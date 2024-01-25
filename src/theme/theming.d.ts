import commonStyle from './common-style';
import { light } from './color';

type Colors = typeof light;

export interface Theme {
    isDark: boolean;
    dark: Colors;
    light: Colors;
    colors: Colors;
    common: typeof commonStyle;
    variable: {};
}
