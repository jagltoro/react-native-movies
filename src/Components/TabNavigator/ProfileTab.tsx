import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ProfileParamList} from "../../Helpers/Navigation";

import Profile from "../../Screens/Profile";
import {navigatorOptions} from './NavigatorOptions';
import { useTheme } from "../../Helpers";

const ProfileStack = createStackNavigator<ProfileParamList>();

export function ProfileNavigator() {
  const theme = useTheme();
  const options = navigatorOptions(theme.colors['mainBackground'])
  return (
    <ProfileStack.Navigator screenOptions={options}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
      />
    </ProfileStack.Navigator>
  );
}
