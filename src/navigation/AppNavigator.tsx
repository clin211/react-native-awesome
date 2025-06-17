import { NavigationContainer } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import BootSplash from 'react-native-bootsplash';
import Home from '../screen/home';
import Profile from '../screen/profile';
import Feed from '../screen/feed';

type ScreenParams = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

export type HomeScreenProps = NativeStackScreenProps<ScreenParams, 'Home'>;
export type ProfileScreenProps = NativeStackScreenProps<ScreenParams, 'Profile'>;
export type FeedScreenProps = NativeStackScreenProps<ScreenParams, 'Feed'>;

const RootNavigator = createStackNavigator<ScreenParams>();

export default function AppNavigator() {
    return <NavigationContainer onReady={() => BootSplash.hide()}>
        <RootNavigator.Navigator initialRouteName='Home'>
            <RootNavigator.Screen name="Home" component={Home} />
            <RootNavigator.Screen name="Profile" component={Profile} />
            <RootNavigator.Screen name="Feed" component={Feed} />
        </RootNavigator.Navigator>
    </NavigationContainer>;
}