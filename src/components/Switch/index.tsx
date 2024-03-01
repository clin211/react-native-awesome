import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable, Animated, Text} from 'react-native';

// Switch.tsx

export interface SwitchProps {
    /**
     * 是否启用
     */
    enabled?: boolean;
    /**
     * 打开状态时的颜色
     */
    onColor?: string;
    /**
     * 关闭状态时的颜色
     */
    offColor?: string;
    /**
     * 打开状态时的文字
     */
    onText?: string;
    /**
     * 关闭状态时的文字
     */
    offText?: string;
    /**
     * 切换状态时的回调
     */
    onToggle?: (isEnabled: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
    enabled,
    onColor = '#2196f3',
    offColor = '#f7f7f7',
    onText,
    offText,
    onToggle,
}) => {
    // 定义状态变量
    const [isEnabled, setIsEnabled] = useState(enabled || false);
    // 定义过渡动画的值
    const position = new Animated.Value(0);

    // 切换开关状态的函数
    const toggleSwitch = () => {
        console.log('switch', isEnabled);
        // 切换状态
        setIsEnabled(prev => !prev);
    };

    // 根据过渡动画的值计算滑块的位置
    const translateX = position.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 24],
    });

    useEffect(() => {
        Animated.timing(position, {
            toValue: isEnabled ? 1 : 0,
            duration: 160,
            useNativeDriver: true,
        }).start();
        onToggle?.(isEnabled);
    }, [isEnabled, position, onToggle]);

    return (
        // 使用Pressable包裹整个开关，实现可点击效果
        <Pressable
            style={[
                styles.container,
                isEnabled ? {backgroundColor: onColor} : {backgroundColor: offColor},
            ]}
            onPress={toggleSwitch}
        >
            {/* 根据开关状态显示不同的文本 */}
            <Text style={isEnabled ? styles.textEnabled : styles.textDisabled}>
                {isEnabled ? onText : offText}
            </Text>
            {/* 使用Animated.View包裹滑块，实现过渡动画 */}
            <Animated.View style={[styles.thumb, {transform: [{translateX}]}]} />
        </Pressable>
    );
};

export default Switch;

const styles = StyleSheet.create({
    container: {
        padding: 4,
        height: 32,
        minWidth: 56,
        borderRadius: 16,
        marginHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    textEnabled: {
        color: 'white',
        fontFamily: 'Helvetica',
    },
    textDisabled: {
        color: 'grey',
        fontFamily: 'Helvetica',
    },
    thumb: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'white',
        position: 'absolute',
        start: 4,
    },
});
