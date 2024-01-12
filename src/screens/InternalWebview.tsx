import { fonts } from '@/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { WebViewMessageEvent } from 'react-native-webview';
import AutoHeightWebView from '@/components/auto-webview';
import { ScreenParams } from '@/navigator/navigator';

const InternalWebview: FC<NativeStackScreenProps<ScreenParams, 'InternalWebview'>> = ({
    navigation,
}) => {
    const [size, setSize] = useState<ViewStyle>({ width: '100%', height: 0 });
    const handleMessage = (event: WebViewMessageEvent) => {
        console.log('🚀 ~ handleMessage ~ event:', event);
        const data = JSON.parse(event.nativeEvent.data);
        console.log('data:', data);
        setSize(data);
    };

    navigation.setOptions({
        headerTitle: '为什么Vue和React都选择了Hooks',
        headerTitleStyle: {
            fontSize: 16,
            // todo: 字体更新
            fontFamily: fonts.AlimamaDongFangDaKai.Regular,
        },
    });

    return (
        <ScrollView style={{ backgroundColor: '#f7f7f7', gap: 12 }}>
            <View style={styles.box}>
                <AutoHeightWebView
                    source={{ uri: 'https://mdnice.com/writing/cdd1f10920d74b878d8b2c1f70ac2e45' }}
                />
            </View>
            <View style={styles.box}>
                <AutoHeightWebView
                    source={{ uri: 'https://mdnice.com/writing/611a0c9b60fb4b6ba627e86f45582685' }}
                />
            </View>
            <View style={styles.box}>
                <AutoHeightWebView
                    source={{
                        uri: 'https://www.seagm.dev/app/detail/instruction?id=118&version=3212',
                    }}
                />
            </View>

            <View>
                <Text>review</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    box: {
        borderRadius: 12,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
});

export default InternalWebview;
