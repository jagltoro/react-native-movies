import React, { useEffect, useState } from "react";
import { Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getDetails } from "../../Actions/Actors";
import Header from "../../Components/Header";
import Loader from "../../Components/Loader";
import { Box, Text, useTheme } from "../../Helpers";
import { CinemaNavigationProps } from "../../Helpers/Navigation";
import { ActorProps } from "../../Interfaces/Actor";

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
            onPress: () => navigation.navigate("Cinema"),
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
                <Box paddingHorizontal="m">
                  <Text variant="movieCardTitle">{details.name}</Text>
                </Box>
            </Box>
          </Box>
        )}
    </Box>
  );
};

export default Actor;
