import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Header from "../../Components/Header";
import { getDetails, getCredits } from "../../Actions/Movies";
import { CinemaNavigationProps } from "../../Helpers/Navigation";
import { Box, Text } from "../../Helpers";
import Banner from "./Banner";
import Cast from "./Cast";
import { useTheme } from "../../Helpers/Theme";

const getMoveRuntime = (minutes: number) => {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
};

const Details = ({ route, navigation }: CinemaNavigationProps<"Details">) => {
  const { id } = route.params;
  const { height } = Dimensions.get("window");
  const theme = useTheme();

  const [details, setDetails] = useState({});
  const [credits, setCredits] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await getDetails(id);
      const credits = await getCredits(id);
      setDetails(details);
      setCredits(credits);
    };
    fetchDetails();
  }, []);

  return (
    <Box backgroundColor="mainBackground" flex={1}>
      {details.id && (
        <>
          <Header
            left={{
              icon: "arrow-left",
              color: "headerText",
              backgroundColor: "mainBackground",
              onPress: () => navigation.navigate("Cinema"),
            }}
            title={"Movie Details"}
            color={"transparent"}
            backgroundColor="transparent"
            right={{
              icon: "bookmark",
              color: "headerText",
              backgroundColor: "mainBackground",
              onPress: () => navigation.navigate("Cinema"),
            }}
          />
          <Banner
            image={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          />
          <Box
            style={{
              marginTop: height / 3.5,
            }}
            marginHorizontal="m"
          >
            <Box
              style={{
                borderBottomWidth: 1,
                borderBottomColor: theme.colors["divider"],
              }}
              paddingBottom="s"
            >
              <Text variant="movieDetailsTitle">{details.title}</Text>
              <Box flexDirection="row">
                <Text variant="runtime" marginRight="s">
                  {getMoveRuntime(details.runtime)}
                </Text>
                <Text variant="runtime"> | </Text>
                <Text variant="genres" marginLeft="s">
                  {details.genres
                    .map((genre) => genre.name)
                    .slice(0, 5)
                    .join(", ")}
                </Text>
              </Box>
            </Box>
            <Box>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {credits.cast && credits.cast.map((actor, index) => (
                  <Cast
                    key={index}
                    name={actor.name}
                    image={actor.profile_path}
                    character={actor.character}
                  />
                ))}
              </ScrollView>
            </Box>
            <Box marginTop="m">
              <Text
                variant="subtitles"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: theme.colors["divider"],
                }}
              >
                Plot
              </Text>
              <Text variant="overview">{details.overview}</Text>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Details;
