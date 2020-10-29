import React from 'react';
import {Feather as Icon} from "@expo/vector-icons";
import {Box, Text} from "../Helpers";

interface RatingProps {
  rating: number;
}

const Rating = ({rating}: RatingProps) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"warning"}
      padding={"s"}
      top={0}
      right={0}
      flexDirection={"row"}
      alignItems={"center"}
      borderRadius={"s"}
    >
      <Icon
        name={"star"}
        color={"black"}
      />
      <Text marginLeft={"s"}>
        {rating}
      </Text>
    </Box>
  );
};

export default Rating;
