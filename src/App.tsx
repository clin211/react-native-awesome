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
import LoadingProvider from '@/components/loading/';

const App = () => {
    useEffect(() => {
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
