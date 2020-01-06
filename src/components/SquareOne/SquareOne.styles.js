import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ background }) => background}),
    ${({ theme }) => theme.color.dark};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;

  @media (min-width: 1000px) {
    min-height: 600px;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    min-height: 600px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WordWrapper = styled.span`
  color: ${({ isBlue, theme }) =>
    isBlue ? theme.color.blue : theme.color.white};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 36px;
  text-align: center;

  @media (min-width: 1000px) {
    font-size: 48px;
  }
`;

export const PlusTopLeft = styled.img`
  height: 7.5px;
  position: absolute;
  top: 60px;
  left: 60px;

  @media (min-width: 1000px) {
    height: 9px;
    width: 9px;
    top: 75px;
    left: 75px;
  }
`;
export const PlusTopRight = styled.img`
  height: 7.5px;
  position: absolute;
  top: 60px;
  right: 60px;

  @media (min-width: 1000px) {
    height: 9px;
    width: 9px;
    top: 75px;
    right: 75px;
  }
`;
export const PlusBottomLeft = styled.img`
  height: 7.5px;
  position: absolute;
  bottom: 60px;
  left: 60px;

  @media (min-width: 1000px) {
    height: 9px;
    width: 9px;
    bottom: 75px;
    left: 75px;
  }
`;
export const PlusBottomRight = styled.img`
  height: 7.5px;
  position: absolute;
  bottom: 60px;
  right: 60px;

  @media (min-width: 1000px) {
    height: 9px;
    width: 9px;
    bottom: 75px;
    right: 75px;
  }
`;

export const StickyButton = styled.button`
  position: absolute;
  bottom: 3%;
  right: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  height: 120px;
  width: 120px;
  transform: rotate(15deg);
  z-index: 5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  font-weight: 800;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;

  @media (min-width: 1000px) {
    position: fixed;
    :hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
    }
  }
`;
