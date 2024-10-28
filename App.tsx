import React, { useEffect } from 'react'
import { View, Text, StatusBar, } from 'react-native'

const App = () => {

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