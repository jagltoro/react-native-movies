import {createStackNavigator} from "@react-navigation/stack";
import {SearchParamList} from "../../Helpers/Navigation";
import Cinema from "../../Screens/Cinema";
import * as React from "react";

const SearchStack = createStackNavigator<SearchParamList>();

export function SearchNavigator() {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen
        name="Search"
        component={Cinema}
      />
    </SearchStack.Navigator>
  );
}
