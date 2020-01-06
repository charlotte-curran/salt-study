import React from "react";
import { create } from "react-test-renderer";
import CareerPackModal from "./CareerPackModal";
import { ThemeProvider } from "styled-components";
import { SaltTheme } from "../../Theme/theme";
import { saltStudyText } from "../../TextContent/saltstudy";

describe("CareerPackModal", () => {
  test("matches the snapshot", () => {
    const careerPackModal = create(
      <ThemeProvider theme={SaltTheme}>
        <CareerPackModal careerPack={saltStudyText[12]} />
      </ThemeProvider>
    );
    expect(careerPackModal.toJSON()).toMatchSnapshot();
  });
});
