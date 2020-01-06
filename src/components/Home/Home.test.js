import React from "react";
import { create } from "react-test-renderer";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import LocaleProvider from "../../Context/localeContext";

describe("Home", () => {
  test("matches the snapshot", () => {
    const home = create(
      <LocaleProvider>
        <ThemeProvider theme={SaltTheme}>
          <Home />
        </ThemeProvider>
      </LocaleProvider>
    );
    expect(home.toJSON()).toMatchSnapshot();
  });
});
