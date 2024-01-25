import commonStyle from './common-style';

type Colors = typeof light;

export interface Theme {
    isDark: boolean;
    dark: Colors;
    light: Colors;
    colors: Colors;
    common: typeof commonStyle;
    variable: {};
}
