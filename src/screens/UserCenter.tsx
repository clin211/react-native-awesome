import React, { FC } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '@/assets/styles/user';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainTabScreenParams, ScreenParams } from '@/navigator/navigator';

const UserCenter: FC<NativeStackScreenProps<MainTabScreenParams & ScreenParams, 'User'>> = ({
    navigation,
}) => {
    const navigateTo = (type: 'settings') => {
        switch (type) {
            case 'settings':
                navigation.navigate('Settings');
                break;
            default:
                break;
        }
    };
    return (
        <ScrollView>
            <Text>Notice</Text>
            <Icon name="rocket" size={30} color="#900" />
            <Pressable style={styles.cell} onPress={() => navigateTo('settings')}>
                <View style={styles.start}>
                    <Icon name="gear" size={24} color="" />
                    <Text style={styles.label}>Settings</Text>
                </View>
                <Icon name="angle-right" size={24} color={EStyleSheet.value('$textColor3')} />
            </Pressable>
        </ScrollView>
    );
};

export default UserCenter;
