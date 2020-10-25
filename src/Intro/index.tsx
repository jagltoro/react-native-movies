import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
// import {AuthenticationRoutes} from "../components/Navigation";


import OnBoarding from "./OnBoarding";

export const IntroStack = createStackNavigator();
export const IntroNavigator = () => {
  return (
    <IntroStack.Navigator headerMode={"none"}>
      <IntroStack.Screen name="OnBoarding" component={OnBoarding}/>
    </IntroStack.Navigator>
  );
}