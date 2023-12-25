import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import useBoolean from '@/hooks/useBoolean';
import loadingData from '@/assets/lotties/loading.json';

const { width, height } = Dimensions.get('screen');
const Loading = () => {
    // const headerHeight =
    const [state, setState] = useBoolean();
    const show = setState.setTrue;
    const hide = setState.setFalse;
    const closeAll = setState.setFalse;

    return (
        <View style={styles.container}>
            <LottieView source={loadingData} autoPlay loop style={styles.content} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    content: {
        width: 48,
        height: 48,
    },
});

export default Loading;
