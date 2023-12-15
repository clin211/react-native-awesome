import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import Navigator from './navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ModalProvider } from 'react-native-modalfy';
import { stack } from '@/components/modal';

const App = () => {
    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('transparent');
    }, []);

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <ModalProvider stack={stack}>
                    <Navigator />
                    {Platform.OS === 'android' && <SafeAreaView mode="margin" edges={['bottom']} />}
                </ModalProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
};

export default App;
