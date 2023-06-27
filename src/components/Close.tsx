import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface Props {
  size: number;
  color: string;
  onPress?: () => void;
  activeOpacity?: number;
}

const Close: React.FC<Props> = ({size, color, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, {width: size, height: size}]}
      onPress={onPress}>
      <View
        style={[
          styles.line,
          {backgroundColor: color, transform: [{rotate: '45deg'}]},
        ]}
      />
      <View
        style={[
          styles.line,
          {backgroundColor: color, transform: [{rotate: '-45deg'}]},
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    width: 2,
    height: '100%',
  },
});

export default Close;
