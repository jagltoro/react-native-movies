import React from 'react';
import {Dimensions} from "react-native";

import {Box, Text} from "../Helpers";
import Poster from "./Poster";
import Rating from "./Rating";

interface CardProps {
  image: string;
  title: string;
  overview: string;
  rating: number;
}

const {width: wWidth, height: wHeight} = Dimensions.get("window");

const height = wHeight / 1.6;
const width = height * (2 / 3);

const Card = ({image, title, overview, rating}: CardProps) => {

  return (
    <Box
      flex={1}
      alignItems={"center"}
      style={{width: wWidth}}
    >
      <Box>
        <Poster
          height={height}
          width={width}
          image={image}
        />
        <Rating rating={rating}/>
      </Box>
      <Box
        backgroundColor={"highlightBackground"}
        height={wHeight - height}
        borderTopLeftRadius={"m"}
        borderTopRightRadius={"m"}
      >
        <Text marginTop={"s"} variant={"movieCardTitle"}>{title}</Text>
        <Box
          padding={"m"}
          overflow={"hidden"}
        >
          <Text
            variant={"text"}
            textAlign={"justify"}
            numberOfLines={4}
          >
            {overview}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
