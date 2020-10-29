import React from 'react';
import {Image} from 'react-native';
import {Box, Text, useTheme} from "../Helpers";
import {Feather as Icon} from "@expo/vector-icons";

interface PosterProps {
  height: number;
  width: number;
  image: string;
}

const Poster = ({height, width, image}: PosterProps) => {
  const theme = useTheme();
  return (
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${image}`}}
        style={{
          height: height,
          width: width,
          borderRadius: theme.borderRadii.m,
        }}
      />
  );
};

export default Poster;
