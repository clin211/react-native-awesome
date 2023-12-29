import React, { FC, useEffect, useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import { ScreenParams } from '@/navigator/navigator';
import { useLoading } from '@/components/loading';
import useSWR from 'swr';
import { fetchTodo } from '@/api/animal';

const Home: FC<NativeStackScreenProps<ScreenParams, 'Home'>> = ({ navigation }) => {
    const loading = useLoading();

    const { data, error, isLoading, isValidating, mutate } = useSWR('todo', fetchTodo);

    useEffect(() => {
        if (isLoading) loading.show({ message: 'this is loading...' });
        if (!isLoading) loading.close();
    }, [isLoading]);

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
