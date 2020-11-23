import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { getDetails } from "../../Actions/Movies";
import { MovieDetailsProps, CastProps, BookmarkProps } from "../../Interfaces";

import {Header, Loader} from "../../Components";

import { CinemaNavigationProps } from "../../Helpers/Navigation";
import { Box, Text, storeData, getData } from "../../Helpers";

import Banner from "./Banner";
import Cast from "./Cast";
import Panel from "./Panel";

const getMoveRuntime = (minutes: number) => {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
};

const Details = ({ route, navigation }: CinemaNavigationProps<"Details">) => {
  const { id } = route.params;
  const { height } = Dimensions.get("window");

  const [details, setDetails] = useState<MovieDetailsProps>();
  const [credits, setCredits] = useState<CastProps>();
  const [loaded, setLoaded] = useState(false);
  const [bookmarksIds, setBookmarksIds] = useState<number []>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await getDetails(id);
      setDetails(details);
      setCredits(details.credits);
    };
    getData("bookmarks").then(async (bookmarksSaved) => { 
      let bookmarks = JSON.parse(bookmarksSaved);
      let moviesBookmarked:number[] = Object.keys(bookmarks).map(movieId => parseInt(movieId));
      setBookmarksIds(moviesBookmarked);
    });
    fetchDetails();
  }, []);

  const toggleBookmark = (movie:MovieDetailsProps) => {
    const {id, title, vote_average, poster_path, genres} = movie;
    let bookmarks:BookmarkProps;
    let ids = [...bookmarksIds];
    let genres_ids = genres.map(genre => genre.id);
    
    getData("bookmarks").then(async (bookmarksSaved) => {
      bookmarks = JSON.parse(bookmarksSaved);
      if(!bookmarks.hasOwnProperty(id)){
        bookmarks[id] = {
          id,
          title,
          vote_average,
          poster_path,
          genres_ids
        }
        ids.push(id);
      }else {
        ids = ids.filter(movieId => movieId !== id );
        delete bookmarks[id];
      }
      storeData("bookmarks", bookmarks);
      setBookmarksIds(ids);
    });
  }

  return (
    <ScrollView>
      <Box backgroundColor="mainBackground" flex={1}>
        {!loaded && <Loader />}
        {details && (
          <>
            <Header
              left={{
                icon: "arrow-left",
                color: "headerText",
                backgroundColor: "mainBackground",
                onPress: () => navigation.goBack(),
              }}
              title={"Movie Details"}
              color={"transparent"}
              backgroundColor="transparent"
              right={{
                icon: bookmarksIds.includes(details.id) ? "bookmark" : "bookmark-o",
                color: "headerText",
                backgroundColor: "mainBackground",
                onPress: () => toggleBookmark(details),
              }}
            />
            <Banner
              loaded={setLoaded}
              image={details.backdrop_path}
            />
            <Box
              style={{
                marginTop: height / 3.5,
              }}
              marginHorizontal="m"
            >
              <Box
                paddingBottom="s"
                alignItems="center"
                justifyContent="center"
              >
                <Text variant="movieDetailsTitle">{details.title}</Text>
                <Box flexDirection="row" justifyContent="center">
                  <Text variant="genres">
                    {details.genres
                      .map((genre) => genre.name)
                      .slice(0, 5)
                      .join(", ")}
                  </Text>
                </Box>
              </Box>
              <Box flexDirection="row" justifyContent="space-around">
                <Panel title="Year" marginTop="s">
                  <Text variant="text">
                    {new Date(details.release_date).getFullYear()}
                  </Text>
                </Panel>
                <Panel title="Country" marginTop="s">
                  <Text variant="text">
                    {details.production_countries.map(country => country.iso_3166_1).join(" | ")}
                  </Text>
                </Panel>
                <Panel title="Runtime" marginTop="s">
                  <Text variant="text">
                    {getMoveRuntime(details.runtime)}
                  </Text>
                </Panel>
              </Box>

              <Panel
                title="Cast"
                marginTop="m"
                hasBorder
              >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {credits &&
                    credits.cast.map((actor, index) => (
                      <Cast
                        key={index}
                        navigateTo={() => navigation.push('Actor', {
                          id: actor.id
                        })}
                        name={actor.name}
                        image={actor.profile_path}
                        character={actor.character}
                      />
                    ))}
                </ScrollView>
              </Panel>

              <Panel
                title="Plot"
                marginTop="m"
                hasBorder
              >
                <Text variant="overview">{details.overview}</Text>
              </Panel>

              <Panel
                title="Producers"
                marginTop="m"
                hasBorder
              >
                {details.production_companies.map((company) => (
                  <Box
                    key={company.id}
                    flexDirection="row"
                    alignItems="center"
                    paddingVertical="s"
                  >
                    <Text variant="overview">{company.name}</Text>
                  </Box>
                ))}
              </Panel>
            </Box>
          </>
        )}
      </Box>
    </ScrollView>
  );
};

export default Details;
