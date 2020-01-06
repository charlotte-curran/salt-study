import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.blue};
  position: relative;

  @media (min-width: 1000px) {
    min-height: 600px;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    min-height: 600px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  height: 535px;

  @media (max-width: 1000px) and (min-width: 500px) {
    width: 355px;
  }

  @media (min-width: 1000px) {
    width: 70%;
  }
`;

export const Header = styled.div`
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  color: ${({ theme }) => theme.color.white};
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2;

  @media (min-width: 1000px), (width: 1024px) and (height: 1366px) {
    font-size: ${({ isOslo }) => (isOslo ? "44px" : "48px")};
  }

  @media (max-width: 500px) {
    font-size: ${({ isOslo }) => (isOslo ? "33px" : "36px")};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 46%;
  text-align: center;

  @media (min-width: 1000px), (width: 1024px) and (height: 1366px) {
    height: 58%;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    height: 41%;
  }
`;

export const Main = styled.div`
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  color: ${({ theme }) => theme.color.white};
  font-size: 22px;
  text-align: center;

  @media (min-width: 1000px) {
    font-size: 24px;
    width: 57%;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    font-size: 24px;
  }
`;

export const Footer = styled.div`
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  color: ${({ theme }) => theme.color.white};
  font-size: 17px;
  text-align: center;
  padding: 22px 0;
`;
