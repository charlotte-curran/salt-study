import React from "react";
import { create } from "react-test-renderer";
import SquareFour from "./SquareFour";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";

describe("SquareFour", () => {
  test("matches the snapshot", () => {
    const squareFour = create(
      <ThemeProvider theme={SaltTheme}>
        <SquareFour content={saltStudyText[4]} />
      </ThemeProvider>
    );
    expect(squareFour.toJSON()).toMatchSnapshot();
  });
  
});
