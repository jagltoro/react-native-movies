import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {SearchParamList} from "../../Helpers/Navigation";

import Search from "../../Screens/Search";
import Details from "../../Screens/Details";
import {navigatorOptions} from './NavigatorOptions';
import { useTheme } from "../../Helpers";

const SearchStack = createStackNavigator<SearchParamList>();

export function SearchNavigator() {
  const theme = useTheme();
  const options = navigatorOptions(theme.colors['mainBackground'])
  return (
    <SearchStack.Navigator screenOptions={options}>
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
