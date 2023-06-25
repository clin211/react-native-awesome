import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {family} from '../theme';

const Home = () => {
  const renderTitle = useMemo(() => {
    return (
      <View style={styles['title-box']}>
        <Text style={styles['title-text']}>Account Manage</Text>
      </View>
    );
  }, []);

  return <View style={styles.container}>{renderTitle}</View>;
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  'title-box': {
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  'title-text': {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    fontFamily: family.Bold,
  },
});
