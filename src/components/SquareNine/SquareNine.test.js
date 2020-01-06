import React from "react";
import { create } from "react-test-renderer";
import SquareNine from "./SquareNine";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";

describe("SquareNine", () => {
  test("matches the snapshot", () => {
    const squareNine = create(
      <ThemeProvider theme={SaltTheme}>
        <SquareNine content={saltStudyText[9]} />
      </ThemeProvider>
    );
    expect(squareNine.toJSON()).toMatchSnapshot();
  });
});
