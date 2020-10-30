import React from 'react';
import {FontAwesome as Icon} from "@expo/vector-icons";
import {Box, useTheme} from "../../Helpers";

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
      backgroundColor={"warning"}
      bottom={theme.spacing.m}
      left={theme.spacing.m}
      width={100}
      justifyContent={"center"}
      flexDirection={"row"}
      alignItems={"center"}
      borderBottomLeftRadius={"s"}
      borderBottomRightRadius={"s"}
      zIndex={3}
    >
      { Array(ratingToStars).fill(0).map((_,i) => <Icon key={i} name={"star"} size={12} /> ) }
      { ratingHalfStars >= 5 && <Icon name={"star-half-empty"} size={12} /> }
      { Array(fillRestOfStars).fill(0).map((_,i) => <Icon key={i} name={"star-o"} size={12} /> ) }
    </Box>
  );
};

export default Rating;
