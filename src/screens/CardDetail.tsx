import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '@/assets/styles/screens/card-detail';
import { ScreenParams } from '@/types/navigate.type';

const CardDetail: FC<NativeStackScreenProps<ScreenParams, 'CardDetail'>> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>CardDetail</Text>
        </View>
    );
};

export default CardDetail;
