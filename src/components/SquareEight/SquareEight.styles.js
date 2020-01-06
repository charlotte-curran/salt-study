import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.color.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;

  @media (min-width: 1000px) {
    width: 58.33vw;
    height: 100vh;
    padding-top: 7.2%;
    min-height: 600px;
  }

  @media (max-height: 620px) {
    padding-top: 5px;
    padding-bottom: 0;
  }

  /* ipad portrait */
  @media (width: 768px) and (height: 1024px) {
    padding-top: 10vh;
    padding-bottom: 10vh;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    width: 100vw;
    height: 60vh;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    min-height: 600px;
  }
`;

export const Header = styled.div`
  font-size: 38px;
  text-transform: uppercase;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  color: ${({ theme }) => theme.color.white};

  @media (min-width: 1000px) {
    font-size: 48px;
    margin-bottom: 5.7%;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    font-size: 48px;
  }
`;
