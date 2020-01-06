import React from "react";
import { create } from "react-test-renderer";
import SquareEight from "./SquareEight";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";
import WindowDimensionsProvider from "../../Context/dimensionsContext";

describe("SquareEight", () => {
  test("matches the snapshot", () => {
    const squareEight = create(
      <WindowDimensionsProvider>
        <ThemeProvider theme={SaltTheme}>
          <SquareEight content={saltStudyText[8]} />
        </ThemeProvider>
      </WindowDimensionsProvider>
    );
    expect(squareEight.toJSON()).toMatchSnapshot();
  });
});
