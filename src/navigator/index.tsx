import Home from '@/screens/Home';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    HeaderStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import { ScreenParams } from './navigator';
import Modal from '@/screens/Modal';

const RootNavigator = createStackNavigator<ScreenParams>();

const Navigator = () => {
    return (
        <NavigationContainer>
            <RootNavigator.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <RootNavigator.Screen name="Home" component={Home} />
                <RootNavigator.Screen name="Modal" component={Modal} />
            </RootNavigator.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
