import React from "react";
import { create } from "react-test-renderer";
import SplashPage from "./SplashPage";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import LocaleProvider from "../../Context/localeContext";

describe("Home", () => {
  test("matches the snapshot", () => {
    const splashPage = create(
      <LocaleProvider>
        <ThemeProvider theme={SaltTheme}>
          <SplashPage />
        </ThemeProvider>
      </LocaleProvider>
    );
    expect(splashPage.toJSON()).toMatchSnapshot();
  });
});
