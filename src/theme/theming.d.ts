import commonStyle from './common-style';

export interface Theme {
    isDark: boolean;
    dark: Colors;
    light: Colors;
    common: typeof commonStyle;
    variable: {};
}
