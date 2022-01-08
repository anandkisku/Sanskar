import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme1, GlobalStyles } from "./Theme";
import MainRoutes from "./MainRoutes"

function App() {
  

  return (
    <ThemeProvider theme={Theme1}>
      <GlobalStyles />
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
