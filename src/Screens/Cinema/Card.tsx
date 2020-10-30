import React from 'react';
import {Feather as Icon} from "@expo/vector-icons";
import {Dimensions, Image} from "react-native";

import {Box, Text, useTheme} from "../../Helpers";

interface CardProps {
  image: string;
  title: string;
  rating: number;
}

const {width} = Dimensions.get("window");

const Card = ({image, title, rating}: CardProps) => {
  const theme = useTheme();
  return (
    <Box
      flexDirection={"row"}
      marginBottom={"m"}
    >
      <Box>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${image}`}}
          style={{
            height: 150,
            width: 100,
            borderRadius: theme.borderRadii.m,
          }}
        />
      </Box>
      <Box
        backgroundColor={"highlightBackground"}
        paddingHorizontal={"m"}
        marginTop={"ml"}
        borderTopRightRadius={"m"}
        borderBottomRightRadius={"m"}
        style={{width: width - (100 + theme.spacing.s * 2)}}
      >
        <Text variant={"movieCardTitle"}>{title}</Text>
        <Box
          position={"absolute"}
          backgroundColor={"warning"}
          padding={"s"}
          bottom={0}
          flexDirection={"row"}
          alignItems={"center"}
          borderRadius={"s"}
          left={0 - theme.spacing.m}>
          <Icon name={"star"} color={"black"}/>
          <Text marginLeft={"s"}>
            {rating}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
