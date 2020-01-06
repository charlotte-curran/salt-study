import React from "react";
import Fade from "react-reveal/Fade";
import { useWindowDimensionsContext } from "../../Context/dimensionsContext";

import { Wrapper, Header } from "./SquareEight.styles";
import Slider from "../Slider";

const SquareEight = props => {
  const { content } = props;
  const { height } = useWindowDimensionsContext();
  return (
    <Wrapper>
      {height > 600 ? (
        <Fade bottom>
          <Header>{content.header}</Header>
        </Fade>
      ) : null}

      <Slider content={content.slider} />
    </Wrapper>
  );
};

export default SquareEight;
