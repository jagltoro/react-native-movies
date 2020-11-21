import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ProfileParamList} from "../../Helpers/Navigation";

import Profile from "../../Screens/Profile";

const ProfileStack = createStackNavigator<ProfileParamList>();

export function ProfileNavigator() {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
      />
    </ProfileStack.Navigator>
  );
}
