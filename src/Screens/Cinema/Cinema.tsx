import React, {useEffect, useState} from 'react';
import {Dimensions} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {getMovies, getGenres} from '../../Actions/Movies';
import Card from "./Card";
import {Text} from "../../Helpers";

import {APIGenresProps} from "../../interfaces";

const { height } = Dimensions.get('window');

const Cinema = () => {
  const insets = useSafeAreaInsets();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const moviesData = await getMovies();
      const genresData = await getGenres();
      setGenres(genresData.genres);
      setMovies(moviesData.results);
    }
    fetchProducts();
  }, []);

  const getTextGenres = (genresIds: number[]) => {
    return genres.filter((genre: APIGenresProps) => {
      return genresIds.includes(genre.id);
    });
  }
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{paddingTop: insets.top, height: height + insets.bottom}}
    >
      { movies.length > 0 && movies.map((movie: any) => {
        const textGenres = getTextGenres(movie.genre_ids)
        return (
          <Card
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
            genres={textGenres}
          />
        )
      })
      }
      { !movies.length && <Text>LOADING??</Text>}
    </ScrollView>
  );
};

export default Cinema;
