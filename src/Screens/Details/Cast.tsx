import React from "react";
import {Feather as Icon} from "@expo/vector-icons";
import { Image } from "react-native";
import { Box, Text } from "../../Helpers";

interface CastProps {
  name: string;
  image?: string;
  character: string;
}

const Cast = ({ name, image, character }: CastProps) => {
  return (
    <Box marginHorizontal="s" paddingVertical="m" flexDirection="row" alignItems="center">
      {
        !image && 
        <Box 
        alignItems="center"
        justifyContent="center"
        height={50} width={50} borderRadius="m" backgroundColor="highlightBackground">
          <Icon name="user" size={40}/>
        </Box>
      }
      {
        image && 
        <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w64_and_h64_face${image}`,
            }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 10
            }}
          />
      }
      <Box marginLeft="s">
        <Text variant="castName">{name}</Text>
        <Text variant="castCharacter">{character}</Text>
      </Box>
    </Box>
  );
};

export default Cast;
