import { ScreenParams } from '@/navigator/navigator';
import { fonts } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useLayoutEffect, useMemo } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextStyle, View } from 'react-native';

const weight = ['200', '300', '400', '500', '600', '700', '800'];
const FontDetail: FC<NativeStackScreenProps<ScreenParams, 'FontDetail'>> = ({
    navigation,
    route,
}) => {
    const { font } = route.params;
    const param = useMemo(() => font.split('-'), [font]);
    const baseFontFamily = (fonts as any)[param[0]][param[1]];

    useLayoutEffect(() => {
        navigation.setOptions({ title: `${param[0]} ${param[1]}` });
    }, []);

    return (
        <FlatList
            data={weight}
            contentContainerStyle={styles.content}
            ListHeaderComponent={() => <Text style={styles.title}>{baseFontFamily}</Text>}
            renderItem={({ item }) => {
                const _fonts = { fontFamily: `${baseFontFamily}`, fontWeight: item as any };
                return (
                    <View style={styles.item}>
                        <Text style={[styles.title, _fonts]}>font weight: {item}</Text>
                        <Text style={[styles.desc, _fonts]}>
                            abcdefghijklmnopqrstuvwxyz 0123456789
                        </Text>
                    </View>
                );
            }}
        />
    );
};

export default FontDetail;

const styles = StyleSheet.create({
    container: {},
    content: {
        padding: 24,
        rowGap: 8,
    },
    item: {
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 12,
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontFamily: fonts.Manrope.Bold,
    },
    desc: {
        fontSize: 16,
        lineHeight: 20,
        marginTop: 8,
    },
});
