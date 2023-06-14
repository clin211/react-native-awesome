import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
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
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        borderWidth: 1,
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

export default App;
