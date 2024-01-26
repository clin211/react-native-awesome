import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Animated, Appearance, useColorScheme } from 'react-native';
import { Theme } from './theming';
import { dark, light } from './color';
import commonStyle from './common-style';
import EStyleSheet from 'react-native-extended-stylesheet';

export const fonts = {
    Manrope: {
        ExtraLight: 'Manrope-ExtraLight',
        Light: 'Manrope-Light',
        Regular: 'Manrope-Regular',
        Medium: 'Manrope-Medium',
        SemiBold: 'Manrope-SemiBold',
        Bold: 'Manrope-Bold',
        ExtraBold: 'Manrope-ExtraBold',
    },
    AlimamaDongFangDaKai: {
        Regular: 'AlimamaDongFangDaKai-Regular',
    },
    Montserrat: {
        Thin: 'Montserrat-Thin',
        ExtraLight: 'Montserrat-ExtraLight',
        Light: 'Montserrat-Light',
        Regular: 'Montserrat-Regular',
        Medium: 'Montserrat-Medium',
        SemiBold: 'Montserrat-SemiBold',
        Bold: 'Montserrat-Bold',
        ExtraBold: 'Montserrat-ExtraBold',
    },
};

export const fontAll: string[] = Object.values(fonts).flatMap(font => Object.values(font));

export const defaultTheme: Theme = {
    isDark: Appearance.getColorScheme() === 'dark',
    dark,
    light,
    common: commonStyle,
    variable: {},
};

const ThemeContext = createContext<Theme>(defaultTheme);

ThemeContext.displayName = 'ThemeContext';

type Props = {
    value: Theme;
    children: ReactNode;
};

export default function ThemeProvider({ value, children }: Props) {
    const colorScheme = useColorScheme();
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500, // 过渡动画的持续时间
            useNativeDriver: true,
        }).start();
    }, [colorScheme]);

    return (
        <ThemeContext.Provider value={value}>
            <Animated.View
                style={{
                    flex: 1,
                    opacity: fadeAnim,
                }}
            >
                {children}
            </Animated.View>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const theme = useContext(ThemeContext);

    return theme;
}
