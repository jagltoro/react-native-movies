import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";

export interface HomeNavigationProps< RouteName extends keyof TabRoutes > {
  navigation: StackNavigationProp<TabRoutes, RouteName>;
  route: RouteProp<TabRoutes,RouteName>
}

export interface CinemaNavigationProps< RouteName extends keyof CinemaParamList > {
  navigation: StackNavigationProp<CinemaParamList, RouteName>;
  route: RouteProp<CinemaParamList, RouteName>
}
export interface SearchNavigationProps< RouteName extends keyof SearchParamList > {
  navigation: StackNavigationProp<SearchParamList, RouteName>;
  route: RouteProp<SearchParamList, RouteName>
}

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type TabRoutes = {
  Cinema: undefined;
  Search: undefined;
  Profile: undefined;
}

export type CinemaParamList = {
  Cinema: undefined;
  Details:  { id: number;};
  Actor:  { id: number;};
};

export type SearchParamList = {
  Search: undefined;
  Details:  { id: number;};
};
export type ProfileParamList = {
  Profile: undefined;
};
