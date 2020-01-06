import React from "react";
import { create } from "react-test-renderer";
import Slider from "./Slider";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";
import WindowDimensionsProvider from "../../Context/dimensionsContext";

describe("Slider", () => {
  test("matches the snapshot", () => {
    const slider = create(
      <WindowDimensionsProvider>
        <ThemeProvider theme={SaltTheme}>
          <Slider content={saltStudyText[8].slider} />
        </ThemeProvider>
      </WindowDimensionsProvider>
    );
    expect(slider.toJSON()).toMatchSnapshot();
  });
});
