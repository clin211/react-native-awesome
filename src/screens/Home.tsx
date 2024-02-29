import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const Home: FC = () => {
  const {styles} = useStyles(styleSheet);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.box} />
      <View style={styles.rectangle} />
    </View>
  );
};

export default Home;

const styleSheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  text: {
    fontSize: 12,
    color: theme.colors.typography,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: theme.colors.primary,
  },
  // ◦ with breakpoints
  rectangle: {
    width: {
      xs: 100,
      md: 200,
      xl: 400,
    },
    height: {
      xs: 50,
      md: 100,
      xl: 200,
    },
    backgroundColor: theme.colors.primary,
  },
}));
