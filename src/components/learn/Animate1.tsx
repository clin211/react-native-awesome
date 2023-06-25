import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

const Animate1 = () => {
    const marginStart = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <Text>平移</Text>
            <Button
                title="button"
                onPress={() => {
                    Animated.timing(marginStart, {
                        toValue: 200,
                        duration: 700,
                        useNativeDriver: false,
                    }).start();
                }}
            />
            <Animated.View style={[styles.view, { marginStart }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 180,
        backgroundColor: '#c0c0c0',
    },
    view: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
});

export default Animate1;
