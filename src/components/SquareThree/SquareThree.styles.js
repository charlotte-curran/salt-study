import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: url(${({ background }) => background}),
    ${({ theme }) => theme.color.shadow};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 0;
  @media (max-width: 1000px) {
    height: 65vh;
    min-height: 450px;
  }

  /* galaxy S5 */
  @media (width: 360px) and (height: 640px) {
    height: 80vh;
  }

  /* iphone 5/SE */
  @media (width: 320px) and (height: 568px) {
    height: 95vh;
  }

  /* iphone 6/7/8 */
  @media (width: 375px) and (height: 667px) {
    height: 75vh;
  }
`;

export const Video = styled.iframe`
  border: none;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.35);
  height: 315px;
  width: 90%;

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    height: 35vh;
  }
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  color: ${({ theme }) => theme.color.white};
  font-size: 22px;
  font-style: italic;
  text-align: center;
  width: 95%;
  justify-content: space-between;

  @media (min-width: 1000px) {
    font-size: 24px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
