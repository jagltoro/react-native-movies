import {createText, createBox, createTheme, useTheme as useReTheme} from '@shopify/restyle'
import {ImageStyle, TextStyle, ViewStyle, PixelRatio} from "react-native";

const palette = {
  "color-primary-100": "#F2F6FF",
  "color-primary-200": "#D9E4FF",
  "color-primary-300": "#A6C1FF",
  "color-primary-400": "#598BFF",
  "color-primary-500": "#3366FF",
  "color-primary-600": "#274BDB",
  "color-primary-700": "#1A34B8",
  "color-primary-800": "#102694",
  "color-primary-900": "#091C7A",
  "color-primary-transparent-100": "rgba(51, 102, 255, 0.08)",
  "color-primary-transparent-200": "rgba(51, 102, 255, 0.16)",
  "color-primary-transparent-300": "rgba(51, 102, 255, 0.24)",
  "color-primary-transparent-400": "rgba(51, 102, 255, 0.32)",
  "color-primary-transparent-500": "rgba(51, 102, 255, 0.40)",
  "color-primary-transparent-600": "rgba(51, 102, 255, 0.48)",
  "color-success-100": "#EDFFF3",
  "color-success-200": "#B3FFD6",
  "color-success-300": "#8CFAC7",
  "color-success-400": "#51F0B0",
  "color-success-500": "#00E096",
  "color-success-600": "#00B383",
  "color-success-700": "#008F72",
  "color-success-800": "#007566",
  "color-success-900": "#00524C",
  "color-success-transparent-100": "rgba(0, 224, 150, 0.08)",
  "color-success-transparent-200": "rgba(0, 224, 150, 0.16)",
  "color-success-transparent-300": "rgba(0, 224, 150, 0.24)",
  "color-success-transparent-400": "rgba(0, 224, 150, 0.32)",
  "color-success-transparent-500": "rgba(0, 224, 150, 0.40)",
  "color-success-transparent-600": "rgba(0, 224, 150, 0.48)",
  "color-info-100": "#F2F8FF",
  "color-info-200": "#C7E2FF",
  "color-info-300": "#94CBFF",
  "color-info-400": "#42AAFF",
  "color-info-500": "#0095FF",
  "color-info-600": "#006FD6",
  "color-info-700": "#0057C2",
  "color-info-800": "#0041A8",
  "color-info-900": "#002885",
  "color-info-transparent-100": "rgba(0, 149, 255, 0.08)",
  "color-info-transparent-200": "rgba(0, 149, 255, 0.16)",
  "color-info-transparent-300": "rgba(0, 149, 255, 0.24)",
  "color-info-transparent-400": "rgba(0, 149, 255, 0.32)",
  "color-info-transparent-500": "rgba(0, 149, 255, 0.40)",
  "color-info-transparent-600": "rgba(0, 149, 255, 0.48)",
  "color-warning-100": "#FFFDF2",
  "color-warning-200": "#FFF1C2",
  "color-warning-300": "#FFE59E",
  "color-warning-400": "#FFC94D",
  "color-warning-500": "#FFAA00",
  "color-warning-600": "#DB8B00",
  "color-warning-700": "#B86E00",
  "color-warning-800": "#945400",
  "color-warning-900": "#703C00",
  "color-warning-transparent-100": "rgba(255, 170, 0, 0.08)",
  "color-warning-transparent-200": "rgba(255, 170, 0, 0.16)",
  "color-warning-transparent-300": "rgba(255, 170, 0, 0.24)",
  "color-warning-transparent-400": "rgba(255, 170, 0, 0.32)",
  "color-warning-transparent-500": "rgba(255, 170, 0, 0.40)",
  "color-warning-transparent-600": "rgba(255, 170, 0, 0.48)",
  "color-danger-100": "#FFF2F2",
  "color-danger-200": "#FFD6D9",
  "color-danger-300": "#FFA8B4",
  "color-danger-400": "#FF708D",
  "color-danger-500": "#FF3D71",
  "color-danger-600": "#DB2C66",
  "color-danger-700": "#B81D5B",
  "color-danger-800": "#94124E",
  "color-danger-900": "#700940",
  "color-danger-transparent-100": "rgba(255, 61, 113, 0.08)",
  "color-danger-transparent-200": "rgba(255, 61, 113, 0.16)",
  "color-danger-transparent-300": "rgba(255, 61, 113, 0.24)",
  "color-danger-transparent-400": "rgba(255, 61, 113, 0.32)",
  "color-danger-transparent-500": "rgba(255, 61, 113, 0.40)",
  "color-danger-transparent-600": "rgba(255, 61, 113, 0.48)",
  "color-basic-100": "#FFFFFF",
  "color-basic-200": "#F7F9FC",
  "color-basic-300": "#EDF1F7",
  "color-basic-400": "#E4E9F2",
  "color-basic-500": "#C5CEE0",
  "color-basic-600": "#8F9BB3",
  "color-basic-700": "#2E3A59",
  "color-basic-800": "#222B45",
  "color-basic-900": "#1A2138",
  "color-basic-1000": "#151A30",
  "color-basic-1100": "#101426",
  "color-basic-transparent-100": "rgba(143, 155, 179, 0.08)",
  "color-basic-transparent-200": "rgba(143, 155, 179, 0.16)",
  "color-basic-transparent-300": "rgba(143, 155, 179, 0.24)",
  "color-basic-transparent-400": "rgba(143, 155, 179, 0.32)",
  "color-basic-transparent-500": "rgba(143, 155, 179, 0.40)",
  "color-basic-transparent-600": "rgba(143, 155, 179, 0.48)",
  "color-basic-control-transparent-100": "rgba(255, 255, 255, 0.08)",
  "color-basic-control-transparent-200": "rgba(255, 255, 255, 0.16)",
  "color-basic-control-transparent-300": "rgba(255, 255, 255, 0.24)",
  "color-basic-control-transparent-400": "rgba(255, 255, 255, 0.32)",
  "color-basic-control-transparent-500": "rgba(255, 255, 255, 0.40)",
  "color-basic-control-transparent-600": "rgba(255, 255, 255, 0.48)",
  "transparent": "transparent",
};

const fontSize = {
  small: PixelRatio.get() <= 2 ? 12 : 16,
  mSmall: PixelRatio.get() <= 2 ? 14 : 20,
  medium: PixelRatio.get() <= 2 ? 20 : 28,
  large: PixelRatio.get() <= 2 ? 32 : 48
}

export const theme = createTheme({
  colors: {
    mainBackground: palette["color-basic-200"],
    highlightBackground: palette["color-basic-transparent-300"],
    border: palette["color-basic-900"],
    text: palette["color-basic-800"],
    cardTitles: palette["color-basic-200"],
    primary: palette["color-primary-500"],
    warning: palette["color-warning-500"],
    rating: palette["color-warning-600"],
    danger: palette["color-danger-500"],
    genresText: palette["color-basic-600"],
    headerText: palette["color-basic-900"],
    tabBar: palette["color-basic-100"],
    tabBarBorder: palette["color-basic-400"],
    divider: palette["color-basic-400"],
    transparent: palette["transparent"]
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    ml: 34,
    xl: 40,
  },
  breakpoints: { },
  borderRadii: {
    none: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    title:{
      fontSize: fontSize.large,
      fontFamily: "Dosis-Bold",
      color: "text",
    },
    headerTitle: {
      fontSize: fontSize.medium,
      fontFamily: "Dosis-Bold",
      color: "text",
    },
    movieDetailsTitle: {
      fontSize: fontSize.large,
      fontFamily: "Dosis-Bold",
      color: "text"
    },
    movieCardTitle: {
      fontSize: fontSize.medium,
      fontFamily: "Dosis-Bold",
      color: "text",
    },
    appearances: {
      fontSize: fontSize.medium,
      fontFamily: "Nunito-Bold",
      color: "text",
    },

    
    overview:{
      fontSize: fontSize.mSmall,
      fontFamily: "Nunito-Regular",
      color: "text",
    },
    castName:{
      fontSize: fontSize.mSmall,
      fontFamily: "Nunito-Regular",
      color: "text",
    },
    text:{
      fontSize: fontSize.small,
      fontFamily: "Nunito-Regular",
      color: "text",
    },
    subtitles:{
      fontSize: fontSize.small,
      fontFamily: "Nunito-Regular",
      color: "genresText",
    },
    castCharacter:{
      fontSize: fontSize.small,
      fontFamily: "Nunito-Regular",
      color: "genresText",
    },
    genres:{
      fontSize: fontSize.small,
      fontFamily: "Nunito-Regular",
      color: "genresText",
    },
    runtime:{
      fontSize: fontSize.small,
      fontFamily: "Nunito-Regular",
      color: "genresText",
    },
  }
});


export type Theme = typeof theme;


export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette["color-basic-900"],
    border: palette["color-basic-200"],
    text: palette["color-basic-100"],
    primary: palette["color-primary-300"],
    cardTitles: palette["color-basic-900"],
    headerText: palette["color-basic-200"],
    tabBar: palette["color-basic-1000"],
    tabBarBorder: palette["color-basic-1100"],
  }
};


export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
}
