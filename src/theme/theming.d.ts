import commonStyle from './common-style';

export interface Colors {
    primary: string;
    background: string;
}

export interface Theme {
    isDark: boolean;
    dark: Colors;
    light: Colors;
    colors: Colors;
    common: typeof commonStyle;
    variable: {};
}
