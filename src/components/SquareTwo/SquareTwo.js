import React from "react";
import Fade from "react-reveal/Fade";
import plusImage from "../../images/saltplus.svg";
import CareerPackButton from "../CareerPackButton";
import { useLocaleContext } from "../../Context/localeContext";
import {
  Wrapper,
  Header,
  TextWrapper,
  Main,
  Footer,
  ContentWrapper
} from "./SquareTwo.styles";
import { PlusBottomLeft, PlusTopRight } from "../SquareOne/SquareOne.styles";

const SquareTwo = props => {
  const { content, careerPack, isVisibleModal, setIsVisibleModal } = props;
  const { locale } = useLocaleContext();
  return (
    <Wrapper>
      <PlusTopRight src={plusImage} /> <PlusBottomLeft src={plusImage} />
      <ContentWrapper>
        <TextWrapper>
          {content.header.map((value, i) => {
            return (
              <Header isOslo={locale === 3 ? true : false} key={i}>
                {value}
              </Header>
            );
          })}
        </TextWrapper>
        <Main>{content.main}</Main>
        <Footer>{content.footer}</Footer>
        {/* <Fade bottom> */}
          <CareerPackButton
            content={content.button}
            careerPack={careerPack}
            isVisibleModal={isVisibleModal}
            setIsVisibleModal={setIsVisibleModal}
          />
        {/* </Fade> */}
      </ContentWrapper>
    </Wrapper>
  );
};

export default SquareTwo;
