import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {CinemaParamList} from "../../Helpers/Navigation";

import Cinema from "../../Screens/Cinema";

const CinemaTabStack = createStackNavigator<CinemaParamList>();

export function CinemaTabNavigator() {
  return (
    <CinemaTabStack.Navigator headerMode="none">
      <CinemaTabStack.Screen
        name="Cinema"
        component={Cinema}
      />
    </CinemaTabStack.Navigator>
  );
}