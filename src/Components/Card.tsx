import React, {useState} from "react";
import { Image } from "react-native";

import { Box, Text, useTheme } from "../Helpers";
import Rating from "./Rating";
import { GenresProps } from "../Interfaces";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CardProps {
  image: string;
  title: string;
  rating: number;
  genres: GenresProps[];
  navigateTo: () => void;
  last?: boolean;
}

const placeholder =  require("#/images/poster-placeholder.png")

const Card = ({ image, title, rating, genres, navigateTo, last }: CardProps) => {
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();
  const genresText = genres.map((genre) => genre.name).slice(0, 3);
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={navigateTo}>
      <Box
        flexDirection={"row"}
        marginBottom={last ? "l" : "m"}
        paddingHorizontal={"s"}
      >
        <Box style={{ zIndex: 2 }}>
          {
            !loaded && 
            <Image
              source={placeholder}
              style={{
                height: 150,
                width: 100,
                resizeMode: "cover",
                borderTopLeftRadius: theme.borderRadii.s,
                borderBottomLeftRadius: theme.borderRadii.s,
                position: "absolute",
              }}
            />
          }
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w154${image}` }}
            onLoad={() =>setLoaded(true)}
            style={{
              height: 150,
              width: 100,
              borderTopLeftRadius: theme.borderRadii.s,
              borderBottomLeftRadius: theme.borderRadii.s,
              position: "absolute",
            }}
          />
        </Box>
        <Rating rating={rating} />
        <Box
          backgroundColor={"highlightBackground"}
          paddingHorizontal={"m"}
          borderRadius={"s"}
          height={150}
          zIndex={1}
          width={"100%"}
        >
          <Box style={{ marginLeft: 95 }} marginTop="m">
            <Text variant={"movieCardTitle"} numberOfLines={2}>
              {title}
            </Text>
            <Text variant={"genres"}>{genresText.join(" | ")}</Text>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default Card;
