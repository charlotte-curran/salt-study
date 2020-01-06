import React from "react";
import { create } from "react-test-renderer";
import SquareThree from "./SquareThree";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";

describe("SquareThree", () => {
  test("matches the snapshot", () => {
    const squareThree = create(
      <ThemeProvider theme={SaltTheme}>
        <SquareThree content={saltStudyText[3]} />
      </ThemeProvider>
    );
    expect(squareThree.toJSON()).toMatchSnapshot();
  });
});
