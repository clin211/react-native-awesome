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
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} translucent />
      <Text style={styles.title}>Home</Text>
      <Pressable onPress={() => navigation.push('Detail')}>
        <Text style={styles.title}>Press</Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('DirectPurchase')}>
        <Text style={styles.title}>Direct Purchase</Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('Icons')}>
        <Text style={styles.title}>Icons</Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('Swiper')}>
        <Text style={styles.title}>Swiper</Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('CardDetailWebView')}>
        <Text style={styles.title}>card detail webview</Text>
      </Pressable>
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
