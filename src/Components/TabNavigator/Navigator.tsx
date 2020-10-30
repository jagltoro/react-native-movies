import {Feather as Icon} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import {CinemaTabNavigator} from './CinemaTab';
import {SearchNavigator} from "./SearchTab";
import {TabRoutes} from "../../Helpers/Navigation";

const BottomTab = createBottomTabNavigator<TabRoutes>();

export default function Navigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Cinema">
      <BottomTab.Screen
        name="Cinema"
        component={CinemaTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="film" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {name: string; color: string }) {
  return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
}
