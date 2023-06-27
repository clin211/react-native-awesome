import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useRef} from 'react';
import {family} from '../theme';
import AddAccount from '../components/AddAccount';

const Home = () => {
  const addAccountRef = useRef(null);
  const renderTitle = useMemo(() => {
    return (
      <View style={styles['title-box']}>
        <Text style={styles['title-text']}>Account Manage</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      {renderTitle}
      <TouchableOpacity
        style={styles.new}
        activeOpacity={0.5}
        onPress={() => {
          // @ts-ignore
          addAccountRef.current.show();
        }}>
        <Text style={styles['new-text']}>new</Text>
      </TouchableOpacity>

      <AddAccount ref={addAccountRef} />
    </View>
  );
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
  new: {
    position: 'absolute',
    right: 10,
    bottom: 30,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'new-text': {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: family.BoldItalic,
    fontWeight: '700',
    color: '#fff',
  },
});
