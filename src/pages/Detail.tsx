import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenParams from '../types/navigation';
import Touchable from '../components/button';
import useStyles from '../assets/styles/pages/detail';

const Detail: FC<NativeStackScreenProps<ScreenParams, 'Detail'>> = ({
  navigation,
}) => {
  const styles = useStyles();

  const handleOnPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail</Text>
      <Touchable>
        <Text onPress={handleOnPress} style={styles.text}>
          home
        </Text>
      </Touchable>
    </View>
  );
};

export default Detail;
