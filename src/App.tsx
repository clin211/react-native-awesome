import React, { useEffect } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import Navigator from './navigator';

const App = () => {
    console.log('initialWindowMetrics', initialWindowMetrics);
    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('transparent');
    }, []);
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Navigator />
            {Platform.OS === 'android' && <SafeAreaView mode="margin" edges={['bottom']} />}
        </SafeAreaProvider>
    );
};

export default App;
