import React from "react";
import { create } from "react-test-renderer";
import SquareTwo from "./SquareTwo";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";


describe("SquareTwo", () => {
  test("matches the snapshot", () => {
    const squareTwo = create(
      <ThemeProvider theme={SaltTheme}>
        <SquareTwo content={saltStudyText[2]} careerPack={saltStudyText[12]} />
      </ThemeProvider>
    );
    expect(squareTwo.toJSON()).toMatchSnapshot();
  });
});
