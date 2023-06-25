import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button, Easing } from 'react-native';

const AnimateFunctionTiming = () => {
    const marginStart = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>animate function timing</Text>
            <Button
                title="button"
                onPress={() => {
                    Animated.timing(marginStart, {
                        toValue: 300,
                        duration: 500,
                        // easing: Easing.back(3),
                        // easing: Easing.ease,
                        // easing: Easing.bounce,
                        // easing: Easing.elastic(4),
                        // easing: Easing.linear,
                        // easing: Easing.quad,
                        // easing: Easing.cubic,
                        // easing: Easing.bezier(0.8, 0.74, 0.9, 0.25),
                        // easing: Easing.circle,
                        // easing: Easing.sin,
                        easing: Easing.exp,
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
    text: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Manrope-SemiBold',
        color: 'white',
    },
    view: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
    },
});

export default AnimateFunctionTiming;
