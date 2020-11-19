import * as React from "react";
import { Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, useTheme } from "../../Helpers";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface BannerProps {
  image: string | undefined;
  loaded: (value:boolean) => void;
}
const placeholder =  require("#/images/backdrop-placeholder.png");

const Banner = ({ image, loaded }: BannerProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const {height} = Dimensions.get("window");
  return (
    <>
      <Image
        onLoad={() => loaded(true)}
        source={ image ? { uri: `https://image.tmdb.org/t/p/original${image}`} : placeholder}
        style={{
          position: "absolute",
          height: height/3,
          left: 0,
          right: 0,
          top: insets.top,
        }}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", theme.colors["mainBackground"]]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: insets.top,
          height: height/3,
        }}
      />
    </>
  );
};

export default Banner;
