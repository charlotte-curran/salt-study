import styled from "styled-components";

export const Wrapper = styled.div`
  background: url(${({ background }) => background}),
    ${({ theme }) => theme.color.dark};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 80vw;
  height: 70vh;
  padding: 100px 0;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  text-align: center;

  @media (min-width: 350px) and (min-height: 700px) {
    padding: 200px 0;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    padding: 40px 0;
  }
`;

export const Header = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 36px;

  @media (min-width: 700px) {
    font-size: 48px;
  }
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

export const Main = styled.div`
  font-size: 26px;

  @media (min-width: 700px) {
    font-size: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;

  button {
    width: 100%;
  }
`;
