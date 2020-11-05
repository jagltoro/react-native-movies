import React, {useEffect, useState} from 'react';
import {ScrollView} from "react-native-gesture-handler";

import {getMovies, getGenres} from '../../Actions/Movies';
import {Text, storeData, getData, Box} from "../../Helpers";

import Card from "./Card";

import {APIGenresProps} from "../../interfaces";
import Header from '../../Components/Header';
import { CinemaNavigationProps } from '../../Helpers/Navigation';

const Cinema = ({navigation}: CinemaNavigationProps<"Cinema">) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
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
    fetchMovies();
  }, []);

  const getTextGenres = (genresIds: number[]) => {
    return genres.filter((genre: APIGenresProps) => {
      return genresIds.includes(genre.id);
    });
  }
  return (
    <Box backgroundColor="mainBackground">
      <Header
        title={"My Movies"}
        color={"headerText"}
        backgroundColor="mainBackground"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom:16}}
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
              navigateTo={() => navigation.navigate('Details', {
                id: movie.id
              })}
              {...{last}}
            />
          )
        })
        }
        { !movies.length && <Text>LOADING??</Text>}
      </ScrollView>
    </Box>
  );
};

export default Cinema;
