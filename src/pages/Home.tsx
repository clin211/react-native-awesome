import React, {FC, useEffect} from 'react';
import {View, Text, Pressable, StatusBar} from 'react-native';
import ScreenParams from '../types/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useStyles from '../assets/styles/pages/home';
import useMakeStyle from '@/hooks/useMakeStyle';
import LottieView from 'lottie-react-native';

const Home: FC<NativeStackScreenProps<ScreenParams, 'Home'>> = ({
  navigation,
}) => {
  const {mode} = useMakeStyle();
  const isDark = mode === 'dark';
  const barStyle = isDark ? 'light-content' : 'dark-content';
  console.log(barStyle);
  const styles = useStyles();
  const btnAll = [
    {
      onPress: () => navigation.push('Detail'),
      title: 'Detail',
    },
    {
      title: 'Direct Purchase',
      onPress: () => navigation.push('DirectPurchase'),
    },
    {title: 'Icons', onPress: () => navigation.push('Icons')},
    {title: 'Swiper', onPress: () => navigation.push('Swiper')},
    {
      title: 'card detail webview',
      onPress: () => navigation.push('CardDetailWebView'),
    },
  ];
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} translucent />
      <Text style={styles.title}>Home</Text>

      <View style={styles['btn-all']}>
        {btnAll.map((item, index) => (
          <Pressable
            key={`${item.title}-${index}`}
            style={styles.button}
            onPress={item.onPress}>
            <Text style={styles['button-text']}>{item.title}</Text>
          </Pressable>
        ))}
      </View>

      <LottieView
        style={styles['game-card-icon']}
        source={require('../assets/lotties/game-cards.json')}
        autoPlay
        loop={false}
      />
      <LottieView
        style={[styles['game-card-icon']]}
        source={require('../assets/lotties/mobile-recharge.json')}
        autoPlay
        loop
      />
      <LottieView
        style={[styles['game-card-icon']]}
        source={require('../assets/lotties/mobile-recharge2.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Home;
