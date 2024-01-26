import React, { FC, useEffect, useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Appearance, Pressable, ScrollView, StatusBar, Text } from 'react-native';
import notifee from '@notifee/react-native';
import useSWR from 'swr';
import { MainTabScreenParams, ScreenParams } from '@/navigator/navigator';
import { useLoading } from '@/components/loading';
import { fetchTodo } from '@/api/animal';
import { firebaseState } from '@/utils/request-permission';
import { useTheme } from '@/theme';
import styles from '@/assets/styles/home';

const Home: FC<NativeStackScreenProps<MainTabScreenParams & ScreenParams, 'Home'>> = ({
    navigation,
}) => {
    const loading = useLoading();
    const theme = useTheme();

    const { data, error, isLoading, isValidating, mutate } = useSWR('todo', fetchTodo);

    const handleOnPressFetchPushID = async () => {
        const res = await firebaseState();
        await res.checkPermission();
        console.log('global push id', global.push_id);
    };

    const handleSwitchMode = (type: 'auto' | 'notAuto') => {
        console.log('handle switch mode', theme.dark);
        const mode = theme.isDark ? 'light' : 'dark';
        Appearance.setColorScheme(type === 'auto' ? null : mode);
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
        <ScrollView style={[[styles.container]]}>
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
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Article')}>
                <Text style={styles.text}>Article</Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('InternalWebview')}
            >
                <Text style={styles.text}>internal webview</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => handleSwitchMode('auto')}>
                <Text style={styles.text}>跟随系统</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => handleSwitchMode('notAuto')}>
                <Text style={styles.text}>switch mode</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('RenderHtml')}>
                <Text style={styles.text}>render html</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('CustomRender')}>
                <Text style={styles.text}>custom html</Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('ScrollablePagerView')}
            >
                <Text style={styles.text}>scrollable page view</Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('PrerenderHtml')}
            >
                <Text style={styles.text}>prerender html</Text>
            </Pressable>
            <Text style={styles.text} onPress={handleOnPressFetchPushID}>
                fetch push id
            </Text>
        </ScrollView>
    );
};

export default Home;
