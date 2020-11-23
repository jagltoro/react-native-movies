import React from 'react';
import { getData } from './AsyncStorage';

let themeColors = '';

getData("theme").then(async (theme) => {
    themeColors = theme;
});

export const ThemeContext = React.createContext({
  colorTheme: themeColors,
  setColorTheme: () => {},
});
