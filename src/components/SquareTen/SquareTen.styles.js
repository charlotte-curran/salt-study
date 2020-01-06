import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.dark};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  padding: 5.3vh;
  text-align: center;
  height: 48.5vh;

  @media (min-width: 1000px) {
    height: 100%;
  }

  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    height: 100vh;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 37vh;

  @media (min-width: 1000px) {
    min-height: 280px;
    max-width: 53vw;
    margin-top: -18vh;
    justify-content: space-evenly;
  }

  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    height: 80vh;
  }
`;

export const Header = styled.div`
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 36px;
  margin-bottom: 3vh;

  @media (min-width: 1000px) and (max-width: 1150px) {
    font-size: 48px;
    max-width: 200px;
    position: relative;
    top: 45px;
    left: -37%;
    text-align: left;
    display: block;
  }

  @media (min-width: 1151px) {
    font-size: 48px;
    max-width: 200px;
    position: relative;
    top: 45px;
    left: -32%;
    text-align: left;
    display: block;
  }
`;

export const AddressWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.address};
  text-decoration: none;
  font-size: 13px;

  @media (min-width: 1000px) {
    font-size: 14px;
  }
`;

export const AddressLine = styled.span``;

export const Contact = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 17px;
`;

export const Footer = styled.div`
  color: ${({ theme }) => theme.color.blue};
  font-size: 13px;
`;
