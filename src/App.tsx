import React from "react";

import { Global, ThemeProvider } from "@emotion/react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Main from "@/pages/main/Main";
import { globalStyles, theme } from "@/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
