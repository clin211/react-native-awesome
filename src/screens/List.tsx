import { ScreenParams } from '@/navigator/navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Button, ScrollView, Text } from 'react-native';

const List: FC<NativeStackScreenProps<ScreenParams, 'List'>> = ({ navigation }) => {
    return (
        <ScrollView>
            <Text>Notice</Text>
            <Button title="跳转 Modal Screen" onPress={() => navigation.navigate('ModalScreen')} />
        </ScrollView>
    );
};

export default List;
