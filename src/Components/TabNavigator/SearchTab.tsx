import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {SearchParamList} from "../../Helpers/Navigation";

import Search from "../../Screens/Search";
import Details from "../../Screens/Details";

const SearchStack = createStackNavigator<SearchParamList>();

export function SearchNavigator() {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen
        name="Search"
        component={Search}
      />
      <SearchStack.Screen
        name="Details"
        component={Details}
      />
    </SearchStack.Navigator>
  );
}
