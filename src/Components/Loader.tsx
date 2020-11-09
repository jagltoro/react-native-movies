import * as React from "react";
import { ActivityIndicator } from "react-native";
import { Box } from "../Helpers";

const Loader = () => {
  return (
    <Box
      backgroundColor="mainBackground"
      flex={1}
      zIndex={20}
      alignContent="center"
      justifyContent="center"
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
    >
      <ActivityIndicator size="large" color="#0000ff" style={{ zIndex: 11 }} />
    </Box>
  );
};

export default Loader;
