import React from 'react';
import { Pressable, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';

const config = [
    {
        content: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890',
        title: 'Manrope',
        weight: [200, 300, 400, 500, 600, 700, 800],
    },
];
const Fonts = () => {
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
            contentContainerStyle={{ rowGap: 12 }}
            renderSectionHeader={({ section: { title } }) => {
                const isDongFang = title == '东方大楷';
                return (
                    <View style={styles.header}>
                        <View style={styles.line} />
                        <Text
                            style={[
                                styles.title,
                                isDongFang && {
                                    fontFamily: fontFamily.DongFangDaKai,
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
                return (
                    <View style={styles.item}>
                        <View style={styles['item-header']}>
                            <Text style={styles['item-title']}>
                                {isDongFang ? '东方大楷' : style.fontFamily}
                            </Text>
                            <Pressable style={styles['item-views']}>
                                <Text style={styles['views-text']}>views</Text>
                            </Pressable>
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

/**
 * @desc 字体
 * @return string
 */
export const fontFamily = {
    ExtraLight: 'Manrope-ExtraLight', // 200
    Light: 'Manrope-Light', // 300
    Regular: 'Manrope-Regular', // 400
    Medium: 'Manrope-Medium', // 500
    SemiBold: 'Manrope-SemiBold', // 600
    Bold: 'Manrope-Bold', // 700
    ExtraBold: 'Manrope-ExtraBold', // 800
    DongFangDaKai: 'AlimamaDongFangDaKai-Regular',
};

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
        fontFamily: fontFamily.Bold,
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
        fontFamily: fontFamily.Medium,
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    'item-title': {
        fontSize: 16,
        lineHeight: 20,
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: fontFamily.SemiBold,
        marginBottom: 8,
    },
    text: {
        marginTop: 4,
        fontSize: 16,
        lineHeight: 16 * 1.2,
        color: 'skyblue',
    },
    'Manrope-200': {
        fontFamily: fontFamily.ExtraLight,
    },
    'Manrope-300': {
        fontFamily: fontFamily.Light,
    },
    'Manrope-400': {
        fontFamily: fontFamily.Regular,
    },
    'Manrope-500': {
        fontFamily: fontFamily.Medium,
    },
    'Manrope-600': {
        fontFamily: fontFamily.SemiBold,
    },
    'Manrope-700': {
        fontFamily: fontFamily.Bold,
    },
    'Manrope-800': {
        fontFamily: fontFamily.ExtraBold,
    },
    'zhao-cai': {
        fontSize: 24,
        lineHeight: 24 * 1.2,
        fontFamily: 'AaZCKSNon-CommercialUse',
        fontWeight: '100',
    },
    'Montserrat-100': {
        fontFamily: 'Montserrat-Thin',
    },
    'Montserrat-200': {
        fontFamily: 'Montserrat-ExtraLight',
    },
    'Montserrat-300': {
        fontFamily: 'Montserrat-Light',
    },
    'Montserrat-400': {
        fontFamily: 'Montserrat-Regular',
    },
    'Montserrat-500': {
        fontFamily: 'Montserrat-Medium',
    },
    'Montserrat-600': {
        fontFamily: 'Montserrat-SemiBold',
    },
    'Montserrat-700': {
        fontFamily: 'Montserrat-Bold',
    },
    'Montserrat-800': {
        fontFamily: 'Montserrat-ExtraBold',
    },
    'dong-fang-da-kai': {
        fontFamily: 'AlimamaDongFangDaKai-Regular',
        fontSize: 14,
    },
});
