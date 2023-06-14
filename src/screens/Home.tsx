import React from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, useColorScheme } from 'react-native';

const Home = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.container}>
            <StatusBar
                translucent // add this
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'transparent'}
            />
            <ScrollView style={styles.container}>
                <View style={styles.first}>
                    <Text style={styles.text}>content</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    first: {
        borderWidth: 1,
        borderColor: 'white',
    },
    text: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 16,
        color: '#ff4500',
    },
});

export default Home;
