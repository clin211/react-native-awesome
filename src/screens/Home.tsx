import { ScreenParams } from '@/navigator/navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useLayoutEffect } from 'react';
import { ScrollView, StatusBar, Text } from 'react-native';

const Home: FC<NativeStackScreenProps<ScreenParams, 'Home'>> = ({ navigation, route }) => {
    console.log('navigation, route:', JSON.stringify(navigation));
    console.log('navigation, route:', JSON.stringify(route, null, 4));

    useLayoutEffect(() => {
        StatusBar.setBackgroundColor('transparent');
        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: '搜索',
                autoFocus: true,
            },
            headerShown: false,
            headerTransparent: true,
        });
    }, []);
    return (
        <ScrollView>
            <Text>Home page</Text>
        </ScrollView>
    );
};

export default Home;
