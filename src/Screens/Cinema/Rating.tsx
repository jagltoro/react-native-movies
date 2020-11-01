import React from 'react';
import {FontAwesome as Icon} from "@expo/vector-icons";
import {Box, Text, useTheme} from "../../Helpers";

interface RatingProps {
  rating: number;
}

const Rating = ({rating}: RatingProps) => {
  const ratingToStars = Math.floor(rating/2);
  const ratingHalfStars = ((rating/2) - ratingToStars) * 10;
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
      <Text variant={"movieCardTitle"} color="rating" marginRight="s">{rating}</Text>
      { Array(ratingToStars).fill(0).map((_,i) => <Icon key={i} color={theme.colors.rating} name={"star"} size={22} /> ) }
      { ratingHalfStars >= 5 && <Icon color={theme.colors.rating} name={"star-half-empty"} size={22} /> }
      { Array(fillRestOfStars).fill(0).map((_,i) => <Icon key={i} color={theme.colors.rating} name={"star-o"} size={22} /> ) }
    </Box>
  );
};

export default Rating;
