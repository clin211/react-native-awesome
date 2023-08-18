import React, {FC, useEffect} from 'react';
import {View, Text, Pressable, StatusBar} from 'react-native';
import ScreenParams from '../types/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useStyles from '../assets/styles/pages/home';
import useMakeStyle from '@/hooks/useMakeStyle';
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
    </View>
  );
};

export default Home;
