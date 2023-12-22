import { fonts } from '@/theme';
import * as React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from '../components/new-tabbar';

const renderScene = SceneMap({
    first: props => (
        <View style={{ flex: 1, backgroundColor: '#ff4081', height: 600 }}>
            <Text>{JSON.stringify(props, null, 4)}</Text>
        </View>
    ),
    second: props => (
        <View style={{ flex: 1, backgroundColor: '#673ab7', height: 400 }}>
            <Text>{JSON.stringify(props, null, 4)}</Text>
        </View>
    ),
    third: props => (
        <View style={{ flex: 1, backgroundColor: '#5EF94A', height: 550 }}>
            <Text>{JSON.stringify(props, null, 4)}</Text>
        </View>
    ),
    fourth: props => (
        <View style={{ flex: 1, backgroundColor: '#B7A03A', height: 300 }}>
            <Text>{JSON.stringify(props, null, 4)}</Text>
        </View>
    ),
    fifth: props => (
        <View style={{ flex: 1, backgroundColor: '#3A76B7', height: 260 }}>
            <Text>{JSON.stringify(props, null, 4)}</Text>
        </View>
    ),
    sixth: props => (
        <View style={{ flex: 1, backgroundColor: '#B73A66', height: 460 }}>
            <Text>{JSON.stringify(props, null, 4)}</Text>
        </View>
    ),
});

export default function ScrollableTabNew() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'third' },
        { key: 'fourth', title: 'fourth' },
        { key: 'fifth', title: 'fifth' },
        { key: 'sixth', title: 'sixth' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            sceneContainerStyle={{ flex: 1 }}
            renderTabBar={props => (
                <TabBar
                    {...props}
                    contentContainerStyle={{ backgroundColor: '#fff', height: 44 }}
                    tabStyle={{ width: 'auto' }}
                    inactiveColor="rgba(0, 0, 0, 0.8)"
                    activeColor="#ff4500"
                    labelStyle={styles.tab}
                    indicatorStyle={{ backgroundColor: '#ff4500', height: 2 }}
                    scrollEnabled
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    tab: {
        fontSize: 14,
        lineHeight: 16,
        color: 'rgba(0, 0, 0, 0.8)',
        fontFamily: fonts.Manrope.Bold,
    },
});
