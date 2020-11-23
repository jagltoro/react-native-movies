import React, {useState, useEffect, useContext} from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from '@shopify/restyle';

import {theme,darkTheme} from "./src/Helpers/Theme";
import {LoadAssets} from "./src/Helpers";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {HomeNavigator} from "./src/Navigator";
import {ThemeContext} from "./src/Helpers/Context";

const fonts = {
  "Dosis-Regular": require("./assets/fonts/Dosis-Regular.otf"),
  "Dosis-Bold": require("./assets/fonts/Dosis-Bold.otf"),
  "Dosis-SemiBold": require("./assets/fonts/Dosis-SemiBold.otf"),
  "Nunito-Bold": require("./assets/fonts/Nunito-Bold.otf"),
  "Nunito-Regular": require("./assets/fonts/Nunito-Regular.otf"),
  "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.otf"),
};

export default function App() {
  const [colorTheme, setColorTheme] = useState("");
  const value = { colorTheme, setColorTheme };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={colorTheme === "dark" ? darkTheme : theme}>
        <LoadAssets {...{fonts}}>
          <SafeAreaProvider>
              <HomeNavigator/>
          </SafeAreaProvider>
        </LoadAssets>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
