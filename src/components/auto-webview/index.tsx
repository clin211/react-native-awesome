import React, { useState, FC } from 'react';
import { StyleSheet, Platform, ViewStyle, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { WebView, WebViewMessageEvent, WebViewProps } from 'react-native-webview';
import { WebViewErrorEvent, WebViewNavigationEvent } from 'react-native-webview/lib/WebViewTypes';
import injectScript from './utils';
import { air, notFound } from '@/assets/lotties';

interface File {
    href: string;
    type: string;
    rel: string;
}

interface AutoHeightWebViewProps {
    onSizeUpdated?: ({
        width,
        height,
    }: {
        width: number | any | 'auto' | `${number}%`;
        height: number | any | 'auto' | `${number}%`;
    }) => void;
    files?: File[];
    style?: ViewStyle;
    customScript?: string;
    customStyle?: string;
    viewportContent?: string;
    scrollEnabledWithZoomedin?: boolean;
    // webview props
    originWhitelist?: string[];
    onMessage?: (event: any) => void;
    scalesPageToFit?: boolean;
    source?: object;
}

let defaultProps = {
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    originWhitelist: ['*'],
};

const AutoHeightWebView: FC<AutoHeightWebViewProps & WebViewProps> = props => {
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [size, setSize] = useState<ViewStyle>({ width: '100%', height: 300 });

    const handleMessage = (event: WebViewMessageEvent) => {
        const data = JSON.parse(event.nativeEvent.data);
        console.log('🚀 ~ handleMessage ~ data:', data);
        if (data?.height || data?.type === 'size') {
            setSize(s => ({ ...s, ...data }));
        }
        props?.onMessage?.(event);
    };

    const handleOnload = (event: WebViewNavigationEvent) => {
        console.log('event:', event.nativeEvent);
        setLoading(event.nativeEvent.loading);
    };

    const handleError = (event: WebViewErrorEvent) => {
        console.warn('error event:', event.nativeEvent);
        setIsError(true);
    };

    return (
        <View style={[styles.webView, size]}>
            {!isError && (
                <WebView
                    injectedJavaScript={injectScript}
                    onMessage={handleMessage}
                    onLoad={handleOnload}
                    onError={handleError}
                    {...defaultProps}
                    {...props}
                />
            )}
            {loading && <LottieView source={air} autoPlay loop style={styles.placeholder} />}
            {isError && (
                <LottieView
                    source={notFound}
                    autoPlay
                    loop
                    style={[styles.placeholder, { backgroundColor: 'transparent' }]}
                />
            )}
        </View>
    );
};

Platform.OS === 'android' &&
    Object.assign(defaultProps, {
        scalesPageToFit: false,
    });

Platform.OS === 'ios' &&
    Object.assign(defaultProps, {
        viewportContent: 'width=device-width',
    });

const styles = StyleSheet.create({
    webView: {
        backgroundColor: 'transparent',
    },
    placeholder: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        width: '100%',
        height: 300,
    },
});

export default AutoHeightWebView;
