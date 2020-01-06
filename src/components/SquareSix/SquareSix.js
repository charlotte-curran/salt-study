import React from "react";
import Fade from "react-reveal/Fade";
import {
  Wrapper,
  VideoBG,
  Circle,
  CircleWrapper,
  CircleFooter,
  CircleHeader,
  Line,
  CircleInnerWrapper,
  HowItWorksWrapper,
  Header,
  BulletsWrapper,
  BulletWrapper,
  BulletImg,
  BulletText
} from "./SquareSix.styles";
import Video from "../../images/bg-video.mp4";
import OneCircle from "../../images/1.png";
import TwoCircle from "../../images/2.png";
import ThreeCircle from "../../images/3.png";
import FourCircle from "../../images/4.png";
import FiveCircle from "../../images/5.png";

const SquareSix = props => {
  const bulletImgArray = [
    OneCircle,
    TwoCircle,
    ThreeCircle,
    FourCircle,
    FiveCircle
  ];
  const { content } = props;
  return (
    <Wrapper>
      <VideoBG
        loop
        muted="muted"
        autoPlay="autoplay"
        type="video/mp4"
        playsInline
      >
        <source src={Video} type="video/mp4" />
      </VideoBG>
      <CircleWrapper>
        {content.circles.map((value, i) => {
          return (
            <Fade delay={100 * i} key={`CircleFade${i}`}>
              <Circle key={`Circle${i}`}>
                <CircleInnerWrapper key={`CircleInnerWrapper${i}`}>
                  <CircleHeader key={`CircleHeader${i}`}>
                    {value.header}
                  </CircleHeader>
                  <Line key={`Line${i}`} />
                  <CircleFooter key={`CircleFooter${i}`}>
                    {value.footer}
                  </CircleFooter>
                </CircleInnerWrapper>
              </Circle>
            </Fade>
          );
        })}
      </CircleWrapper>
      <HowItWorksWrapper>
        <Fade bottom>
          <Header>{content.footer.header}</Header>
        </Fade>
        <BulletsWrapper>
          {content.footer.bullets.map((value, i) => {
            return (
              <Fade bottom delay={300 * i} key={`BulletFade${i}`}>
                <BulletWrapper key={`BulletWrapper${i}`}>
                  <BulletImg key={`BulletImg${i}`} src={bulletImgArray[i]} />
                  <BulletText key={`BulletText${i}`}>{value}</BulletText>
                </BulletWrapper>
              </Fade>
            );
          })}
        </BulletsWrapper>
      </HowItWorksWrapper>
    </Wrapper>
  );
};

export default SquareSix;
