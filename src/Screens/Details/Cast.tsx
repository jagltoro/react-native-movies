import React, {useState} from "react";
import {Feather as Icon} from "@expo/vector-icons";
import { Image } from "react-native";
import { Box, Text } from "../../Helpers";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CastProps {
  navigateTo: () => void;
  name: string;
  image?: string;
  character: string;
}

const Cast = ({ navigateTo, name, image, character }: CastProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={navigateTo}>
      <Box marginHorizontal="s" paddingVertical="m" flexDirection="row" alignItems="center">
        {
          (!image || !loaded) && 
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
              onLoad={() => setLoaded(true)}
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
    </TouchableOpacity>
  );
};

export default Cast;
