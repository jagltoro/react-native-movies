import React, { useEffect, useState } from "react";
import { Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { getDetails, getCredits } from "../../Actions/Movies";
import { MovieDetailsProps } from "../../Interfaces/MovieDetails";
import { CastProps } from "../../Interfaces/Cast";

import Header from "../../Components/Header";
import Loader from "../../Components/Loader";

import { CinemaNavigationProps } from "../../Helpers/Navigation";
import { Box, Text, useTheme } from "../../Helpers";

import Banner from "./Banner";
import Cast from "./Cast";
import Panel from "./Panel";

const getMoveRuntime = (minutes: number) => {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
};

const Details = ({ route, navigation }: CinemaNavigationProps<"Details">) => {
  const { id } = route.params;
  const { height } = Dimensions.get("window");
  const theme = useTheme();

  const [details, setDetails] = useState<MovieDetailsProps>();
  const [credits, setCredits] = useState<CastProps>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await getDetails(id);
      setDetails(details);

      const credits = await getCredits(id);
      setCredits(credits);
    };
    fetchDetails();
  }, []);

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
              loaded={setLoaded}
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
                  {credits &&
                    credits.cast.map((actor, index) => (
                      <Cast
                        key={index}
                        name={actor.name}
                        image={actor.profile_path}
                        character={actor.character}
                      />
                    ))}
                </ScrollView>
              </Box>
              <Panel
                title="Plot"
                borderStyle={{
                  width: 1,
                  color: theme.colors["divider"],
                }}
              >
                <Text variant="overview">{details.overview}</Text>
              </Panel>

              <Panel
                title="Producers"
                borderStyle={{
                  width: 1,
                  color: theme.colors["divider"],
                }}
              >
                {
                  details.production_companies
                  .map((company) => (
                    <Box key={company.id} flexDirection="row" alignItems="center" 
                    paddingVertical="s">
                      <Text variant="overview">
                        {company.name}
                      </Text>
                    </Box>
                  ))
                }
              </Panel>
            </Box>
          </>
        )}
      </Box>
    </ScrollView>
  );
};

export default Details;
