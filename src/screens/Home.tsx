import React, { FC } from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    StyleSheet,
    useColorScheme,
    Button,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenParams } from '@/types/navigate.type';

const fonts = [
    'Manrope-Light',
    'Manrope-ExtraLight',
    'Manrope-Regular',
    'Manrope-Medium',
    'Manrope-SemiBold',
    'Manrope-Bold',
    'Manrope-ExtraBold',
];
const content = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
const Home: FC<NativeStackScreenProps<ScreenParams, 'Home'>> = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.container}>
            <StatusBar
                translucent // add this
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'transparent'}
            />
            <ScrollView style={styles.container}>
                <View style={styles.first}>
                    {content.map((item, index) => {
                        return (
                            <Text
                                style={[
                                    styles.text,
                                    styles.montserrat,
                                    { fontWeight: item as any },
                                ]}
                                key={index}
                            >
                                Whereas recognition of the inherent dignity 1234567890
                            </Text>
                        );
                    })}
                    <View style={{ height: 20 }}></View>
                    {content.map(item => {
                        return (
                            <Text
                                style={[styles.text, styles.manrope, { fontWeight: item as any }]}
                                key={item}
                            >
                                <Text style={styles.title}>{item}:</Text>
                                Whereas recognition of the inherent dignity 1234567890
                            </Text>
                        );
                    })}
                    {fonts.map(item => {
                        return (
                            <Text style={[styles.text, { fontFamily: item }]} key={item}>
                                <Text style={styles.title}>{item}:</Text>
                                Whereas recognition of the inherent dignity 1234567890
                            </Text>
                        );
                    })}
                    <Button title="card detail" onPress={() => navigation.navigate('CardDetail')} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    first: {
        borderWidth: 1,
        borderColor: 'white',
    },
    title: {
        fontSize: 24,
        lineHeight: 24 * 1.2,
        color: '#333',
    },
    text: {
        fontSize: 18,
        // fontWeight: '700',
        lineHeight: 24,
        color: 'rgb(32, 33, 36)',
        marginVertical: 8,
        marginHorizontal: 24,
    },
    montserrat: {
        fontFamily: 'Montserrat',
    },
    manrope: {
        fontFamily: 'Manrope',
    },
});

export default Home;
