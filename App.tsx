import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import ScreenParams from '@/types/navigation';
import useStyles from '@/assets/styles/pages/root';
import theme from '@/theme';
import DirectPurchase from '@/pages/DirectPurchase';
import Icons from '@/pages/Icons';
import Back from '@/components/Back';

const Stack = createNativeStackNavigator<ScreenParams>();

function App(): JSX.Element {
  const styles = useStyles();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={theme}>
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
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft() {
            return <Back />;
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen component={Detail} name="Detail" />
        <Stack.Screen component={DirectPurchase} name="DirectPurchase" />
        <Stack.Screen component={Icons} name="Icons" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
