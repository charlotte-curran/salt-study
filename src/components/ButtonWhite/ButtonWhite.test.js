import React from "react";
import { create } from "react-test-renderer";
import ButtonWhite from "./ButtonWhite";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";

describe("ButtonWhite", () => {
  test("matches the snapshot", () => {
    const buttonWhite = create(
      <ThemeProvider theme={SaltTheme}>
        <ButtonWhite isFooter={false} />
      </ThemeProvider>
    );
    expect(buttonWhite.toJSON()).toMatchSnapshot();
  });
});
