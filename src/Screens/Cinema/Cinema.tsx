import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";

import {getMovies, getUpcomingMovies, getGenres} from '../../Actions/Movies';
import {Text, storeData, getData, Box,useTheme} from "../../Helpers";

import Card from "./Card";

import {APIGenresProps} from "../../interfaces";
import Header from '../../Components/Header';
import { CinemaNavigationProps } from '../../Helpers/Navigation';
import { ActivityIndicator } from 'react-native';

const Cinema = ({navigation}: CinemaNavigationProps<"Cinema">) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    setMovies([]);
    const fetchMovies = async () => {
      fetchNowPlaying();
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

  const fetchNowPlaying = async () => {
    setMovies([]);
    const moviesData = await getMovies();
    setMovies(moviesData.results);
  }
  const fetchComingSoon = async () => {
    setMovies([]);
    const moviesData = await getUpcomingMovies();
    setMovies(moviesData.results);
  }

  const getTextGenres = (genresIds: number[]) => {
    return genres.filter((genre: APIGenresProps) => {
      return genresIds.includes(genre.id);
    });
  }
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Header
        title={"My Movies"}
        color={"headerText"}
        backgroundColor="mainBackground"
      />
        <Box flexDirection="row" justifyContent="space-around" marginBottom="l">
          <TouchableOpacity activeOpacity={0.7} onPress={() => fetchNowPlaying()} style={{
            borderRadius: theme.spacing['m']
          }}>
            <Box padding="s" borderRadius="m" backgroundColor="primary">
              <Text color="mainBackground">Now Showing</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => fetchComingSoon()} style={{
            borderRadius: theme.spacing['m']
          }}>
            <Box padding="s" borderRadius="m" backgroundColor="mainBackground" borderWidth={1} borderColor="primary">
              <Text color="text">Coming Soon</Text>
            </Box>
          </TouchableOpacity>
        </Box>
        { !movies.length && 
          <Box flex={1} justifyContent="center" alignItems="center">
            <ActivityIndicator size="large" color="#0000ff" style={{ zIndex: 11 }} />
          </Box>
        }
      <ScrollView
        showsVerticalScrollIndicator={false}
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
      </ScrollView>
    </Box>
  );
};

export default Cinema;
