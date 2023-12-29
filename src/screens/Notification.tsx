import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import notifee, { AndroidBadgeIconType, AndroidImportance } from '@notifee/react-native';
import { fonts } from '@/theme';

const Notification = () => {
    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        if (Platform.OS === 'ios') await notifee.requestPermission();

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
            title: 'Notification Title',
            body: 'Main body content of the notification',
            android: {
                channelId,
                smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                    id: 'default',
                },
            },
        });
    }

    const handleCustomNotification = async () => {
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            badge: true,
            importance: AndroidImportance.HIGH,
        });

        notifee.displayNotification({
            title: '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
            subtitle: '&#129395;',
            body: 'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
            android: {
                channelId,
                sound: 'y1981',
                color: '#4caf50',
                smallIcon: 'ic_launcher',
                // largeIcon:
                //    'https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                actions: [
                    {
                        title: '<b>Dance</b> &#128111;',
                        pressAction: { id: 'dance' },
                    },
                    {
                        title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
                        pressAction: { id: 'cry' },
                    },
                ],
                badgeIconType: AndroidBadgeIconType.SMALL,
            },
        });
    };

    return (
        <View>
            <Text style={styles.text} onPress={() => onDisplayNotification()}>
                Display Notification
            </Text>
            <Text style={styles.text} onPress={handleCustomNotification}>
                custom notification
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: 'skyblue',
        fontFamily: fonts.Manrope.SemiBold,
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 8,
    },
});
export default Notification;
