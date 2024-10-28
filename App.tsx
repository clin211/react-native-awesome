import React, { useEffect } from 'react'
import { View, Text, StatusBar, } from 'react-native'
import { getDeviceInfo } from './src/utils/device'

const App = () => {

  getDeviceInfo().then((res) => {
    console.log('res:', res);
  })
  useEffect(() => {
    StatusBar.setBarStyle('dark-content')
    StatusBar.setTranslucent(false)
  }, [])

  return (
    <View style={{ marginTop: 0 }}>
      <Text>App</Text>
    </View>
  )
}

export default App