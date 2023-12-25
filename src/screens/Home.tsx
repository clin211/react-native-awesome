import React, { FC, useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
    FlatList,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { ScreenParams } from '@/navigator/navigator';
import { KeyboardInsetsView } from '@sdcx/keyboard-insets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home: FC<NativeStackScreenProps<ScreenParams, 'Home'>> = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    useLayoutEffect(() => {
        StatusBar.setBackgroundColor('transparent');
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <KeyboardInsetsView extraHeight={8} style={{ flex: 1, paddingTop: insets.top }}>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Modal')}>
                <Text style={styles.text}>Modal</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Fonts')}>
                <Text style={styles.text}>Fonts</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Floating')}>
                <Text style={styles.text}>Floating</Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('ScrollableTab')}
            >
                <Text style={styles.text}>scrollable tab view</Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('VerticalScrollable')}
            >
                <Text style={styles.text}>scrollable vertical</Text>
            </Pressable>
            <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('ScrollableTabNew')}
            >
                <Text style={styles.text}>scrollable new version</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('SpecialDeals')}>
                <Text style={styles.text}>special deals</Text>
            </Pressable>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Animal')}>
                <Text style={styles.text}>animal</Text>
            </Pressable>
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
                            placeholderTextColor={'grey'}
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

const styles = StyleSheet.create({
    pressable: {
        marginHorizontal: 24,
        marginVertical: 8,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'italic',
        color: 'skyblue',
    },
});
