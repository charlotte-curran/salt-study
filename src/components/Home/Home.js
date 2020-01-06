import React, { useRef, useState } from "react";
import SquareOne from "../SquareOne";
import SquareTwo from "../SquareTwo";
import SquareThree from "../SquareThree";
import SquareFour from "../SquareFour";
import SquareFive from "../SquareFive";
import SquareSix from "../SquareSix";
import SquareSeven from "../SquareSeven";
import SquareEight from "../SquareEight";
import SquareNine from "../SquareNine";
import SquareTen from "../SquareTen";
import NavBar from "../NavBar";
import Splashpage from "../SplashPage";
import { Wrapper, WrapperReverse } from "./Home.styles";
import { useLocaleContext } from "../../Context/localeContext";

const Home = () => {
  const secondWrapperRef = useRef(null);
  const squareSixRef = useRef(null);
  const thirdWrapperRef = useRef(null);
  const refObj = {
    secondWrapperRef: secondWrapperRef,
    squareSixRef: squareSixRef,
    thirdWrapperRef: thirdWrapperRef
  };
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { locale, content } = useLocaleContext();

  return (
    <div>
      {locale !== 0 ? (
        <div>
          <NavBar
            content={content[11]}
            refObj={refObj}
            isVisibleModal={isVisibleModal}
          />
          <Wrapper>
            <SquareOne content={content[1]} isVisibleModal={isVisibleModal} />
            <SquareTwo
              content={content[2]}
              careerPack={content[12]}
              isVisibleModal={isVisibleModal}
              setIsVisibleModal={setIsVisibleModal}
            />
          </Wrapper>
          <WrapperReverse ref={secondWrapperRef}>
            <SquareThree content={content[3]} />
            <SquareFour content={content[4]} />
          </WrapperReverse>
          <Wrapper>
            <SquareFive content={content[5]} />
          </Wrapper>
          <Wrapper ref={squareSixRef}>
            <SquareSix content={content[6]} />
          </Wrapper>
          <Wrapper ref={thirdWrapperRef}>
            <SquareSeven content={content[7]} />
            <SquareEight content={content[8]} />
          </Wrapper>
          <SquareNine content={content[9]} />
          <SquareTen
            content={content[10]}
            careerPack={content[12]}
            isVisibleModal={isVisibleModal}
            setIsVisibleModal={setIsVisibleModal}
          />
        </div>
      ) : (
        <Splashpage />
      )}
    </div>
  );
};

export default Home;
