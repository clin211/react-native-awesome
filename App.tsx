import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useMemo} from 'react';
import {Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';
import ScreenParams from './src/types/navigation';
import useMakeStyle from './src/hooks/useMakeStyle';
import useStyles from './src/assets/styles/pages/root';
import theme from './src/theme';
import DirectPurchase from './src/pages/DirectPurchase';

const Stack = createNativeStackNavigator<ScreenParams>();

function App(): JSX.Element {
  const {mode} = useMakeStyle();
  const styles = useStyles();

  const barStyle = useMemo(
    () => (mode === 'dark' ? 'light-content' : 'dark-content'),
    [mode],
  );

  useEffect(() => {
    StatusBar.setBarStyle(barStyle);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }
  }, [barStyle, mode]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={barStyle} backgroundColor={'transparent'} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          contentStyle: styles.content,
          headerTitleAlign: 'center',
          headerTitleStyle: styles.title,
          headerShadowVisible: false,
          statusBarTranslucent: true,
          gestureEnabled: false,
          headerStyle: styles.header,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen component={Detail} name="Detail" />
        <Stack.Screen component={DirectPurchase} name="DirectPurchase" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
