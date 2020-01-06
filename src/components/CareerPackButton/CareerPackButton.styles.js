import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.div``;

export const DropDownItem = styled.button`
  font-family: ${({ theme }) => theme.fonts.raleway};
  height: 40px;
  border-bottom: solid 1px ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.dark};
  font-size: 17px;
  border: solid 1px ${({ theme }) => theme.color.dark};

  :hover {
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.dark};
    border: solid 1px ${({ theme }) => theme.color.white};
  }
`;

export const CareerPackIframe = styled.iframe`
  margin: 0;
  width: 100vw;
  height: 28vh;
  overflow-y: hidden;
  overflow-x: hidden;
  border: none;
  background: ${({ theme }) => theme.color.white};
  padding-top: 13px;
  background: ${({ theme }) => theme.color.dark};
  position: absolute;
  left: ${({ isFooter }) => (!isFooter ? "0" : "40%")};
  top: ${({ offsetTop, isFooter }) =>
    !isFooter ? `${offsetTop}px` : `${offsetTop}px`};
  border: 1px solid ${({ theme }) => theme.color.dark};
  border: ${({ isFooter, theme }) =>
    isFooter ? `solid 1px ${theme.color.white}` : null};
    
  @media (min-width: 1000px) {
    width: 370px;
    height: 147px;
    left: ${({ isFooter }) => (!isFooter ? "26%" : "40%")};
    top: ${({ offsetTop, isFooter }) =>
      !isFooter ? `${offsetTop - 26}px` : `${offsetTop - 26}px`};
  }
`;

export const DropDownWrapper = animated(styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? `${width}px` : null)};
  background: ${({ theme }) => theme.color.white};
  position: absolute;
`);
