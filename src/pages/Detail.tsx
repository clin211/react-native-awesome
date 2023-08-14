import React, {FC} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenParams from '../types/navigation';
import useMakeStyle from '../hooks/useMakeStyle';

const Detail: FC<NativeStackScreenProps<ScreenParams, 'Detail'>> = ({
  navigation,
}) => {
  const styles = useStyles();

  const handleOnPress = () => {
    navigation.push('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail</Text>
      <Pressable>
        <Text onPress={handleOnPress}>home</Text>
      </Pressable>
    </View>
  );
};

const useStyles = () => {
  const {theme} = useMakeStyle();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    text: {
      fontSize: 20,
      lineHeight: 24,
      color: theme.colors.text,
    },
  });
};
export default Detail;
