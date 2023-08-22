import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg:"linear-gradient(315deg, #130f40 0%, #000000 74%"
      }
    })
  },
})
export default theme