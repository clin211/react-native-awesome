import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { HomeScreenProps } from '../navigation/AppNavigator';

function Home({ navigation }: HomeScreenProps) {
    const handleOnPressJumpToProfile = () => {
        navigation.navigate('Profile', { userId: '123' });
    }
    return (
        <View>
            <Text>Home</Text>
            <Pressable onPress={handleOnPressJumpToProfile} style={styles.btn}>
                <Text>jump to profile</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        width: 120,
        height: 44,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    'btn-text': {
        fontStyle: 'normal',
        fontVariant: ['small-caps'],
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default Home;
