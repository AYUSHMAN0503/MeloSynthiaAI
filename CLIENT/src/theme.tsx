import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "linear-gradient(315deg, #130f40 0%, #000000 74%)",
      },
    },
  },
});

export default theme;
