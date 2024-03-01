import React, {FC} from 'react';
import {View, Text, Pressable, Appearance} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import useCounterStore from '../stores/counter';

const Home: FC = () => {
    const {styles} = useStyles(styleSheet);
    const {count, increment, decrement, reset} = useCounterStore(state => state);

    const handlePressSwitchTheme = () => {
        Appearance.setColorScheme(Appearance.getColorScheme() === 'light' ? 'dark' : 'light');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <View style={styles.box} />
            <View style={styles.rectangle} />
            <Text>{count}</Text>
            <Pressable onPress={() => increment(1)}>
                <Text style={styles.text}>Increment</Text>
            </Pressable>
            <Pressable onPress={() => decrement(1)}>
                <Text style={styles.text}>Decrement</Text>
            </Pressable>
            <Pressable onPress={() => reset()}>
                <Text style={styles.text}>Reset</Text>
            </Pressable>
            <Pressable
                style={({pressed}) => styles.press(pressed)}
                onPress={handlePressSwitchTheme}
            >
                <Text style={styles['press-text']}>switch theme</Text>
            </Pressable>
        </View>
    );
};

export default Home;

const styleSheet = createStyleSheet(theme => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    text: {
        fontSize: 12,
        color: theme.colors.typography,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: theme.colors.primary,
    },
    rectangle: {
        marginVertical: 10,
        width: {
            xs: 100,
            md: 200,
            xl: 400,
        },
        height: {
            xs: 50,
            md: 100,
            xl: 200,
        },
        backgroundColor: theme.colors.primary,
    },

    press(pressed: boolean) {
        return {
            width: 160,
            height: 44,
            borderRadius: 22,
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: pressed ? 0.5 : 1,
        };
    },
    'press-text': {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Manrope-SemiBold',
    },
}));
