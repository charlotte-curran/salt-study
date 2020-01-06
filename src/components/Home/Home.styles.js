import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* z-index: 5; */

  @media (min-width: 1000px) {
    flex-direction: row;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    flex-direction: column;
  }
`;

export const WrapperReverse = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row-reverse;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    display: flex;
    flex-direction: column;
  }
`;
