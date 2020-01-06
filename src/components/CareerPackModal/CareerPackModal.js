import React from "react";
import {
  Modal,
  Form,
  TitleWrapper,
  TextWrapper,
  Main,
  BlueText,
  Main2,
  CareerPackIframe,
  X,
  ContentWrapper,
  ContentInnerWrapper
} from "./CareerPackModal.styles";

const CareerPackModal = props => {
  const { careerPack, isStockholm, closeIframe, isModal } = props;

  return (
    <Modal
      onClick={() => {
        closeIframe();
      }}
    >
      <Form
        onClick={event => {
          event.stopPropagation();
        }}
      >
        <X
          onClick={() => {
            closeIframe();
          }}
        >
          x
        </X>
        <ContentWrapper>
          <ContentInnerWrapper>
            <TitleWrapper>
              {careerPack.header.map((value, i) => {
                return (
                  <TextWrapper key={i} isBlue={i === 2 ? true : false}>
                    {value}
                  </TextWrapper>
                );
              })}
            </TitleWrapper>
            <Main>{careerPack.main}</Main>
            <Main2>
              {careerPack.main2[0]}
              <BlueText>{careerPack.main2[1]}</BlueText>
              {careerPack.main2[2]}
            </Main2>
          </ContentInnerWrapper>
          {isModal ? (
            isStockholm ? (
              <CareerPackIframe
                scrolling="no"
                seamless="seamless"
                id="salesmanagoIframe"
                src="https://www.salesmanago.pl/cf/d4y8zc1gdgihvn9i/Stockholm.htm"
              />
            ) : (
              <CareerPackIframe
                scrolling="no"
                seamless="seamless"
                id="salesmanagoIframe"
                src="https://www.salesmanago.pl/cf/d4y8zc1gdgihvn9i/Amsterdam.htm"
              />
            )
          ) : null}
        </ContentWrapper>
      </Form>
    </Modal>
  );
};

export default CareerPackModal;
