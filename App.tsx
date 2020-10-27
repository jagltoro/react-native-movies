import 'react-native-gesture-handler';
import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from "./src/Helpers/Theme";
import {MainNavigator} from "./src/Main";
import {LoadAssets} from "./src/Helpers";
import {SafeAreaProvider} from "react-native-safe-area-context";

// const assets:any = []
const fonts = {
  "Dosis-Regular": require("./assets/fonts/Dosis-Regular.otf"),
  "Dosis-Bold": require("./assets/fonts/Dosis-Bold.otf"),
  "Dosis-SemiBold": require("./assets/fonts/Dosis-SemiBold.otf"),
  "Nunito-Bold": require("./assets/fonts/Nunito-Bold.otf"),
  "Nunito-Regular": require("./assets/fonts/Nunito-Regular.otf"),
  "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.otf"),
};


export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <LoadAssets {...{fonts}}>
        <SafeAreaProvider>
            <MainNavigator/>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
