import React from 'react';
import {Feather as Icon} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {CinemaTabNavigator} from './CinemaTab';
import {SearchNavigator} from "./SearchTab";
import {ProfileNavigator} from "./ProfileTab";
import {TabRoutes} from "../../Helpers/Navigation";
import { useTheme } from "../../Helpers";

const BottomTab = createBottomTabNavigator<TabRoutes>();

export default function Navigator() {
  const theme = useTheme();
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        style: {
            backgroundColor: theme.colors['tabBar'],
            borderTopColor: theme.colors['tabBarBorder']
        }
      }}
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
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {name: string; color: string }) {
  return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
}
