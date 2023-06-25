import React, { FC } from 'react';
import { Text, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '@/assets/styles/screens/card-detail';
import { ScreenParams } from '@/types/navigate.type';
import Animate1 from '@/components/learn/Animate1';
import Animate2 from '@/components/learn/Animate2';
import Animate3 from '@/components/learn/Animate3';
import Animate4 from '@/components/learn/Animate4';
import AnimateFunction from '../components/learn/AnimateFunction';
import AnimateFunctionSpring from '../components/learn/AnimateFunctionSpring';
import AnimateFunctionTiming from '../components/learn/AnimateFunctionTiming';
import AnimateValueXY from '../components/learn/AnimateValueXY';

const CardDetail: FC<NativeStackScreenProps<ScreenParams, 'CardDetail'>> = ({ navigation }) => {
    console.log('navigation:', navigation);
    return (
        <ScrollView style={styles.container}>
            <Text>CardDetail</Text>
            {/* <Animate1 />
            <Animate2 />
            <Animate3 />
            <Animate4 />
            <AnimateFunction />
            <AnimateFunctionSpring /> */}
            {/* <AnimateFunctionTiming /> */}
            <AnimateValueXY />
        </ScrollView>
    );
};

export default CardDetail;
