import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

const AnimateFunctionSpring = () => {
    const marginStart = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <Text>spring</Text>
            <Button
                title="button"
                onPress={() => {
                    Animated.spring(marginStart, {
                        toValue: 200,
                        useNativeDriver: false,

                        // group one
                        bounciness: 18, // 控制弹性、越大越弹， default:8
                        speed: 16, // 控制弹的速度，default: 12
                        overshootClamping: false,

                        // group two
                        // tension: 40, // 张力：控制速度，值越大速度越快，default: 40
                        // friction: 7, // 控制弹性与过冲，越小越弹，default: 7

                        // group three
                        // stiffness: 100, // 刚度：弹簧刚度系数，越大越弹，default: 100
                        // damping: 10, // 阻力：弹簧运动因摩擦力而受到阻力，越小越弹，default: 10
                        // mass: 1, // 质量： 附着在弹簧末端的物体的质量，越大惯性越大，动画越难停下，越小惯性越小，动画很快停下，default: 1
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

export default AnimateFunctionSpring;
