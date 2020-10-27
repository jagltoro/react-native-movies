import 'react-native-gesture-handler';
import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from "./src/Helpers/Theme";
import {IntroNavigator} from "./src/Intro";
import {LoadAssets} from "./src/Helpers";
import {SafeAreaProvider} from "react-native-safe-area-context";

// const assets:any = []
const fonts = {
  "Dosis-Light": require("./assets/fonts/Dosis-Light.otf"),
  "Dosis-Regular": require("./assets/fonts/Dosis-Regular.otf"),
  "Dosis-Bold": require("./assets/fonts/Dosis-Bold.otf"),
  "Dosis-SemiBold": require("./assets/fonts/Dosis-SemiBold.otf"),
  "Nunito-Bold": require("./assets/fonts/Nunito-Bold.otf"),
  "Nunito-Regular": require("./assets/fonts/Nunito-Regular.otf"),
  "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.otf"),
  "SourceSansPro-Bold": require("./assets/fonts/SourceSansPro-Bold.otf"),
  "SourceSansPro-Regular": require("./assets/fonts/SourceSansPro-Regular.otf"),
  "SourceSansPro-SemiBold": require("./assets/fonts/SourceSansPro-SemiBold.otf"),
};


export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <LoadAssets {...{fonts}}>
        <SafeAreaProvider>
            <IntroNavigator/>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
