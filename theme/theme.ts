// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  fonts: {
    heading: "Patua One, sans-serif",
    body: "Source Sans Pro, sans-serif",
  },
  sizes: {
    container: {
      lg: "1168px",
    },
  },
  // colors: {
  //   yellow: {
  //     300: "#FCF24A",
  //   },
  // },
  config,
});

export default theme;
