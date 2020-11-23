import React, { ReactText, useContext } from "react";
import { Picker } from "@react-native-picker/picker";

import { Header } from "../../Components";
import { Box, storeData, Text, useTheme } from "../../Helpers";
import { ThemeContext } from "../../Helpers/Context";

const Profile = () => {
  const { colorTheme, setColorTheme } = useContext(ThemeContext);
  const theme = useTheme();

  const handleChange = (value:ReactText) => {
    setColorTheme(value);
    storeData("theme",value)
  }
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Header
        title={"My profile"}
        color={"headerText"}
        backgroundColor="mainBackground"
      />
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderBottomColor="highlightBackground"
        borderBottomWidth={1}
        paddingHorizontal="m"
      >
        <Text variant="text">Theme</Text>
        <Box backgroundColor="transparent">
          <Picker
            selectedValue={colorTheme}
            mode="dropdown"
            style={{ height: 50, width: 100 }}
            onValueChange={(value) => handleChange(value)}
          >
            <Picker.Item color={theme.colors["text"]} label="Light" value="light" />
            <Picker.Item color={theme.colors["text"]}label="Dark" value="dark" />
          </Picker>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
