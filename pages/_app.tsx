import "../styles/globals.css";
import theme from "../theme/theme";
import "@fontsource/patua-one";
import "@fontsource/source-sans-pro";
import "@fontsource/poppins";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/layout/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
