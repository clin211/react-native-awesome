import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';

async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}

const prefix = Platform.OS === 'android' ? 'FCM-ANDROID-' : Platform.OS === 'ios' ? 'FCM-IOS-' : '';
export async function firebaseState() {
    const checkPermission = async () => {
        messaging()
            .hasPermission()
            .then(enabled => {
                if (enabled) {
                    getToken();
                } else {
                    requestPermission();
                }
            })
            .catch(error => {
                console.log('error checking permissions ' + error);
            });
    };

    const requestPermission = () => {
        messaging()
            .requestPermission()
            .then(() => {
                getToken();
            })
            .catch(error => {
                console.log('permission rejected ' + error);
            });
    };

    const getToken = () => {
        let token = null;
        messaging()
            .getToken()
            .then(pushID => {
                token = pushID;
                global.push_id = prefix + pushID;
            })
            .catch(error => {
                console.error('error getting push token ' + error);
            });
        return token;
    };

    return { checkPermission, requestPermission, getToken };
}
