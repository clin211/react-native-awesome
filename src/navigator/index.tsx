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
import Fonts from '@/screens/Fonts';
import FontDetail from '@/screens/FontDetail';
import { fonts } from '@/theme';

const RootNavigator = createStackNavigator<ScreenParams>();

const Navigator = () => {
    return (
        <NavigationContainer>
            <RootNavigator.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontSize: 16,
                        lineHeight: 24,
                        fontFamily: fonts.Manrope.SemiBold,
                    },
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <RootNavigator.Screen name="Home" component={Home} />
                <RootNavigator.Screen name="Modal" component={Modal} />
                <RootNavigator.Screen name="Fonts" component={Fonts} />
                <RootNavigator.Screen name="FontDetail" component={FontDetail} />
            </RootNavigator.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
