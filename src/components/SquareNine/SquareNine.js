import React from "react";
import Fade from "react-reveal/Fade";
import {
  Wrapper,
  HeaderImg,
  TopHeader,
  Header,
  Text,
  TextGroupWrapper,
  TextBodyWrapper,
  ClickHere,
  ButtonWrapper,
  HireOnboardReskillWrapper,
  FirstTextGroupWrapper
} from "./SquareNine.styles";
import ButtonWhite from "../ButtonWhite";
import WeHelp from "../../images/wehelp.svg";
import ClickHereText from "../../images/softwarearrow.svg";

const SquareNine = props => {
  const { content } = props;
  return (
    <Wrapper>
      <HeaderImg src={WeHelp} />
      <Fade bottom>
        <TextBodyWrapper>
          <FirstTextGroupWrapper>
            <TopHeader>{content.text[0].header}</TopHeader>
            <Text>{content.text[0].footer}</Text>
          </FirstTextGroupWrapper>
          <HireOnboardReskillWrapper>
            {content.text.map((value, i) => {
              const textGroup =
                i === 0 ? null : (
                  <TextGroupWrapper key={`TextGroupWrapper${i}`}>
                    <Header key={`Header${i}`}>{value.header}</Header>
                    <Text key={`Text${i}`}>{value.footer}</Text>
                  </TextGroupWrapper>
                );
              return textGroup;
            })}
          </HireOnboardReskillWrapper>
        </TextBodyWrapper>
      </Fade>
      <ButtonWrapper>
        <ClickHere src={ClickHereText} />
        <ButtonWhite
          onClick={() => {
            window.open("https://salt.dev", "_blank");
          }}
        >
          {content.button}
        </ButtonWhite>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SquareNine;
