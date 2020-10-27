import React from 'react';
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {Box} from "../Helpers";
import Card from "./Card";
import {ScrollView} from "react-native-gesture-handler";

const categories = [
  {
    id: 1,
    title: "Now Playing",
    image: require("#/images/new.jpg"),
    align: "right"
  },
  {
    id: 2,
    title: "Upcoming",
    image: require("#/images/upcoming.jpg"),
    align: "left"
  },
  {
    id: 3,
    title: "Favorite",
    image: require("#/images/favorite.jpg"),
    align: "right"
  },
  {
    id: 4,
    title: "Search",
    image: require("#/images/search.jpg"),
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
          categories.map((category) => (
            <Card key={category.id} {...{category}} />
          ))
        }
      </Box>
    </ScrollView>
  );
};

export default Landing;
