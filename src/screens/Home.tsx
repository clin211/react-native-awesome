import React, { FC, useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import { ScreenParams } from '@/navigator/navigator';
import { KeyboardInsetsView } from '@sdcx/keyboard-insets';

const Home: FC<NativeStackScreenProps<ScreenParams, 'Home'>> = ({ navigation, route }) => {
    console.log('navigation, route:', JSON.stringify(navigation));
    console.log('navigation, route:', JSON.stringify(route, null, 4));

    useLayoutEffect(() => {
        StatusBar.setBackgroundColor('transparent');
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <KeyboardInsetsView extraHeight={8} style={{ flex: 1 }}>
            <Text>this is home page</Text>
            <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1, gap: 8, paddingHorizontal: 24 }}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
                keyExtractor={item => item.toString()}
                renderItem={({ item, index }) => (
                    <View key={item + index} style={{ borderBlockColor: 'grey', borderWidth: 1 }}>
                        <TextInput
                            style={{
                                height: 40,
                                width: '100%',
                            }}
                            placeholder={'请输入内容' + item}
                            returnKeyLabel="Next"
                            returnKeyType="next"
                        />
                    </View>
                )}
            />
        </KeyboardInsetsView>
    );
};

export default Home;
