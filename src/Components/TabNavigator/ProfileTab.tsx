import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ProfileParamList} from "../../Helpers/Navigation";

import {navigatorOptions} from './NavigatorOptions';
import { useTheme } from "../../Helpers";

import Profile from "../../Screens/Profile";
import Bookmarks from "../../Screens/Bookmarks";
import Details from "../../Screens/Details";

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
      <ProfileStack.Screen
        name="Bookmarks"
        component={Bookmarks}
      />
      <ProfileStack.Screen
        name="Details"
        component={Details}
      />
    </ProfileStack.Navigator>
  );
}
