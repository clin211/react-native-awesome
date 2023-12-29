/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native';
import messaging, { FirebaseMessagingTypes, AndroidImportance } from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import App from './src/App';
import { name as appName } from './app.json';

Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

async function onMessageReceived (message: FirebaseMessagingTypes.RemoteMessage) {
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        badge: true,
        // importance: AndroidImportance.HIGH,
    });
    const { content } = message.data;
    // console.log('content:', JSON.stringify(, null, 4))

    const data = JSON.parse(content);
    data.android.channelId = channelId;
    notifee.displayNotification(data)
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

AppRegistry.registerComponent(appName, () => App);
