import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import Navigator from './navigator';
import { ModalProvider } from 'react-native-modalfy';
import { stack } from '@/components/modal';
import LoadingProvider from '@/components/loading/';
import { clientPersister } from './utils/storage';

const App = () => {
    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('transparent');
    }, []);

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <PersistQueryClientProvider persistOptions={{ persister: clientPersister }}>
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
            </PersistQueryClientProvider>
        </SafeAreaProvider>
    );
};

export default App;
