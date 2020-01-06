import React, { useState, useRef } from "react";
import ButtonWhite from "../ButtonWhite";
import { Wrapper } from "./CareerPackButton.styles";
import { useLocaleContext } from "../../Context/localeContext";
import CareerPackModal from "../CareerPackModal";

//currently oslo is using stockholm iframe - update when oslo iframe is built

const CareerPackButton = props => {
  const [isModal, setIsModal] = useState(false);
  const dropDownRef = useRef(null);
  const { content, careerPack, isFooter, setIsVisibleModal } = props;

  const { locale } = useLocaleContext();
  const closeIframe = () => {
    if (isModal) {
      setIsModal(false);
      setIsVisibleModal(false);
    }

    const scrollY = Math.abs(parseInt(document.body.style.top));
    document.body.style.cssText = `height: auto; overflow-y: visible; position: static`;
    window.scrollTo(0, scrollY);
  };

  return (
    <Wrapper ref={dropDownRef}>
      {isModal ? (
        <CareerPackModal
          careerPack={careerPack}
          isStockholm={locale === 1 || locale === 3 ? true : false}
          closeIframe={closeIframe}
          isModal={isModal}
        />
      ) : null}

      <ButtonWhite
        onClick={() => {
          const scrollY = window.scrollY;
          document.body.style.cssText = `
            top: -${scrollY}px;
            overflow-y: hidden;
            position: fixed;
          `;
          setIsModal(true);
          setIsVisibleModal(true);
        }}
      >
        {content}
      </ButtonWhite>
    </Wrapper>
  );
};

export default CareerPackButton;
