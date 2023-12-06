import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
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
        </SafeAreaProvider>
    );
};

export default App;
