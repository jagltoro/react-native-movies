import React from 'react';
import {FontAwesome as Icon} from "@expo/vector-icons";
import {Theme, Box, Text} from "../Helpers";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio?: number;
  marginBottom?: keyof Theme["spacing"]
}

const RoundedIcon = ({ name, size, color, backgroundColor, iconRatio, marginBottom }:RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      justifyContent={"center"}
      alignItems={"center"}
      style={{borderRadius: size / 2}}
      {...{marginBottom, backgroundColor}}
    >
      <Text {...{color}}>
        <Icon {...{name}} size={iconSize}/>
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.5
};

export default RoundedIcon;