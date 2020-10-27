import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import NowPlaying from "./Home/NowPlaying";
import {HomeRoutes} from "./Helpers/Navigation";
import Landing from "./Landing";
// import DrawerContent, {DRAWER_WIDTH} from "./Drawer";

// export {assets} from "./Drawer";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator
  >
    <Drawer.Screen
      name="Landing"
      component={Landing}
    />
    <Drawer.Screen
      name="NowPlaying"
      component={NowPlaying}
    />
  </Drawer.Navigator>
);
