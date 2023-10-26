import {ScrollView, Text, View} from 'react-native';
import React from 'react';
// import {WebView} from 'react-native-webview';

// const injectedScript = `
// console.log('form seagm app')
// `;

const CardDetailWebView = () => {
  //   const handleOnMessage = (event: WebViewMessageEvent) => {
  //     console.log('event:', event);
  //   };

  return (
    <ScrollView
      overScrollMode="never"
      scrollEventThrottle={16}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View>
        <Text>Webview</Text>
      </View>
      <View>
        {/* <WebView
          originWhitelist={['*']}
          onMessage={handleOnMessage}
          source={{uri: 'https://www.seagm.dev/app/detail/description?id=756'}}
        /> */}
        {/* <WebView source={{uri: 'https://reactnative.dev/'}} />
        <WebView source={{uri: 'https://reactnative.dev'}} /> */}
      </View>
    </ScrollView>
  );
};

export default CardDetailWebView;
