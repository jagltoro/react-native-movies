import React from "react";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { PixelRatio } from "react-native";
import { Box, Text, useTheme } from "../Helpers";

interface RatingProps {
  rating: number;
}

const STAR_SIZE = PixelRatio.get() <= 2 ? 18 : 22;

const Rating = ({ rating }: RatingProps) => {
  const ratingToStars = Math.floor(rating / 2);
  const ratingHalfStars = (rating / 2 - ratingToStars) * 10;
  const fillRestOfStars = 5 - ratingToStars - (ratingHalfStars >= 5 ? 1 : 0);
  const theme = useTheme();

  return (
    <Box
      position={"absolute"}
      bottom={0}
      right={theme.spacing.s}
      paddingRight="s"
      justifyContent={"center"}
      flexDirection={"row"}
      alignItems={"center"}
      borderBottomLeftRadius={"s"}
      zIndex={3}
    >
      <Text variant={"movieCardTitle"} color="rating" marginRight="s">
        {rating}
      </Text>
      {Array(ratingToStars)
        .fill(0)
        .map((_, i) => (
          <Icon
            key={i}
            color={theme.colors.rating}
            style={{ marginBottom: -3 }}
            name={"star"}
            size={STAR_SIZE}
          />
        ))}
      {ratingHalfStars >= 5 && (
        <Icon
          color={theme.colors.rating}
          name={"star-half-empty"}
          style={{ marginBottom: -3 }}
          size={STAR_SIZE}
        />
      )}
      {Array(fillRestOfStars)
        .fill(0)
        .map((_, i) => (
          <Icon
            key={i}
            color={theme.colors.rating}
            style={{ marginBottom: -3 }}
            name={"star-o"}
            size={STAR_SIZE}
          />
        ))}
    </Box>
  );
};

export default Rating;
