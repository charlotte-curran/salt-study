import React from "react";
import { create } from "react-test-renderer";
import SquareOne from "./SquareOne";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";

describe("SquareOne", () => {
  test("matches the snapshot", () => {
    const squareOne = create(
      <ThemeProvider theme={SaltTheme}>
        <SquareOne content={saltStudyText[1]} isVisibleModal={false} />
      </ThemeProvider>
    );
    expect(squareOne.toJSON()).toMatchSnapshot();
  });
});
