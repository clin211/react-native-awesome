import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useStyles} from 'react-native-unistyles';
import {RootStackParamList} from './typing';
import Home from '../screens/Home';
import Manrope from '../screens/fonts-example/Manrope';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    const {theme} = useStyles();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 14,
                        color: theme.colors.typography,
                    },
                    headerStyle: {backgroundColor: theme.colors.background},
                    headerShadowVisible: false,
                    gestureEnabled: false,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Group>
                    <Stack.Screen name="Manrope" component={Manrope} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
