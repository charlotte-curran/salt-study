import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    width: auto;
    height: auto;
  }

  @media only screen and (max-height: 414px) {
    width: 100%;
    height: 100%;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: ${({ theme }) => theme.color.dark};
  width: 70%;
  height: 70%;

  @media (max-width: 425px) {
    height: 100%;
    width: 100%;
  }

  /* galaxy s8 */
  @media (width: 740px) and (height: 360px) {
    height: 95%;
    width: 92%;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    height: 100%;
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    padding-top: 30px;
  }

  @media (max-width: 320px) {
    padding-top: 0px;
  }
`;

export const TextWrapper = styled.span`
  color: ${({ isBlue, theme }) =>
    isBlue ? theme.color.blue : theme.color.white};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 36px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 30px;
  }

  /* galaxy s8 */
  @media (width: 740px) and (height: 360px) {
    font-size: 25px;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    font-size: 24px;
  }
`;

export const Main = styled.p`
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  font-size: 17px;
  width: 100%;

  /* galaxy s8  Landscape */
  @media (width: 740px) and (height: 360px) {
    font-size: 15px;
    width: 100%;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    font-size: 15px;
  }
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

export const Main2 = styled.p`
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  font-size: 17px;
  margin: 0px;

  /* galaxy s8 */
  @media (width: 740px) and (height: 360px) {
    font-size: 15px;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    font-size: 15px;
  }
`;

export const CareerPackIframe = styled.iframe`
  overflow-y: hidden;
  overflow-x: hidden;
  border: none;
  padding-top: 30px;
  height: 200px;
  background: ${({ theme }) => theme.color.dark};

  @media (max-width: 1000px) {
    min-height: 22vh;
  }

  /* galaxy s8 */
  @media (width: 740px) and (height: 360px) {
    padding-top: 20px;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    padding-top: 10px;
  }
`;

export const X = styled.button`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  font-size: 25px;
  z-index: 10;
  padding: 1px 8px 1px 6px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentInnerWrapper = styled.div`
  padding: 0 20px;
  background: ${({ theme }) => theme.color.dark};
`;
