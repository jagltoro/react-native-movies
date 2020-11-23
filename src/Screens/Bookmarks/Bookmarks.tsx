import React, {useEffect, useState} from 'react';
import {ScrollView} from "react-native-gesture-handler";

import {storeData, getData, Box, Text, getTextGenres} from "../../Helpers";
import {Card, Header} from '../../Components';
import {BookmarkMovie} from '../../Interfaces';
import { ProfileNavigationProps } from '../../Helpers/Navigation';

const Bookmarks = ({navigation}: ProfileNavigationProps<"Bookmarks">) => {
  const [movies, setMovies] = useState<BookmarkMovie[]>([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getData("moviesGenres").then(async (genresData) => {
      const data = JSON.parse(genresData);
      setGenres(data.genres);
    });
    getData("bookmarks").then(async (genresData) => {
      const data = JSON.parse(genresData);
      let movies:BookmarkMovie[] = []
      Object.keys(data).map(key => movies.push(data[key]));
      setMovies(movies);
    });
  }, []);

  const clearBookmarks = () => {
    storeData("bookmarks",{});
    setMovies([]);
  }

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Header
       left={{
          icon: "arrow-left",
          color: "headerText",
          backgroundColor: "mainBackground",
          onPress: () => navigation.push("Profile"),
        }}
        title={"Bookmarked Movies"}
        color={"headerText"}
        backgroundColor="mainBackground"
        right={{
          icon: "trash-o",
          color: "headerText",
          backgroundColor: "mainBackground",
          onPress: () => clearBookmarks(),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        { !movies.length && 
          <Box justifyContent="center" alignItems="center" flex={1}>
            <Text variant="movieCardTitle">There is not any bookmark yet</Text> 
          </Box>
        }
        { movies.length > 0 && movies.map((movie: any, index) => {
          console.log(movie);
          const textGenres = getTextGenres(movie.genres_ids, genres);
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

export default Bookmarks;
