import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 480px;
  background: ${({ theme }) => theme.color.blue};
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: 380px 380px;
  background-position: 90% 50%;
  display: flex;
  align-items: center;
  z-index: 0;
  @media (min-width: 1000px) {
    width: 197vw;
    height: 75vh;
  }
`;

export const Header = styled.div`
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  color: ${({ theme }) => theme.color.white};
  font-size: 22px;
  padding: 0 0 10px 15px;

  @media (min-width: 1000px) {
    font-size: 24px;
  }
`;

export const Main = styled.span`
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  color: ${({ theme }) => theme.color.white};
  font-size: 36px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0 0 0px 15px;

  @media (min-width: 1000px) {
    font-size: 48px;
  }
`;

export const Main2 = styled.div`
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  color: ${({ theme }) => theme.color.white};
  font-size: 22px;
  padding: 15px 0 10px 15px;

  @media (min-width: 1000px) {
    font-size: 24px;
  }
`;

export const Footer = styled.div`
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  color: ${({ theme }) => theme.color.white};
  font-size: 17px;
  padding: 0 0 10px 15px;
`;

export const EpicenterLogo = styled.img`
  position: relative;
  height: 65%;
  right: 5%;

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    height: 36vh;
    top: 4%;
    right: 51%;
  }
`;

export const TextWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1000px) {
    justify-content: space-between;
    width: 48%;
    margin-left: 8%;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    width: 67vw;
    margin-top: 10vh;
  }
`;
