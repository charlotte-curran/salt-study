import React from "react";
import { create } from "react-test-renderer";
import SquareSeven from "./SquareSeven";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";

describe("SquareSeven", () => {
  test("matches the snapshot", () => {
    const squareSeven = create(
      <ThemeProvider theme={SaltTheme}>
        <SquareSeven content={saltStudyText[7]} />
      </ThemeProvider>
    );
    expect(squareSeven.toJSON()).toMatchSnapshot();
  });
});
