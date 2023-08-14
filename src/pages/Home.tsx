import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import ScreenParams from '../types/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useStyles from '../assets/styles/pages/home';
const Home: FC<NativeStackScreenProps<ScreenParams, 'Home'>> = ({
  navigation,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
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
