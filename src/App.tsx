import React, { useEffect, useState } from 'react';
import { StatusBar, Platform, PermissionsAndroid } from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ModalProvider } from 'react-native-modalfy';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import Navigator from './navigator';
import { stack } from '@/components/modal';
import LoadingProvider from '@/components/loading/';
import { firebaseState } from './utils/request-permission';

const App = () => {
    const [message, setMessage] = useState<FirebaseMessagingTypes.RemoteMessage[]>([]);

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            setMessage(msg => {
                const msgs = [...msg];
                msgs.push(remoteMessage);
                return msgs;
            });
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        firebaseState().then(async res => {
            await res.checkPermission();
            console.log('global push id', global.push_id);
        });
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('transparent');
    }, []);

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <LoadingProvider>
                    <ModalProvider stack={stack}>
                        <Navigator />
                        {Platform.OS === 'android' && (
                            <SafeAreaView mode="margin" edges={['bottom']} />
                        )}
                    </ModalProvider>
                </LoadingProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
};

export default App;
