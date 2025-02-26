import React, { useEffect } from 'react';
import { View, Text, StatusBar, Pressable, StyleSheet } from 'react-native';
import { getDeviceInfo } from './src/utils/device';
import { createDeviceInfo, fetchDeviceInfo } from './src/services/device';

const App = () => {

  const handleOnPress = async () => {
    try {
      const deviceInfo = await getDeviceInfo();
      const res = await createDeviceInfo(deviceInfo as any);
      console.log('🚀 ~ handleOnPress ~ res:', res);
    } catch (error) {
      console.log('error:', error);
    }
  };

  const handleOnPressGetDevices = async () => {
    try {
      const res = await fetchDeviceInfo({
        'order': '',
        'page': 1,
        'pageSize': 20,
      });
      console.log('🚀 ~ handleOnPressGetDevices ~ res:', res);
    } catch (error) {
      console.log('🚀 ~ handleOnPressGetDevices ~ error:', error);

    }
  };

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setTranslucent(false);
  }, []);

  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Pressable style={styles.btn} onPress={handleOnPress}>
        <Text style={styles.text}>Press</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={handleOnPressGetDevices}>
        <Text style={styles.text}>Press GET devices</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  btn: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'skyblue',
    paddingBlock: 10,
    paddingInline: 20,
    marginBlock: 10,
    backgroundColor: 'lightblue',
  },
  text: {
    alignItems: 'center',
  },
});
export default App;
