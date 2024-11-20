import React, { useEffect } from 'react'
import { View, Text, StatusBar, Pressable, } from 'react-native'
import { getDeviceInfo } from './src/utils/device'
import { createDeviceInfo } from './src/services/device'


const App = () => {

  const handleOnPress = async () => {
    const deviceInfo = await getDeviceInfo()
    const res = await createDeviceInfo(deviceInfo)
    console.log('handle on press data:', res)
  }

  useEffect(() => {
    StatusBar.setBarStyle('dark-content')
    StatusBar.setTranslucent(false)
  }, [])

  return (
    <View style={{ marginTop: 0 }}>
      <Text>App</Text>
      <Pressable onPress={handleOnPress}><Text>Press</Text></Pressable>
    </View>
  )
}

export default App