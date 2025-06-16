/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native'
import { NewAppScreen } from '@react-native/new-app-screen';
import BootSplash from 'react-native-bootsplash';

// 模拟应用初始化过程
const performAppInitialization = async () => {
  // 模拟异步操作
  await new Promise(resolve => setTimeout(resolve, 2000));
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const init = async () => {
      // 执行应用初始化任务
      // 例如：加载用户数据、初始化第三方SDK等
      // 使用定时器模拟异步操作
      await performAppInitialization();
    };

    init().finally(async () => {
      // 初始化完成后隐藏启动屏
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
