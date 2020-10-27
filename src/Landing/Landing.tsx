import React from 'react';
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {Box} from "../Helpers";
import Card, {CardProps} from "./Card";
import {ScrollView} from "react-native-gesture-handler";

const categories: CardProps[] = [
  {
    title: "Now Playing",
    image: require("#/images/new.jpg"),
    screen: "NowPlaying",
    align: "right"
  },
  {
    title: "Upcoming",
    image: require("#/images/upcoming.jpg"),
    screen: "NowPlaying",
    align: "left"
  },
  {
    title: "Favorite",
    image: require("#/images/favorite.jpg"),
    screen: "NowPlaying",
    align: "right"
  },
  {
    title: "Search",
    image: require("#/images/search.jpg"),
    screen: "NowPlaying",
    align: "left"
  }
]

const Landing = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView>
      <Box
        flex={1}
        backgroundColor={"mainBackground"}
        style={{paddingTop: insets.top}}
        paddingHorizontal={"m"}
      >
        {
          categories.map((category, index) => (
            <Card
              title={category.title}
              image={category.image}
              align={category.align}
              screen={category.screen}
              key={index}
            />
          ))
        }
      </Box>
    </ScrollView>
  );
};

export default Landing;
