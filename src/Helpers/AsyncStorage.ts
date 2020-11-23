import AsyncStorage from "@react-native-community/async-storage";

export const storeData = async (key:string, value:any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return 'OK';
  } catch (e) {
    return 'E-S01';
  }
};

export const getData = async (key:string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    return 'E-S02'
  }
};
