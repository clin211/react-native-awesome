import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ArrowBack} from './Icons';
import useMakeStyle from '../hooks/useMakeStyle';

const Back = () => {
  const navigation = useNavigation();
  const {theme} = useMakeStyle();
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <ArrowBack
      onPress={handleBack}
      svgProps={{width: 20, height: 20, fill: theme.colors.text}}
    />
  );
};

export default Back;
