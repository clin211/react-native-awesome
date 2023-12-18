import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import { fonts } from '@/theme';
import { ScreenParams } from '@/navigator/navigator';

const Fonts: FC<NativeStackScreenProps<ScreenParams, 'Fonts'>> = ({ navigation }) => {
    const list = [
        {
            title: 'Manrope',
            data: ['200', '300', '400', '500', '600', '700', '800'],
        },
        {
            title: 'Montserrat',
            data: ['200', '300', '400', '500', '600', '700', '800'],
        },
        {
            title: '东方大楷',
            data: ['200', '300', '400', '500', '600', '700', '800'],
        },
    ];
    return (
        <SectionList
            sections={list}
            style={styles.container}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={{ rowGap: 12, paddingBottom: 30 }}
            renderSectionHeader={({ section: { title } }) => {
                const isDongFang = title == '东方大楷';
                return (
                    <View style={styles.header}>
                        <View style={styles.line} />
                        <Text
                            style={[
                                styles.title,
                                isDongFang && {
                                    fontFamily: fonts.AlimamaDongFangDaKai.Regular,
                                    lineHeight: 26,
                                },
                            ]}
                        >
                            {title}
                        </Text>
                    </View>
                );
            }}
            renderItem={({ section, item }) => {
                const { title } = section;
                const style = (styles as any)[`${title}-${item}`];
                const isDongFang = title == '东方大楷';
                if (isDongFang) console.log('item:', item);
                return (
                    <View style={styles.item}>
                        <View style={styles['item-header']}>
                            <Text
                                style={[
                                    styles['item-title'],
                                    isDongFang && {
                                        fontWeight: item as any,
                                        fontFamily: fonts.AlimamaDongFangDaKai.Regular,
                                    },
                                ]}
                            >
                                {isDongFang ? '东方大楷' : style.fontFamily}
                            </Text>
                            {!isDongFang && (
                                <Pressable
                                    style={styles['item-views']}
                                    onPress={() =>
                                        navigation.navigate('FontDetail', {
                                            font: style.fontFamily,
                                        })
                                    }
                                >
                                    <Text style={styles['views-text']}>views</Text>
                                </Pressable>
                            )}
                        </View>
                        {!isDongFang && (
                            <Text style={[styles.text, style]}>
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890
                            </Text>
                        )}
                        {isDongFang && (
                            <Text style={styles['dong-fang-da-kai']}>
                                浮生若梦 明心见性 自知则明 知人者智 相从心生 虎啸龙吟
                            </Text>
                        )}
                    </View>
                );
            }}
        />
    );
};

export default Fonts;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        rowGap: 20,
    },
    content: {
        margin: 16,
        borderRadius: 12,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
    },
    line: {
        height: 20,
        width: 4,
        borderRadius: 4,
        marginEnd: 8,
        backgroundColor: '#ff4500',
    },
    title: {
        fontSize: 24,
        lineHeight: 24,
        textAlignVertical: 'center',
        fontFamily: fonts.Manrope.Bold,
        color: 'rgba(0, 0, 0, 0.8)',
    },
    item: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
    },
    'item-header': {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    'item-views': {
        height: '100%',
    },
    'views-text': {
        fontSize: 12,
        lineHeight: 12,
        color: '#ff4500',
        fontFamily: fonts.Manrope.Medium,
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    'item-title': {
        fontSize: 16,
        lineHeight: 20,
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: fonts.Manrope.SemiBold,
        marginBottom: 8,
    },
    text: {
        marginTop: 4,
        fontSize: 16,
        lineHeight: 16 * 1.2,
        color: 'skyblue',
    },
    'Manrope-200': {
        fontFamily: fonts.Manrope.ExtraLight,
    },
    'Manrope-300': {
        fontFamily: fonts.Manrope.Light,
    },
    'Manrope-400': {
        fontFamily: fonts.Manrope.Regular,
    },
    'Manrope-500': {
        fontFamily: fonts.Manrope.Medium,
    },
    'Manrope-600': {
        fontFamily: fonts.Manrope.SemiBold,
    },
    'Manrope-700': {
        fontFamily: fonts.Manrope.Bold,
    },
    'Manrope-800': {
        fontFamily: fonts.Manrope.ExtraBold,
    },
    'zhao-cai': {
        fontSize: 24,
        lineHeight: 24 * 1.2,
        fontFamily: 'AaZCKSNon-CommercialUse',
        fontWeight: '100',
    },
    'Montserrat-100': {
        fontFamily: fonts.Montserrat.Thin,
    },
    'Montserrat-200': {
        fontFamily: fonts.Montserrat.ExtraLight,
    },
    'Montserrat-300': {
        fontFamily: fonts.Montserrat.Light,
    },
    'Montserrat-400': {
        fontFamily: fonts.Montserrat.Regular,
    },
    'Montserrat-500': {
        fontFamily: fonts.Montserrat.Medium,
    },
    'Montserrat-600': {
        fontFamily: fonts.Montserrat.SemiBold,
    },
    'Montserrat-700': {
        fontFamily: fonts.Montserrat.Bold,
    },
    'Montserrat-800': {
        fontFamily: fonts.Montserrat.ExtraBold,
    },
    'dong-fang-da-kai': {
        fontFamily: fonts.AlimamaDongFangDaKai.Regular,
        fontSize: 14,
    },
});
