import React, { useEffect } from 'react';
import { View, Text, StatusBar, Pressable, StyleSheet } from 'react-native';
import { getDeviceInfo } from './src/utils/device';
import { createDeviceInfo } from './src/services/device';


const App = () => {

  const handleOnPress = async () => {
    const deviceInfo = await getDeviceInfo();
    console.log('🚀 ~ handleOnPress ~ deviceInfo:', deviceInfo)
    const res = await createDeviceInfo(deviceInfo);
    console.log('handle on press data:', res);
  };

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setTranslucent(false);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'flex-start' }}>
      <Text>App</Text>
      <Pressable style={styles.btn} onPress={handleOnPress}>
        <Text style={styles.text}>Press</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
