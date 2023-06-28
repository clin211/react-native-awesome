import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (key: string, value: any) => {
  try {
    if (!key) {
      console.error('key is not found!');
      return;
    }
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(`storage save ${key} error:`, error);
  }
};

export const load = async (key: string) => {
  try {
    if (!key) {
      console.error('key is not found!');
      return;
    }
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(`storage load ${key} error:`, error);
  }
};

export const remove = async (key: string) => {
  try {
    if (!key) {
      console.error('key is not found!');
      return;
    }
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`storage remove ${key} error:`, error);
  }
};
