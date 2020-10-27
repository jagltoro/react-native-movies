import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
// import {AuthenticationRoutes} from "../components/Navigation";

import Landing from "./Landing";

export const MainStack = createStackNavigator();
export const MainNavigator = () => {
  return (
    <MainStack.Navigator headerMode={"none"}>
      <MainStack.Screen name="Landing" component={Landing}/>
    </MainStack.Navigator>
  );
}
