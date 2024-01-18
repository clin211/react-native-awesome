import React, { FC } from 'react';
import { View, Text, TextStyle } from 'react-native';

interface Props {
    html: string;
    style?: TextStyle;
}
const ATag: FC<Props> = ({ html, style }) => {
    // const onPress =
    return <Text style={{ color: 'blue', ...style }}>{html}</Text>;
};

export default ATag;
