import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import notifee from '@notifee/react-native';
import { ScreenParams } from '@/navigator/navigator';
import { useLoading } from '@/components/loading';
import useSWR from 'swr';
import { fetchTodo } from '@/api/animal';
import { firebaseState } from '@/utils/request-permission';

const Home: FC<NativeStackScreenProps<ScreenParams, 'Home'>> = ({ navigation }) => {
    const loading = useLoading();

    const { data, error, isLoading, isValidating, mutate } = useSWR('todo', fetchTodo);

    const handleOnPressFetchPushID = async () => {
        const res = await firebaseState();
        await res.checkPermission();
        console.log('global push id', global.push_id);
    };

    useEffect(() => {
        if (isLoading) loading.show({ message: 'this is loading...' });
        if (!isLoading) loading.close();
    }, [isLoading]);

    // Bootstrap sequence function
    async function bootstrap() {
        const initialNotification = await notifee.getInitialNotification();

        if (initialNotification) {
            console.log(
                'Notification caused application to open',
                JSON.stringify(initialNotification.notification, null, 4),
            );
            console.log(
                'Press action used to open the app',
                JSON.stringify(initialNotification.pressAction, null, 4),
            );
        }
    }

    useEffect(() => {
        bootstrap();
    }, []);
    useLayoutEffect(() => {
        StatusBar.setBackgroundColor('transparent');
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView style={[styles.container]}>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Modal')}>
                <Text style={styles.text}>Modal</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Fonts')}>
                <Text style={styles.text}>Fonts</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Floating')}>
                <Text style={styles.text}>Floating</Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('ScrollableTab')}
            >
                <Text style={styles.text}>scrollable tab view</Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('VerticalScrollable')}
            >
                <Text style={styles.text}>scrollable vertical</Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('ScrollableTabNew')}
            >
                <Text style={styles.text}>scrollable new version</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('SpecialDeals')}>
                <Text style={styles.text}>special deals</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Animal')}>
                <Text style={styles.text}>animal</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Notification')}>
                <Text style={styles.text}>Notification</Text>
            </Pressable>
            <Text style={styles.text} onPress={handleOnPressFetchPushID}>
                fetch push id
            </Text>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: global.insets?.top ?? 34,
    },
    pressable: {
        marginHorizontal: 24,
        marginVertical: 8,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'italic',
        color: 'skyblue',
    },
});
