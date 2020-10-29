import React from 'react';
import {getMoviesFromApi} from '../Actions/Movies';
import {ScrollView} from "react-native-gesture-handler";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Card from "./Card";
import {Dimensions} from "react-native";

const { width } = Dimensions.get('window');

let moviesData: any = [];

(async function getMovies() {
  const moviesDataRaw = await getMoviesFromApi();
  moviesData = moviesDataRaw.results;
  return getMovies;
}());


const NowPLaying = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{paddingTop: insets.top}}
      decelerationRate={"fast"}
      snapToInterval={width}
      snapToAlignment={"center"}
    >
      {
        moviesData.map((movie: any) => (
          <Card
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            overview={movie.overview}
            image={movie.poster_path}
          />
        ))
      }
    </ScrollView>
  );
};

export default NowPLaying;
