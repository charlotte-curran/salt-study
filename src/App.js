import React from "react";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "./Theme/theme";
import { FontImport } from "./Theme/GlobalStyle";
import WindowDimensionsProvider from "./Context/dimensionsContext";
import ScrollProvider from "./Context/scrollContext";
import LocaleProvider from "./Context/localeContext";

import Home from "./components/Home";

const App = () => {
  return (
    <LocaleProvider>
      <WindowDimensionsProvider>
        <ScrollProvider>
          <FontImport />
          <ThemeProvider theme={SaltTheme}>
            <Home />
          </ThemeProvider>
        </ScrollProvider>
      </WindowDimensionsProvider>
    </LocaleProvider>
  );
};

export default App;
