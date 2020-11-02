import AsyncStorage from "@react-native-community/async-storage";

export const storeData = async (value:any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("moviesGenres", jsonValue);
    return 'OK';
  } catch (e) {
    return 'E-S01';
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("moviesGenres");
    return value;
  } catch (e) {
    return 'E-S02'
  }
};
