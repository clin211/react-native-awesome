import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import fonts from '../../themes/fonts';

const fontWeight = {
    Black: '900',
    Heavy: '900',
    ExtraBold: '800',
    Bold: '700',
    SemiBold: '600',
    Medium: '500',
    Regular: '400',
    Light: '300',
    ExtraLight: '200',
    Thin: '100',
};
const Manrope = () => {
    const {styles} = useStyles(styleSheet);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {Object.values(fonts.Manrope).map(item => (
                    <View style={styles.item} key={item}>
                        <Text style={styles.title}>{item}:</Text>
                        <Text style={styles['item-text'](item)}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</Text>
                        <Text style={styles['item-text'](item)}>abcdefghijklmnopqrstuvwxyz</Text>
                        <Text style={styles['item-text'](item)}>1234567890</Text>
                    </View>
                ))}
            </View>
            <View>
                <Text style={styles.title}>About Mobile Legends MLBB Top-Up</Text>
                <View>
                    <Text style={styles.text}>
                        Top Up Mobile Legends Diamonds / Seasonal Pass / Starlight Member / Twilight
                        Pass instant and cheap!
                    </Text>
                    <Text style={styles.text}>
                        It's easy! Just fill in the ID, select the desired denomination, complete
                        the payment, and ML Diamond will be added into your ML account!
                    </Text>
                    <Text style={styles.text}>
                        Join your friends in a brand new 5v5 MOBA showdown against real human
                        opponents, Mobile Legends! Choose your favorite heroes and build the perfect
                        team with your comrades-in-arms! 10-second matchmaking, 10-minute battles.
                        Laning, juggling, tower rushing, team battles, all the fun of PC MOBAs and
                        action games in the palm of your hand! Feed your eSports spirit!
                    </Text>
                </View>
                <Text style={styles.title}>
                    How to top-up Mobile Legends Bang Bang MLBB Diamond:
                </Text>
                <View>
                    <Text style={styles.ol}>1.Select the Diamond denomination.</Text>
                    <Text style={styles.ol}>2.Enter your MLBB User ID and Zone ID.</Text>
                    <Text style={styles.ol}>3.Check out and select your payment method.</Text>
                    <Text style={styles.ol}>
                        4.Once payment made, the MLBB Diamond you purchased will be credited to your
                        MLBB Account shortly.
                    </Text>
                </View>

                <Text style={styles.title}>Important Information:</Text>
                <View>
                    <Text style={styles.li}>
                        Only User ID is needed for Mobile Legends Bang Bang Diamonds top-up.
                    </Text>
                    <Text style={styles.li}>
                        You may stay logged in throughout the transaction, once the top-up is
                        completed, you will receive the Diamonds in your MLBB account.
                    </Text>
                    <Text style={styles.li}>
                        Please enter your User ID correctly to avoid delay on Diamonds top-up.
                    </Text>

                    <Text style={styles.li}>
                        Top-up Mobile Legends diamonds for Malaysia and pay using Online Banking,
                        7-11, Credit Card, Paypal and many more. Get rewarded every time you've top
                        up MLBB Diamonds at SEAGM.com
                    </Text>
                </View>

                <Text style={styles.title}>
                    How to find Mobile Legend Bang Bang MLBB User ID and Zone ID:
                </Text>
                <View>
                    <Text style={styles.li}>Use your account to login the game.</Text>
                    <Text style={styles.li}>Click on your avatar in the top-left corner.</Text>
                    <Text style={styles.li}>
                        Your MLBB User ID and Zone ID will be displayed.(e.g. User ID=“12345678”,
                        ZoneID=“1234”)
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Manrope;

const styleSheet = createStyleSheet(theme => ({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#f7f7f7',
    },
    content: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        marginVertical: 16,
    },
    item: {
        marginVertical: 4,
    },
    'item-text'(fontFamily: string) {
        return {
            fontSize: 12,
            lineHeight: 18,
            opacity: 0.6,
            fontFamily,
            // fontWeight: '800',
            color: theme.colors.typography,
        };
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        color: theme.colors.typography,
        fontFamily: fonts.Manrope.SemiBold,
    },
    text: {
        marginVertical: 6,
        fontSize: 12,
        lineHeight: 16,
        opacity: 0.8,
        color: theme.colors.typography,
        fontFamily: fonts.Manrope.SemiBold,
    },
    li: {
        marginVertical: 6,
        fontSize: 12,
        lineHeight: 18,
        opacity: 0.8,
        color: theme.colors.typography,
        fontFamily: fonts.Manrope.SemiBold,
    },
    ol: {
        marginVertical: 6,
        fontSize: 12,
        lineHeight: 18,
        opacity: 0.8,
        color: theme.colors.typography,
        fontFamily: fonts.Manrope.SemiBold,
    },
}));
