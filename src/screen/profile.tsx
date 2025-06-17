import React from 'react';
import { Text, View } from 'react-native';
import { ProfileScreenProps } from '../navigation/AppNavigator';

function Profile({ route }: ProfileScreenProps) {
    const { userId } = route.params;
    return (
        <View>
            <Text>Profile {userId}</Text>
        </View>
    );
}

export default Profile;
