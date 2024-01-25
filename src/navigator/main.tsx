import React, { FC, useEffect, useState } from 'react';
import { I18nManager, View, Text, Pressable } from 'react-native';
import Tabbar from '@mindinventory/react-native-tab-bar-interaction';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LottieView, { AnimationObject } from 'lottie-react-native';
import { useTheme } from '@/theme';
import { home, cart, search, settings, user } from '@/assets/lotties';
import Home from '@/screens/Home';
import Cart from '@/screens/Cart';
import List from '@/screens/List';
import Notice from '@/screens/Notice';
import UserCenter from '@/screens/UserCenter';

type LottieSourceType = string | AnimationObject | { uri: string } | undefined;
interface ItemProps {
    source: LottieSourceType;
    isPlay: boolean;
}

const Item: FC<ItemProps> = ({ source, isPlay }) => {
    return (
        <View style={{ width: 40, height: 40 }}>
            <LottieView source={source} autoPlay={isPlay} loop={false} />
        </View>
    );
};

interface TabBarProps {
    name: 'Home' | 'Cart' | 'Search' | 'User' | 'Setting';
    activeIcon: JSX.Element;
    inactiveIcon: JSX.Element;
}
const sources = {
    Home: home,
    Cart: cart,
    Search: search,
    User: user,
    List: settings,
};
const MainNavigator = createBottomTabNavigator();
const Main = () => {
    const theme = useTheme();
    const [tabs, setTabs] = useState<TabBarProps[]>([
        {
            name: 'Home',
            activeIcon: <Item source={home} isPlay />,
            inactiveIcon: <Item source={home} isPlay={false} />,
        },
        {
            name: 'Cart',
            activeIcon: <Item source={cart} isPlay />,
            inactiveIcon: <Item source={cart} isPlay={false} />,
        },
        {
            name: 'Search',
            activeIcon: <Item source={search} isPlay />,
            inactiveIcon: <Item source={search} isPlay={false} />,
        },
        {
            name: 'User',
            activeIcon: <Item source={user} isPlay />,
            inactiveIcon: <Item source={user} isPlay={false} />,
        },
        {
            name: 'Setting',
            activeIcon: <Item source={settings} isPlay />,
            inactiveIcon: <Item source={settings} isPlay={false} />,
        },
    ]);
    const [bgColor, setBgColor] = useState('#FFC0C7');

    useEffect(() => {
        I18nManager.forceRTL(false);
    }, []);

    const onTabChange = (item: TabBarProps) => {
        let tempTabs = [...tabs];
        let bgColor = '#FFC0C7';
        const temp = tempTabs.map(val => {
            if (item.name === 'Home' && val.name === 'Home') {
                val.activeIcon = <Item source={home} isPlay={true} />;
                bgColor = '#FFC0C7';
            } else if (item.name === 'Cart' && val.name === 'Cart') {
                val.activeIcon = <Item source={cart} isPlay={true} />;
                bgColor = '#FF7128';
            } else if (item.name === 'Search' && val.name === 'Search') {
                val.activeIcon = <Item source={search} isPlay={true} />;
                bgColor = '#0088cc';
            } else if (item.name === 'Setting' && val.name === 'Setting') {
                val.activeIcon = <Item source={settings} isPlay={true} />;
                bgColor = '#ff6666';
            } else if (item.name === 'User' && val.name === 'User') {
                val.activeIcon = <Item source={user} isPlay={true} />;
                bgColor = '#66ff99';
            }
            return val;
        });

        setTabs(temp);
        setBgColor(bgColor);
    };
    return (
        <MainNavigator.Navigator
            initialRouteName="Home"
            tabBar={props => {
                const routes = props.state.routes;
                console.log('🚀 ~ Main ~ props:', JSON.stringify(props, null, 2));
                return (
                    <View
                        style={{
                            width: '100%',
                            paddingBottom: 12,
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#ffc0c7',
                                width: '90%',
                                height: 80,
                                flexDirection: 'row',
                            }}
                        >
                            {routes.map(item => {
                                return (
                                    <Pressable
                                        key={item.key}
                                        style={{
                                            width: `${100 / routes.length}%`,
                                            height: '100%',
                                            borderWidth: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 1000,
                                        }}
                                        onPress={() => props.navigation.navigate(item.name)}
                                    >
                                        <LottieView source={cart} autoPlay />
                                    </Pressable>
                                );
                            })}
                        </View>
                    </View>
                );
            }}
        >
            <MainNavigator.Screen name="Home" component={Home} />
            <MainNavigator.Screen name="Notice" component={Notice} />
            <MainNavigator.Screen name="List" component={List} />
            <MainNavigator.Screen name="Cart" component={Cart} />
            <MainNavigator.Screen name="User" component={UserCenter} />
        </MainNavigator.Navigator>
    );
};

export default Main;
