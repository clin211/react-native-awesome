import React from 'react';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

const InternalWebview = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text>InternalWebview</Text>
            <WebView source={{ uri: 'https://create-blog-with-nextjs.vercel.app/' }} />
        </View>
    );
};

export default InternalWebview;
