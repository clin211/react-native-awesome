import React, {useMemo} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {dark, light, ThemeType} from '../theme/colors';

const Home = () => {
  const mode = useColorScheme() || 'light';
  const styles = useMemo(
    () => styling(mode === 'light' ? light : dark),
    [mode],
  );
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styling = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
    },
  });

export default Home;
