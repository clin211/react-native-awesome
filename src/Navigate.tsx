import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenParams } from '@/types/navigate.type';
import Home from '@/screens/Home';
import CardDetail from '@/screens/CardDetail';

const Navigate = () => {
    const Stack = createNativeStackNavigator<ScreenParams>();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CardDetail">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CardDetail" component={CardDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigate;
