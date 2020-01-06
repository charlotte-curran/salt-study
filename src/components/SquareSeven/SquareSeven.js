import React from "react";
import Fade from "react-reveal/Fade";
import {
  Wrapper,
  BlueWrapper,
  Header,
  Main,
  Footer,
  DiversityImg
} from "./SquareSeven.styles";
import DiversityBG from "../../images/diversity-bg.jpg";

const SquareSeven = props => {
  const { content } = props;
  return (
    <Wrapper>
      <BlueWrapper>
        <Fade bottom>
          <Header>{content.header}</Header>
          <Main>{content.main}</Main>
          <Footer>{content.footer}</Footer>
        </Fade>
      </BlueWrapper>
      <DiversityImg src={DiversityBG} />
    </Wrapper>
  );
};

export default SquareSeven;
