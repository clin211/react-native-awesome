import {useEffect} from 'react';
import React, {StatusBar, useColorScheme} from 'react-native';
import {UnistylesRuntime} from 'react-native-unistyles';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import './themes/unistyles';
import Navigation from './navigation/Navigation';

const App = () => {
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (UnistylesRuntime.themeName !== colorScheme) {
      UnistylesRuntime.setTheme(colorScheme === 'dark' ? 'dark' : 'light');
    }
  }, [colorScheme]);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
