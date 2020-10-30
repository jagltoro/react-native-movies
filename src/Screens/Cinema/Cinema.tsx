import React from 'react';
import {Dimensions} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {getMoviesFromApi} from '../../Actions/Movies';
import Card from "./Card";

// import Rating from "./Rating";
const { height } = Dimensions.get('window');

let moviesData: any = [];

(async function getMovies() {
  const moviesDataRaw = await getMoviesFromApi();
  moviesData = moviesDataRaw.results;
  return getMovies;
}());

const Cinema = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{paddingTop: insets.top, height: height + insets.bottom}}
    >
      {
        moviesData.map((movie: any) => (
          <Card
            key={movie.id}
            title={movie.title}
            // ribbon={<Rating rating={movie.vote_average} />}
            rating={movie.vote_average}
            image={movie.poster_path}
          />
        ))
      }
    </ScrollView>
  );
};

export default Cinema;
