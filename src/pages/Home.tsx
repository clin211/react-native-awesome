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
    </View>
  );
};

export default Home;
