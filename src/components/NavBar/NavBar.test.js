import React from "react";
import { create } from "react-test-renderer";
import NavBar from "./NavBar";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import ScrollProvider from "../../Context/scrollContext";
import LocaleProvider from "../../Context/localeContext";

describe("NavBar", () => {
  test("matches the snapshot", () => {
    const navBar = create(
      <LocaleProvider>
        <ScrollProvider>
          <ThemeProvider theme={SaltTheme}>
            <NavBar isVisibleModal={false} />
          </ThemeProvider>
        </ScrollProvider>
      </LocaleProvider>
    );
    expect(navBar.toJSON()).toMatchSnapshot();
  });
});
