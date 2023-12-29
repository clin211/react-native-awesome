import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    HeaderStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenParams } from './navigator';
import { fonts } from '@/theme';
import Home from '@/screens/Home';
import Modal from '@/screens/Modal';
import Fonts from '@/screens/Fonts';
import FontDetail from '@/screens/FontDetail';
import Floating from '@/screens/Floating';
import ScrollableTab from '@/screens/ScrollableTab';
import VerticalScrollable from '@/screens/VerticalScrollable';
import ScrollableTabNew from '@/screens/ScrollableTabNew';
import SpecialDeals from '@/screens/SpecialDeals';
import Animal from '@/screens/Animal';
import Notification from '@/screens/Notification';

const RootNavigator = createStackNavigator<ScreenParams>();

const Navigator = () => {
    const insets = useSafeAreaInsets();
    global.insets = insets;

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
                <RootNavigator.Screen name="Floating" component={Floating} />
                <RootNavigator.Screen name="ScrollableTab" component={ScrollableTab} />
                <RootNavigator.Screen name="ScrollableTabNew" component={ScrollableTabNew} />
                <RootNavigator.Screen name="VerticalScrollable" component={VerticalScrollable} />
                <RootNavigator.Screen name="SpecialDeals" component={SpecialDeals} />
                <RootNavigator.Screen name="Animal" component={Animal} />
                <RootNavigator.Screen name="Notification" component={Notification} />
            </RootNavigator.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
