import React from "react";
import Fade from "react-reveal/Fade";
import {
  Wrapper,
  Header,
  Main,
  EpicenterLogo,
  Footer,
  TextWrapper,
  Main2
} from "./SquareFour.styles";
import epicenterLogo from "../../images/epicenter_transparent-min.png";

const SquareFour = props => {
  const { content } = props;
  return (
    <Wrapper background={epicenterLogo}>
      <TextWrapper>
        <Fade bottom cascade>
          <Header>{content.header}</Header>
          <Main>{content.main[0]}</Main>
          <Main>{content.main[1]}</Main>
          <Main2>{content.main2}</Main2>
          <Footer>{content.footer}</Footer>
        </Fade>
      </TextWrapper>
    </Wrapper>
  );
};

export default SquareFour;
