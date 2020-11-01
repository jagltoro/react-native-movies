import React, {useEffect, useState} from 'react';
import {ScrollView} from "react-native-gesture-handler";
import {useSafeAreaInsets} from "react-native-safe-area-context";


import {getMovies, getGenres} from '../../Actions/Movies';
import {Text, storeData, getData} from "../../Helpers";

import Card from "./Card";

import {APIGenresProps} from "../../interfaces";

const Cinema = () => {
  const insets = useSafeAreaInsets();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const moviesData = await getMovies();
      setMovies(moviesData.results);
      getData().then(async (genresData) => {
        if(genresData){
          const data = JSON.parse(genresData);
          if(data.genres){
            setGenres(data.genres);
          }
        }else{
          const genresDataApi = await getGenres();
          storeData(genresDataApi);
          setGenres(genresDataApi.genres);
        }
      });
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
      style={{paddingTop: insets.top, marginBottom:16}}
    >
      { movies.length > 0 && movies.map((movie: any, index) => {
        const textGenres = getTextGenres(movie.genre_ids);
        const last = index === movies.length -1;
        return (
          <Card
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
            genres={textGenres}
            {...{last}}
          />
        )
      })
      }
      { !movies.length && <Text>LOADING??</Text>}
    </ScrollView>
  );
};

export default Cinema;
