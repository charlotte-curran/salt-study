import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.color.blue};

  @media (min-width: 1000px) {
    width: 42.66vw;
    height: 100vh;
    min-height: 600px;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    width: 100vw;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    min-height: 600px;
  }
`;

export const BlueWrapper = styled.div`
  height: 47vh;
  width: 75vw;
  margin-top: 10vh;
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1000px) {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 0vh 7.7vw 12vh;
  }

  /* ipad portrait*/
  @media (width: 768px) and (height: 1024px) {
    height: 30vh;
    margin-top: 15vh;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    height: 50vh;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    height: 60vh;
    margin-top: 20vh;
  }
`;

export const Header = styled.div`
  font-style: italic;
  font-size: 22px;

  @media (min-width: 1000px) {
    font-size: 24px;
  }

  /* ipad portrait*/ /*ipad pro portrait*/
  @media (width: 768px) and (height: 1024px),
    (width: 1024px) and (height: 1366px) {
    font-size: 24px;
  }
`;

export const Main = styled.div`
  font-weight: 800;
  font-size: 36px;
  text-transform: uppercase;

  @media (min-width: 1000px) {
    font-size: 48px;
  }

  /* ipad portrait*/ /*ipad pro portrait*/
  @media (width: 768px) and (height: 1024px),
    (width: 1024px) and (height: 1366px) {
    font-size: 48px;
  }
`;

export const Footer = styled.div`
  font-size: 17px;
`;

export const DiversityImg = styled.img`
  width: 100vw;
  height: 30vh;
  object-fit: cover;

  @media (min-width: 1000px) {
    height: 30%;
    width: 100%;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    min-height: 180px;
  }
`;
