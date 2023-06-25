import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

const Animate2 = () => {
    const rotate = useRef(new Animated.Value(0)).current;
    const rotateValue = rotate.interpolate({
        inputRange: [0, 30],
        outputRange: ['0deg', '30deg'],
    });

    return (
        <View style={styles.container}>
            <Text>旋转</Text>
            <Button
                title="button"
                onPress={() => {
                    Animated.timing(rotate, {
                        toValue: 360,
                        duration: 700,
                        useNativeDriver: false,
                    }).start();
                }}
            />
            <Animated.View style={[styles.view, { transform: [{ rotate: rotateValue }] }]} />
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
        marginStart: 60,
        marginTop: 60,
    },
});

export default Animate2;
