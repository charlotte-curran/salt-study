import React from "react";
import {
  Wrapper,
  TextWrapper,
  WordWrapper,
  PlusBottomLeft,
  PlusBottomRight,
  PlusTopLeft,
  PlusTopRight,
  StickyButton
} from "./SquareOne.styles";
import backgroundImage from "../../images/x-clusion-min.png";
import plusImage from "../../images/saltplus.svg";

const SquareOne = props => {
  const blueIndexes = [2, 4, 6, 7];
  const { content, isVisibleModal } = props;
  return (
    <Wrapper background={backgroundImage}>
      <PlusTopLeft src={plusImage} />
      <PlusBottomLeft src={plusImage} />
      <PlusTopRight src={plusImage} />
      <PlusBottomRight src={plusImage} />
      <TextWrapper>
        {content.main.map((value, i) => {
          return (
            <WordWrapper
              key={i}
              isBlue={blueIndexes.indexOf(i) !== -1 ? true : false}
            >
              {value}
            </WordWrapper>
          );
        })}
      </TextWrapper>
      {!isVisibleModal ? (
        <StickyButton
          onClick={() => {
            window.open("https://salt.dev", "_blank");
          }}
        >
          for companies!
        </StickyButton>
      ) : null}
    </Wrapper>
  );
};

export default SquareOne;
