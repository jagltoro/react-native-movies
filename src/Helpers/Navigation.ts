import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";

export interface HomeNavigationProps< RouteName extends keyof TabRoutes > {
  navigation: StackNavigationProp<TabRoutes, RouteName>;
  route: RouteProp<TabRoutes,RouteName>
}

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type TabRoutes = {
  Cinema: undefined;
  Search: undefined;
}

export type CinemaParamList = {
  Cinema: undefined;
};

export type SearchParamList = {
  Search: undefined;
};
