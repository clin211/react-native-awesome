import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import {RootStackParamList} from './typing';
import {useStyles} from 'react-native-unistyles';

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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
