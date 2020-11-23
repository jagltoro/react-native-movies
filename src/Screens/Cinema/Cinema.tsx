import React, {useEffect, useState} from 'react';
import {ScrollView} from "react-native-gesture-handler";

import {getMovies, getUpcomingMovies, getGenres} from '../../Actions/Movies';
import {storeData, getData, Box} from "../../Helpers";
import {Card, Header, Loader} from '../../Components';
import {APIGenresProps} from "../../interfaces";
import { CinemaNavigationProps } from '../../Helpers/Navigation';
import Filters from './Filters';

const Cinema = ({navigation}: CinemaNavigationProps<"Cinema">) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [active, setActive] = useState('nowShowing');

  useEffect(() => {
    setMovies([]);
    const fetchMovies = async () => {
      fetchNowPlaying();
      getData("moviesGenres").then(async (genresData) => {
        if(genresData){
          const data = JSON.parse(genresData);
          if(data.genres){
            setGenres(data.genres);
          }
        }else{
          const genresDataApi = await getGenres();
          storeData("moviesGenres",genresDataApi);
          setGenres(genresDataApi.genres);
        }
      });
    }
    fetchMovies();
  }, []);

  const fetchNowPlaying = async () => {
    setMovies([]);
    setActive('nowShowing');
    const moviesData = await getMovies();
    setMovies(moviesData.results);
  }
  const fetchComingSoon = async () => {
    setMovies([]);
    setActive('comingSoon');
    const moviesData = await getUpcomingMovies();
    setMovies(moviesData.results);
  }

  const getTextGenres = (genresIds: number[]) => {
    return genres.filter((genre: APIGenresProps) => {
      return genresIds.includes(genre.id);
    });
  }


  const filterButtons = [
    {
      fetchFunction: fetchNowPlaying,
      text: "Now Showing",
      id: "nowShowing"
    },
    {
      fetchFunction: fetchComingSoon,
      text: "Coming Soon",
      id: "comingSoon"
    }
  ]

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Header
        title={"My Movies"}
        color={"headerText"}
        backgroundColor="mainBackground"
      />
        <Filters buttons={filterButtons} active={active} />
        { !movies.length && <Loader />
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
              navigateTo={() => navigation.push('Details', {
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
