import React from "react";
import { create } from "react-test-renderer";
import SquareTen from "./SquareTen";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";

describe("SquareTen", () => {
  test("matches the snapshot", () => {
    const squareTen = create(
      <ThemeProvider theme={SaltTheme}>
        <SquareTen content={saltStudyText[10]} careerPack={saltStudyText[12]} />
      </ThemeProvider>
    );
    expect(squareTen.toJSON()).toMatchSnapshot();
  });
});
