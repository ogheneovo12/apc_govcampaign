import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  components: {
    Heading: {
      baseStyle: {
        color: "#042552",
      },
    },
  },
});

export default theme;
