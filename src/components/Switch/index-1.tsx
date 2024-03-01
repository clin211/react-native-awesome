// Switch.tsx

import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';

// 定义Switch组件Props的类型
type SwitchProps = {
    // 定义开关状态
    enabled?: boolean;
    onColor?: string;
    offColor?: string;
    onText?: string;
    offText?: string;
    onToggle?: (isEnabled: boolean) => void;
};

const Switch: React.FC<SwitchProps> = ({enabled, onColor, offColor, onText, offText, onToggle}) => {
    // 定义状态变量
    const [isEnabled, setIsEnabled] = useState(enabled || false);
    // 定义过渡动画的值
    const position = new Animated.Value(0);

    // 切换开关状态的函数
    const toggleSwitch = () => {
        // 切换状态
        setIsEnabled(prev => !prev);
        // 启动过渡动画
        Animated.timing(position, {
            toValue: isEnabled ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
        // 调用外部传入的onToggle回调函数
        onToggle?.(!isEnabled);
    };

    // 根据过渡动画的值计算滑块的位置
    const translateX = position.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 24],
    });

    return (
        // 使用Pressable包裹整个开关，实现可点击效果
        <Pressable style={styles.container} onPress={toggleSwitch}>
            <View
                style={[
                    styles.container,
                    isEnabled ? {backgroundColor: onColor} : {backgroundColor: offColor},
                ]}
            >
                {/* 根据开关状态显示不同的文本 */}
                <Text style={isEnabled ? styles.textEnabled : styles.textDisabled}>
                    {isEnabled ? onText : offText}
                </Text>
                {/* 使用Animated.View包裹滑块，实现过渡动画 */}
                <Animated.View style={[styles.thumb, {transform: [{translateX}]}]} />
            </View>
        </Pressable>
    );
};

// 样式定义
const styles = StyleSheet.create({
    container: {
        borderRadius: 20000,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textEnabled: {
        color: 'white',
    },
    textDisabled: {
        color: 'black',
    },
    thumb: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'white',
        position: 'absolute',
    },
});

export default Switch;
