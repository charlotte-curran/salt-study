import React from "react";
import { create } from "react-test-renderer";
import SquareFive from "./SquareFive";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";

describe("SquareFive", () => {
  test("matches the snapshot", () => {
    const squareFive = create(
      <ThemeProvider theme={SaltTheme}>
        <SquareFive content={saltStudyText[5]} />
      </ThemeProvider>
    );
    expect(squareFive.toJSON()).toMatchSnapshot();
  });
});
