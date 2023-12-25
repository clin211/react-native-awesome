import React, { FC, useMemo } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import specialDeals from '@/mock/special-deals';
import { percent as calcPercent } from '@/utils/util';
import { fonts } from '@/theme';

const SpecialDeal: FC<(typeof specialDeals.pins)[0]> = ({
    item_id,
    category_id,
    category_name,
    mode,
    item_name,
    category_code,
    icon_url,
    type,
    rebate,
    condition,
    free_item,
    item_price,
    result_price,
}) => {
    const icon = useMemo(() => {
        return `${icon_url}?x-oss-process=image/resize,w_120`;
    }, [icon_url]);

    const percent = useMemo(() => `${Number(rebate).toFixed(1)}%`, [rebate]);
    const price = useMemo(() => {
        if (type === 'discount') {
            const discount = calcPercent(rebate);
            return (Number(item_price) * discount).toFixed(2);
        }
    }, [item_price, rebate, type]);
    const isLargess = useMemo(() => type === 'largess', [type]);
    const isDiscount = useMemo(() => type === 'discount', [type]);
    const info = () => {
        let content = 'text';
        if (isDiscount) {
            content = `Discount ${percent}%`;
        }
        if (isLargess && free_item?.length) {
            content = `Buy ${condition}: Free ${parseInt(rebate, 10)} × ${free_item[0].item_name}`;
        }
        return content;
    };
    return (
        <Pressable style={styles.item}>
            <View style={styles.product}>
                <Image style={styles.image} source={{ uri: icon }} />
                <View style={styles.detail}>
                    <Text style={styles['sku-name']} numberOfLines={2}>
                        {item_name}
                    </Text>
                    <Text style={styles['category-name']}>{category_name}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                {isLargess && (
                    <Text style={styles['footer-text']} numberOfLines={1}>
                        <Text style={styles['footer-title']}>Free</Text>
                        <View style={{ width: 8 }} />
                        <Text numberOfLines={1} style={styles.free}>
                            {info()}
                        </Text>
                    </Text>
                )}
                {isDiscount && (
                    <View style={styles['discount-box']}>
                        <Text style={styles.percent}>-{percent}</Text>
                        <Text style={styles.price}>{price}</Text>
                    </View>
                )}
            </View>
        </Pressable>
    );
};

export default SpecialDeal;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginBottom: 8,
        marginHorizontal: 24,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    product: {
        padding: 16,
        flexDirection: 'row',
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.05)',
    },
    detail: {
        flex: 1,
        marginStart: 16,
        justifyContent: 'center',
    },
    'sku-name': {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: fonts.Manrope.Bold,
        color: 'rgba(0, 0, 0, 0.8)',
    },
    'category-name': {
        fontSize: 12,
        lineHeight: 16,
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: fonts.Manrope.SemiBold,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    'footer-text': {
        width: '100%',
        fontFamily: fonts.Manrope.SemiBold,
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,
        color: '#333',
    },
    'footer-title': {
        color: '#008000',
        fontFamily: fonts.Manrope.Bold,
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 16,
        paddingVertical: 4,
        paddingHorizontal: 8,
        textTransform: 'uppercase',
    },
    free: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.4)',
        fontFamily: fonts.Manrope.SemiBold,
    },
    'discount-box': {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    percent: {
        height: 18,
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: '#377D22',
        fontSize: 12,
        lineHeight: 17,
        textAlignVertical: 'center',
        fontWeight: '600',
        fontFamily: fonts.Manrope.Bold,
        color: '#fff',
    },
    price: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '600',
        fontFamily: fonts.Manrope.Bold,
        color: 'rgba(0, 0, 0, 0.8)',
    },
});
