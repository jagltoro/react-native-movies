import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {CinemaParamList} from "../../Helpers/Navigation";

import Cinema from "../../Screens/Cinema";
import Details from "../../Screens/Details";
import Actor from "../../Screens/Actor";
import {navigatorOptions} from './NavigatorOptions';
import { useTheme } from "../../Helpers";

const CinemaTabStack = createStackNavigator<CinemaParamList>();

export function CinemaTabNavigator() {
  const theme = useTheme();
  const options = navigatorOptions(theme.colors['mainBackground'])
  return (
    <CinemaTabStack.Navigator screenOptions={options}>
      <CinemaTabStack.Screen
        name="Cinema"
        component={Cinema}
      />
      <CinemaTabStack.Screen
        name="Details"
        component={Details}
      />
      <CinemaTabStack.Screen
        name="Actor"
        component={Actor}
      />
    </CinemaTabStack.Navigator>
  );
}
