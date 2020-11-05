import React from 'react';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {PixelRatio} from "react-native";

import RoundedIconButton from './RoundedIconButton';
import {Box, Text, Theme} from "../Helpers";

const ICON_SIZE = PixelRatio.get() <= 2 ? 34 : 44;

interface HeaderProps {
  left?: {
    icon: string;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
    onPress: () => void
  },
  title?: string;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  right?: {
    icon: string;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
    onPress: () => void
  }
}

const Header = ({left, right, title, color, backgroundColor}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      justifyContent={left && right ? 'space-between' : "center"}
      padding={"m"}
      flexDirection={"row"}
      zIndex={10}
      style={{paddingTop: insets.top*1.5}}
      {...{backgroundColor}}
    >
      {
        left && 
        <RoundedIconButton
          name={left.icon}
          color={left.color}
          backgroundColor={left.backgroundColor}
          onPress={left.onPress}
          size={ICON_SIZE}
          iconRatio={0.5}
        />
      }
      { 
        title &&
        <Text
          variant={"headerTitle"}
          color={color}>
          {title.toUpperCase()}
        </Text>
      }
      {
        right && 
        <RoundedIconButton
          name={right.icon}
          color={right.color}
          backgroundColor={right.backgroundColor}
          onPress={right.onPress}
          size={ICON_SIZE}
          iconRatio={0.5}
        />
      }
    </Box>
  );
};

Header.defaultProps = {
  backgroundColor: "mainBackground"
}

export default Header;