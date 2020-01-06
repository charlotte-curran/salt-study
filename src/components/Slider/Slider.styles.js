import styled from "styled-components";
import { animated } from "react-spring";

export const SliderUI = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  height: 86vh;

  @media (max-height: 620px) {
    height: auto;
  }

  /* iphone 6/7/8 plus*/
  @media (width: 414px) and (height: 736px) {
    height: 81vh;
  }

  /* iphone X */
  @media (width: 375px) and (height: 812px) {
    height: 77vh;
  }

  /* galaxy s8 */
  @media (width: 360px) and (height: 740px) {
    height: 80vh;
  }

  /* ipad portrait */
  @media (width: 768px) and (height: 1024px) {
    height: 65vh;
  }

  /* ipad pro landscape */
  @media (width: 1366px) and (height: 1024px) {
    height: 66vh;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    height: 45vh;
  }
`;

export const Employee = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  text-align: center;
  margin-left: ${({ width, isEven }) => (isEven ? `${width * 0.1}px` : "0px")};
  margin-right: ${({ width, isEven }) =>
    isEven
      ? `${width - (width / 2 > 250 ? width / 2 : 250) - width * 0.1}px`
      : `0px`};
  max-height: 500px;

  @media (min-width: 600px) {
    margin-left: ${({ margin }) => `${margin}px`};
    margin-right: ${({ margin }) => `${margin}px`};
  }
`;

export const Headshot = styled.div`
  background: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 0 auto 10% auto;
  filter: grayscale(50%);
`;

export const EmployeeName = styled.div`
  font-size: 17px;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-style: italic;
  font-size: 13px;
  margin-bottom: 10%;

  @media (min-width: 1000px) {
    font-size: 14px;
  }
`;

export const Text = styled.div`
  font-size: 13px;
  width: ${({ width }) => (width * 2 >= 125 ? `${width * 2}px` : "125px")};

  @media (min-width: 1000px) {
    font-size: 14px;
  }
`;

export const ButtonWrapperInner = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapperOuter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2vh;
  margin-top: 2vh;

  @media (max-height: 620px) {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  background: ${({ isBlue, theme }) =>
    isBlue ? theme.color.blue : theme.color.white};
  width: 6px;
  height: 6px;
  padding: 0;

  @media (min-width: 1000px) {
    width: 6px;
  }
`;

export const Arrow = styled.svg`
  position: relative;
  top: 30vh;
  left: ${({ pointLeft, right }) => (pointLeft ? "2vw" : `${right * 0.911}px`)};
  z-index: 5;
  width: 18px;
  height: 18px;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: square;
  transform: ${({ pointLeft }) => (pointLeft ? "rotate(180deg)" : null)};
  cursor: pointer;

  :hover {
    stroke: ${({ theme }) => theme.color.blue};
  }

  @media (min-width: 1000px) {
    left: ${({ pointLeft, right }) =>
      pointLeft ? "2vw" : `${right * 0.542}px`};
  }

  @media (max-width: 600px) {
    display: none;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    top: 15vh;
    left: ${({ pointLeft, right }) =>
      pointLeft ? "2vw" : `${right * 0.94}px`};
  }
`;

export const InnerWrapper = animated(styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 4vh;
  #employee0 {
    margin-left: 5%;
  }

  @media (min-width: 600px) {
    #employee0 {
      margin-left: ${({ employeeMargin }) => `${employeeMargin}px`};
    }
  }

  @media (min-width: 1000px) {
    margin-bottom: 4.6%;
  }

  @media (max-height: 620px) {
    margin-bottom: 0;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    height: 36vh;
  }
`);
