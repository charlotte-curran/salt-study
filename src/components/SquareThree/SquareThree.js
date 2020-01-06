import React from "react";
import Fade from "react-reveal/Fade";
import { Wrapper, Video, Text, FlexWrapper } from "./SquareThree.styles";
import backgroundImage from "../../images/saltimg1-min.png";

const SquareThree = props => {
  return (
    <Wrapper background={backgroundImage}>
      <Video
        src={props.content.video}
        frameBorder="0"
        allowFullScreen
        title="salt video"
      />
      <Fade bottom>
        <FlexWrapper>
          <Text>{props.content.main}</Text>
        </FlexWrapper>
      </Fade>
    </Wrapper>
  );
};

export default SquareThree;
