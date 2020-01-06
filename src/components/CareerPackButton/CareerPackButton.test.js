import React from "react";
import { create } from "react-test-renderer";
import CareerPackButton from "./CareerPackButton";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";

describe("CareerPackButton", () => {
  test("matches the snapshot", () => {
    const careerPackButton = create(
      <ThemeProvider theme={SaltTheme}>
        <CareerPackButton careerPack={saltStudyText[12]} />
      </ThemeProvider>
    );
    expect(careerPackButton.toJSON()).toMatchSnapshot();
  });
});
