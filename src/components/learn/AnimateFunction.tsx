import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

const AnimateFunction = () => {
    const marginStart = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <Text>function</Text>
            <Button
                title="button"
                onPress={() => {
                    Animated.decay(marginStart, {
                        velocity: 1,
                        deceleration: 0.997,
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
        height: 300,
        backgroundColor: '#c0c0c0',
    },
    view: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
});

export default AnimateFunction;
