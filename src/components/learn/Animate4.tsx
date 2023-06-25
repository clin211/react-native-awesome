import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

const Animate4 = () => {
    const [show, setShow] = useState(false);
    const opacity = useRef(new Animated.Value(0.5)).current;

    return (
        <View style={styles.container}>
            <Text>渐变</Text>
            <Button
                title="button"
                onPress={() => {
                    Animated.timing(opacity, {
                        toValue: show ? 1 : 0.2,
                        duration: 700,
                        useNativeDriver: false,
                    }).start();
                    setShow(s => !s);
                }}
            />
            <Animated.View style={[styles.view, { opacity }]} />
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

export default Animate4;
