import React from 'react';
import {Image} from 'react-native';
import {useTheme} from "../Helpers";

interface PosterProps {
  height: number;
  image: string;
}

const Poster = ({height, image}: PosterProps) => {
  const theme = useTheme();
  const width = height * (2 / 3);
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
