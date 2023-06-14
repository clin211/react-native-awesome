import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'transparent'}
            />
            <ScrollView style={styles.container}>
                <View style={styles.first}>
                    <Text>content</Text>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    first: {
        borderWidth: 1,
        borderColor: 'white',
    },
});

export default App;
