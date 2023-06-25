import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

const Animate3 = () => {
    const scale = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <Text>缩放</Text>
            <Button
                title="button"
                onPress={() => {
                    Animated.timing(scale, {
                        toValue: 1.5,
                        duration: 700,
                        useNativeDriver: false,
                    }).start();
                }}
            />
            <Animated.View style={[styles.view, { transform: [{ scale: scale }] }]} />
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

export default Animate3;
