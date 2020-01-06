import React from "react";
import { create } from "react-test-renderer";
import SquareSix from "./SquareSix";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";

describe("SquareSix", () => {
  test("matches the snapshot", () => {
    const squareSix = create(
      <ThemeProvider theme={SaltTheme}>
        <SquareSix content={saltStudyText[6]} />
      </ThemeProvider>
    );
    expect(squareSix.toJSON()).toMatchSnapshot();
  });
});
