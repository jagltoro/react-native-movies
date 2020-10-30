import React from 'react';
import {Image} from "react-native";

import {Box, Text, useTheme} from "../../Helpers";
import Rating from "./Rating";

interface CardProps {
  image: string;
  title: string;
  rating: number;
}

const Card = ({image, title, rating}: CardProps) => {
  const theme = useTheme();
  return (
    <Box
      flexDirection={"row"}
      marginBottom={"m"}
      paddingHorizontal={"s"}
    >
      <Box style={{zIndex: 2}}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${image}`}}
          style={{
            height: 150,
            width: 100,
            borderRadius: theme.borderRadii.m,
            position: "absolute",
            left: theme.spacing.s
          }}
        />
      </Box>
      <Rating rating={rating} />
      <Box
        backgroundColor={"highlightBackground"}
        paddingHorizontal={"m"}
        marginTop={"m"}
        borderRadius={"s"}
        height={150}
        zIndex={1}
        width={'100%'}
      >
        <Box style={{marginLeft: 100}}>
          <Text variant={"movieCardTitle"}>{title}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
