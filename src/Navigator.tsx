import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {RootStackParamList} from "./Helpers/Navigation";
import Navigator from "./Components/TabNavigator";
import NotFoundScreen from "./Screens/NotFound";

const Stack = createStackNavigator<RootStackParamList>();
export const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={Navigator} />
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
  </Stack.Navigator>
);
