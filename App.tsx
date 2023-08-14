import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import theme from './src/theme/colors';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';
import ScreenParams from './src/types/navigation';
import useMakeStyle from './src/hooks/useMakeStyle';
import useStyles from './src/assets/styles/pages/root';

const Stack = createNativeStackNavigator<ScreenParams>();

function App(): JSX.Element {
  const {mode} = useMakeStyle();
  const styles = useStyles();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
      />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
