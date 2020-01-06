import React from "react";
import {
  Wrapper,
  Header,
  AddressLine,
  AddressWrapper,
  Contact,
  Footer,
  ContentWrapper
} from "./SquareTen.styles";
import CareerPackButton from "../CareerPackButton";

const SquareTen = props => {
  const { content, careerPack, isVisibleModal, setIsVisibleModal } = props;
  return (
    <Wrapper>
      <Header>{content.header}</Header>
      <ContentWrapper>
        <AddressWrapper target="_blank" href={content.addressLink}>
          {content.address.map((value, i) => {
            return <AddressLine key={`AddressLine${i}`}>{value}</AddressLine>;
          })}
        </AddressWrapper>
        <CareerPackButton content={content.button} careerPack={careerPack} isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal} isFooter={true} />
        <Contact>{content.contact}</Contact>
        <Footer>{content.footer}</Footer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default SquareTen;
