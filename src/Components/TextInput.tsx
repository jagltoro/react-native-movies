import React, {forwardRef} from 'react';
import {TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps} from "react-native";
import {Feather as Icon} from "@expo/vector-icons";
import {Box, useTheme} from "../Helpers";
import { TouchableOpacity } from 'react-native-gesture-handler';

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  touched?:boolean;
  action: () => void;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>((
  {icon, touched, action, ...props},
  ref) => {
  const theme = useTheme();
  const color = touched ? "primary" : "text";
  const iconColor = theme.colors[color];

  return (
    <Box
      height={48}
      borderRadius={"s"}
      borderColor={color}
      borderWidth={StyleSheet.hairlineWidth}
      flexDirection={"row"}
      alignItems={"center"}
      padding={"s"}
    >
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid={"transparent"}
          placeholderTextColor={iconColor}
          {...{ref}}
          {...props}
        />
      </Box>
      <Box padding={"s"}>
        <TouchableOpacity onPress={() => action()}>
        <Icon
          size={16}
          name={icon}
          color={iconColor} />
        </TouchableOpacity>
      </Box>
    </Box>
  );
});

export default TextInput;