import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {CinemaParamList} from "../../Helpers/Navigation";

import Cinema from "../../Screens/Cinema";
import Details from "../../Screens/Details";
import Actor from "../../Screens/Actor";

const CinemaTabStack = createStackNavigator<CinemaParamList>();

export function CinemaTabNavigator() {
  return (
    <CinemaTabStack.Navigator headerMode="none">
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
