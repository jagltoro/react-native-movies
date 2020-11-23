import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { getDetails } from "../../Actions/Actors";
import {Header, Loader} from "../../Components";
import { Box, Text, useTheme } from "../../Helpers";
import { CinemaNavigationProps } from "../../Helpers/Navigation";
import { ActorProps } from "../../Interfaces";
import SocialMediaButton from "./SocialMediaButton";

const placeholder =  require("#/images/poster-placeholder.png");

const checkNull = (value: string | null) => {
  return (value || value !== ""); //Just because some strings can be empty instead of null
}

const Actor = ({ route, navigation }: CinemaNavigationProps<"Actor">) => {
  const { id } = route.params;
  const theme = useTheme();
  
  const [details, setDetails] = useState<ActorProps>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await getDetails(id);
      setDetails(details);
    };
    fetchDetails();
  }, []);

  return (
      <Box backgroundColor="mainBackground" flex={1}>
        {!loaded && <Loader />}
        <Header
          left={{
            icon: "arrow-left",
            color: "headerText",
            backgroundColor: "mainBackground",
            onPress: () => navigation.goBack(),
          }}
          title={"Actor Details"}
          color={"transparent"}
          backgroundColor="transparent"
          right={{
            icon: "bookmark",
            color: "transparent",
            backgroundColor: "transparent",
            onPress: () => true,
          }}
        />
        <ScrollView>
        {details && (
          <Box paddingHorizontal="m">
            <Box flexDirection="row" alignItems="center">
                <Image
                  onLoad={() => setLoaded(true)}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w300_and_h450_face${details.profile_path}`,
                  }}
                  style={{
                    borderRadius: theme.borderRadii.s,
                    height: 450/2.5,
                    width: 300/2
                  }}
                />
                <Box paddingHorizontal="m" flex={1}>
                  <Text variant="movieCardTitle">{details.name}</Text>
                  <Text variant="text">{details.birthday}</Text>
                  <Text variant="text">{details.place_of_birth}</Text>
                  <Box flexDirection="row" marginTop="m">
                    { checkNull(details.external_ids.twitter_id) && <SocialMediaButton icon="twitter" externalLink={`https://twitter.com/${details.external_ids.twitter_id}`} />}
                    { checkNull(details.external_ids.instagram_id) && <SocialMediaButton icon="instagram" externalLink={`https://instagram.com/${details.external_ids.instagram_id}`} />}
                    { checkNull(details.external_ids.facebook_id) && <SocialMediaButton icon="facebook-square" externalLink={`https://instagram.com/${details.external_ids.instagram_id}`} />}
                    { checkNull(details.external_ids.imdb_id) && <SocialMediaButton icon="imdb" externalLink={`https://www.imdb.com/name/${details.external_ids.imdb_id}`} />}
                  </Box>
                </Box>
            </Box>
            <Box marginTop="m">
              <Text variant="text">
                {details.biography ? details.biography : "No Biography available"}
              </Text>
            </Box>
            <Box marginTop="m">
              <Box borderBottomWidth={1} borderBottomColor="divider" paddingBottom="s" marginBottom="s">
                <Text variant="appearances">Appearances</Text>
              </Box>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom: theme.spacing['m']}}>
                {
                  details.credits.cast.map((movie,index) => (
                    <Box key={index} flex={1} marginRight="m">
                      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.push('Details', {
                        id: movie.id
                      })}>
                      <Image
                        source={placeholder}
                        style={{
                          height: 150,
                          width: 100,
                          borderRadius: theme.borderRadii.s,
                          position: "absolute"
                        }}
                      />
                      <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                        style={{
                          height: 150,
                          width: 100,
                          borderRadius: theme.borderRadii.s
                        }}
                      />
                      </TouchableOpacity>
                    </Box>
                  ))
                }
              </ScrollView>
            </Box>
          </Box>
        )}
        </ScrollView>
    </Box>
  );
};

export default Actor;
