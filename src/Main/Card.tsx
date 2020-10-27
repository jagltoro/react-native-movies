import React from 'react';
import {Dimensions, Image} from 'react-native';
import {Box, Text, useTheme} from "../Helpers";

const {width} = Dimensions.get("window");
interface CardProps {
  category: {
    id: number;
    title: string;
    image: number;
    align: string;
  }
}

const Card = ({category: {title, image,align}}: CardProps) => {
  const theme = useTheme();
  return (
    <Box
      paddingTop={"xl"}
      paddingHorizontal={"m"}
      style={{
        width: width - theme.spacing.m * 2,
        height: 200
      }}
      marginBottom={"m"}
      justifyContent={"center"}
      alignItems={align === 'right' ? "flex-start" : "flex-end"}
    >
      <Box
        position={"absolute"}
        left={0}
        right={0}
        top={0}
        bottom={0}
      >
        <Image
          source={image}
          style={{
            resizeMode: "cover",
            width: width - theme.spacing.m * 2,
            height: 200
          }}
        />
      </Box>
      <Text
        paddingTop={"m"}
        variant={"title"}
        color={"cardTitles"}
      >
        {title}
      </Text>
    </Box>
  );
};

export default Card;
