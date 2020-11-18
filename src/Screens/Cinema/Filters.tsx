import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text, useTheme } from "../../Helpers";

interface FiltersProps {
  buttons: {
    fetchFunction: () => Promise<void>;
    text: string;
    id: string;
  }[]
  active: string;
}

const Filters = ({buttons, active}: FiltersProps) => {
  const theme = useTheme();

  return (
    <Box flexDirection="row" justifyContent="space-around" marginBottom="l">
      {
        buttons.map((data, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={() => data.fetchFunction()}
            style={{
              borderRadius: theme.spacing["m"],
            }}
          >
            <Box
              padding="s"
              borderRadius="m"
              backgroundColor={
                active === data.id ? "primary" : "mainBackground"
              }
              borderWidth={active === data.id ? 0 : 1} 
              borderColor={active === data.id ? "transparent" : "primary"}
            >
              <Text color={
                active === data.id ? "mainBackground" : "text"
              }>
                {data.text}
              </Text>
            </Box>
          </TouchableOpacity>
        ))
      }
    </Box>
  );
};

export default Filters;
