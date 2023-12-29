/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import App from './src/App';
import { name as appName } from './app.json';

Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

function onMessageReceived (message) {
    const { type, timestamp } = message.data;

    if (type === 'order_shipped') {
        notifee.displayNotification({
            title: 'Your order has been shipped',
            body: `Your order was shipped at ${new Date(Number(timestamp)).toString()}!`,
            android: {
                channelId: 'orders',
            },
        });
    }
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

AppRegistry.registerComponent(appName, () => App);
