import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ background }) => background}),
    ${({ theme }) => theme.color.shadow};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;

  @media (min-width: 900px) and (max-width: 999px) {
    padding: 0 21vw;
  }

  @media (min-width: 1000px) {
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 6.5%;
    padding-bottom: 6.5%;
    height: 100%;
  }

  /* iphone 6/7/8 plus*/ /* iphone 5/se */
  @media (width: 414px) and (height: 736px),
    (height: 568px) and (width: 320px) {
    padding: 0 16px;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    min-height: 466px;
  }
`;

export const TextWrapper = styled.div`
  display: inline;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 0 17px;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;
  height: 150px;

  /* Apple iPhone XR 1792x828px at 326ppi Media Queries */
  @media only screen and (width: 414px) and (height: 896px) and (-webkit-device-pixel-ratio: 2) {
    flex-basis: 30%;
  }

  /* Apple iPhone XS Max 2688x1242px at 458ppi Media Queries */
  @media only screen and (width: 414px) and (height: 896px) and (-webkit-device-pixel-ratio: 3) {
    flex-basis: 25%;
  }

  /* targeting landscape oriented phones */
  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    height: auto;
  }

  @media (min-width: 500px) and (max-width: 899px) {
    flex-basis: 40%;
  }

  @media (max-width: 500px) {
    padding: 0 21px;
  }

  @media (min-width: 1000px) {
    font-size: 20px;
    padding: 0 30px;
    flex-basis: 25%;
  }

  /* iphone 5/se */
  @media (height: 568px) and (width: 320px) {
    padding: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  /* ipad portrait*/
  @media (width: 768px) and (height: 1024px) {
    padding: 0 60px;
    font-size: 20px;
    box-sizing: border-box;
  }
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;
