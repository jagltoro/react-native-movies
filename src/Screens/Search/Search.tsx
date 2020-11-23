import React, {useEffect, useState} from "react";
import { ScrollView } from "react-native-gesture-handler";


import { getGenres, getSearch } from "../../Actions/Movies";
import {Card, Header, Loader, TextInput} from "../../Components";
import {storeData, getData, Box} from "../../Helpers";
import { APIGenresProps } from "../../interfaces";
import { SearchNavigationProps } from "../../Helpers/Navigation";

const Search = ({ route, navigation }: SearchNavigationProps<"Search">) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      getData("moviesGenres").then(async (genresData) => {
        if(genresData){
          const data = JSON.parse(genresData);
          if(data.genres){
            setGenres(data.genres);
          }
        }else{
          const genresDataApi = await getGenres();
          storeData("moviesGenres", genresDataApi);
          setGenres(genresDataApi.genres);
        }
      });
    }
    fetchMovies();
  }, []);
  
  const fetchSearch = async () => {
    setMovies([]);
    setLoading(true);
    const moviesData = await getSearch(search);
    setLoading(false);
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
        title={"Search"}
        color={"headerText"}
        backgroundColor="mainBackground"
      />
      <Box padding="m">
        <TextInput
            icon={"search"}
            placeholder={"Movie title"}
            onChangeText={(text) => setSearch(text)}
            action={fetchSearch}
            onSubmitEditing={fetchSearch}
            touched={focus}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            autoCapitalize={"none"}
            returnKeyType={"search"}
            returnKeyLabel={"search"}
          />
      </Box>
      <Box flex={1}>
      {loading && <Loader />}
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
    </Box>
  );
};

export default Search;
