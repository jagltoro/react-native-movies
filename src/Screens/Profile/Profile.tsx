import React, { ReactText, useContext } from "react";
import {FontAwesome as Icon} from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Header } from "../../Components";
import { Box, storeData, Text, useTheme } from "../../Helpers";
import { ThemeContext } from "../../Helpers/Context";
import { ProfileNavigationProps } from "../../Helpers/Navigation";

const Profile = ({ route, navigation }: ProfileNavigationProps<"Profile">) => {
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
        paddingLeft="m"
      >
        <Text variant="text">Theme</Text>
        <Picker
          selectedValue={colorTheme}
          style={{ height: 45, width: 100, color: theme.colors["text"] }}
          onValueChange={(value) => handleChange(value)}
        >
          <Picker.Item label="Light" value="light" />
          <Picker.Item label="Dark" value="dark" />
        </Picker>
      </Box>
      <TouchableOpacity onPress={() => navigation.push('Bookmarks')}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderBottomColor="highlightBackground"
          borderBottomWidth={1}
          padding="m"
        >
          <Text variant="text">Movies bookmarked</Text>
          <Icon name="arrow-right" color={theme.colors['text']} size={20}/>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default Profile;
