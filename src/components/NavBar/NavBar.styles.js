import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 35px;
  background: ${({ theme }) => theme.color.navbar};
  position: fixed;
  z-index: 3;
  color: ${({ theme }) => theme.color.white};
  padding: 0 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;

  @media (min-width: 1000px) {
    height: 50px;
    padding: 0 40px;
    justify-content: space-between;
  }
`;

export const SaltLink = styled.a`
  font-size: 8px;
  font-family: ${({ theme }) => theme.fonts.raleway};
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  text-decoration: ${({ isCurrent }) => (isCurrent ? "underline" : null)};
  letter-spacing: 3px;
  text-align: center;
  white-space: nowrap;
`;

export const City = styled.a`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.raleway};
  color: ${({ theme }) => theme.color.blue};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  white-space: nowrap;
  font-weight: 600;
  cursor: pointer;

  @media (min-width: 1000px) {
    font-size: 12px;
  }
`;

export const SaltLabel = styled.span`
  font-size: 8px;
  font-family: ${({ theme }) => theme.fonts.raleway};
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const LinkWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60vw;
  }

  @media (min-width: 1300px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 46vw;
  }
`;

export const LogoLink = styled.a`
  /* @media (min-width: 1000px) {
    left: -19%;
    position: relative;
  }

  @media (min-width: 1300px) {
    left: -25%;
    position: relative;
  } */
`;

export const Logo = styled.img`
  width: 63px;
  height: 13px;

  @media (min-width: 1000px) {
    width: 72px;
    height: 15px;
  }
`;
