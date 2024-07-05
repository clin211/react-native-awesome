import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    StatusBar,
    Platform,
    PermissionsAndroid,
    useColorScheme,
    Appearance,
    AppState,
    AppStateStatus,
} from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ModalProvider } from 'react-native-modalfy';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import Navigator from '@/navigator';
import { stack } from '@/components/modal';
import LoadingProvider from '@/components/loading/';
import { firebaseState } from '@/utils/request-permission';
import ThemeProvider, { defaultTheme } from './theme';
import { dark, light } from './theme/color';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SWRConfig } from 'swr';

const App = () => {
    const [message, setMessage] = useState<FirebaseMessagingTypes.RemoteMessage[]>([]);
    const [currentSystemTheme, setCurrentSystemTheme] = useState(defaultTheme);

    const systemColorScheme = useColorScheme();
    console.log('🚀 ~ App ~ systemColorScheme:', systemColorScheme);

    useEffect(() => {
        console.log('current system theme', systemColorScheme);
        const isDark = systemColorScheme === 'dark';
        const colors = isDark ? dark : light;
        EStyleSheet.build(colors);
        setCurrentSystemTheme(dt => ({ ...dt, isDark, colors: isDark ? dark : light }));
    }, [systemColorScheme]);

    useEffect(() => {
        return notifee.onForegroundEvent(({ type, detail }) => {
            switch (type) {
                case EventType.DISMISSED:
                    console.log(
                        'User dismissed notification',
                        JSON.stringify(detail.notification, null, 4),
                    );
                    break;
                case EventType.PRESS:
                    console.log(
                        'User pressed notification',
                        JSON.stringify(detail.notification, null, 4),
                    );
                    break;
            }
        });
    }, []);

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
        <SWRConfig
            value={{
                provider: () => new Map(),
                isOnline() {
                    /* 自定义网络状态检测器 */
                    return true;
                },
                isVisible() {
                    /* 自定义 visibility 状态检测器 */
                    return true;
                },
                initFocus(callback) {
                    /* 向状态 provider 注册侦听器 */
                    let appState = AppState.currentState;

                    const onAppStateChange = (nextAppState: AppStateStatus) => {
                        /* 如果正在从后台或非 active 模式恢复到 active 模式 */
                        if (appState.match(/inactive|background/) && nextAppState === 'active') {
                            callback();
                        }
                        appState = nextAppState;
                    };

                    // 订阅 app 状态更改事件
                    const subscription = AppState.addEventListener('change', onAppStateChange);

                    return () => {
                        subscription.remove();
                    };
                },
                initReconnect(callback) {
                    /* 向状态 provider 注册侦听器 */
                },
            }}
        >
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <ThemeProvider value={currentSystemTheme}>
                        <LoadingProvider>
                            <ModalProvider stack={stack}>
                                <Navigator />
                                {Platform.OS === 'android' && (
                                    <SafeAreaView mode="margin" edges={['bottom']} />
                                )}
                            </ModalProvider>
                        </LoadingProvider>
                    </ThemeProvider>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </SWRConfig>
    );
};

export default App;
