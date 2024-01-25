import React from 'react';
import { ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const UserCenter = () => {
    return (
        <ScrollView>
            <Text>Notice</Text>
            <Icon name="rocket" size={30} color="#900" />
        </ScrollView>
    );
};

export default UserCenter;
