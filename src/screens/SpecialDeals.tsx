import React, { FC, useLayoutEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import specialDeals from '@/mock/special-deals';
import { fonts } from '@/theme';
import SpecialDealsList from '@/components/special-deals/List';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenParams } from '@/navigator/navigator';

const tabs = ['Cards', 'Direct Top Up'];
const SpecialDeals: FC<NativeStackScreenProps<ScreenParams, 'SpecialDeals'>> = ({ navigation }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const data = useMemo(
        () => (tabIndex === 0 ? specialDeals.pins : specialDeals.directTopUp),
        [tabIndex],
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'transparent',
            },
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {tabs.map((item, index) => {
                    const isActive = index === tabIndex;
                    return (
                        <Pressable
                            key={index}
                            onPress={() => setTabIndex(index)}
                            style={[styles.tab, isActive && styles['active-tab']]}
                        >
                            <Text
                                style={[styles['tab-text'], isActive && styles['active-tab-text']]}
                            >
                                {item}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
            <SpecialDealsList data={data} />
        </View>
    );
};

export default SpecialDeals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 40,
        columnGap: 8,
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginTop: 8,
        marginBottom: 24,
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.05)',
    },
    'tab-text': {
        fontSize: 12,
        lineHeight: 20,
        textTransform: 'uppercase',
        fontFamily: fonts.Manrope.ExtraBold,
    },
    'active-tab': {
        backgroundColor: '#ff4500',
    },
    'active-tab-text': {
        color: '#fff',
    },
});
