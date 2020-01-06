import React from "react";
import Fade from "react-reveal/Fade";
import backgroundImage from "../../images/salt-midbg.png";
import { Wrapper, BlueText, TextWrapper } from "./SquareFive.styles";

const SquareFive = props => {
  const { content } = props;
  return (
    <Wrapper background={backgroundImage}>
      {content.map((value, i) => {
        return (
          <TextWrapper key={i}>
            <Fade bottom delay={150 * i}>
              <div key={i}>
                {value[0]}
                <BlueText key={i}>{value[1]}</BlueText>
                {value[2] ? value[2] : null}
              </div>
            </Fade>
          </TextWrapper>
        );
      })}
    </Wrapper>
  );
};

export default SquareFive;
