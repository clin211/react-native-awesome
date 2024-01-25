declare const global: {
    insets: { bottom: number; left: number; right: number; top: number };
    push_id: string;
};

declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}
