import React from 'react';
import {Dimensions, Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {DrawerNavigationProp} from "@react-navigation/drawer";

import {Box, Text, useTheme} from "../Helpers";
import {HomeRoutes} from "../Helpers/Navigation";
import {TouchableHighlight} from "react-native-gesture-handler";

const {width} = Dimensions.get("window");

export interface CardProps {
  title: string;
  image: number;
  align: string;
  screen: keyof HomeRoutes;
}

const Card = ({title, image, align, screen}: CardProps) => {
  const theme = useTheme();
  const {navigate} = useNavigation<DrawerNavigationProp<HomeRoutes, "Landing">>();
  return (
    <TouchableHighlight onPress={() => navigate(screen)}>
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
    </TouchableHighlight>
  );
};

export default Card;
