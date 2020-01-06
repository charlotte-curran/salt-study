import React from "react";
import { useLocaleContext } from "../../Context/localeContext";
import ButtonWhite from "../ButtonWhite";
import plusImage from "../../images/saltplus.svg";
import backgroundImage from "../../images/x-clusion-min.png";
import { saltStudyText } from "../../TextContent/saltstudy";
import {
  PlusBottomLeft,
  PlusTopLeft,
  PlusBottomRight,
  PlusTopRight
} from "../SquareOne/SquareOne.styles";
import {
  Wrapper,
  InnerWrapper,
  Header,
  Main,
  ButtonWrapper,
  BlueText
} from "./SplashPage.styles";

const SplashPage = () => {
  const { swapLocale } = useLocaleContext();
  return (
    <Wrapper background={backgroundImage}>
      <PlusTopLeft src={plusImage} />
      <PlusBottomLeft src={plusImage} />
      <PlusTopRight src={plusImage} />
      <PlusBottomRight src={plusImage} />
      <InnerWrapper>
        <Header>
          {saltStudyText.splashPage.header[0]}
          <BlueText>{saltStudyText.splashPage.header[1]}</BlueText>
          {saltStudyText.splashPage.header[2]}
        </Header>
        <Main>{saltStudyText.splashPage.main}</Main>
        <ButtonWrapper>
          <ButtonWhite
            isFooter={true}
            onClick={() => {
              swapLocale(1);
            }}
          >
            Stockholm
          </ButtonWhite>
          <ButtonWhite
            isFooter={true}
            onClick={() => {
              swapLocale(2);
            }}
          >
            Amsterdam
          </ButtonWhite>
          <ButtonWhite
            isFooter={true}
            onClick={() => {
              swapLocale(3);
            }}
          >
            Oslo
          </ButtonWhite>
        </ButtonWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SplashPage;
