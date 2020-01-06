import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (min-width: 750px) {
    position: relative;
    top: -139px;
  }
`;

export const TopHeader = styled.div`
  font-size: 36px;
  font-weight: 800;
  text-transform: uppercase;
  padding-bottom: 20px;

  @media (min-width: 1000px) {
    font-size: 48px;
  }
`;

export const Header = styled.div`
  font-size: 26px;
  font-weight: 800;
  text-transform: uppercase;
  padding-bottom: 20px;

  @media (min-width: 1000px) {
    font-size: 30px;
  }
`;

export const Text = styled.div`
  font-size: 17px;
`;

export const TextBodyWrapper = styled.div`
  margin-top: 3%;
  margin-bottom: 28%;

  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (min-width: 750px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 10%;
    margin-top: -107px;
    margin-bottom: 130px;
  }
`;

export const FirstTextGroupWrapper = styled.div`
  padding: 0 30px 20px 30px;

  @media (min-width: 750px) {
    flex: 1;
    padding: 0 5% 4% 6%;
    max-width: 44%;
  }

  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    width: 40%;
  }
`;

export const TextGroupWrapper = styled.div`
  padding: 0 30px 20px 30px;

  @media (min-width: 750px) {
    flex: 1;
    padding: 0 5% 4% 6%;
  }
`;

export const HireOnboardReskillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;

  @media (min-width: 750px) {
    flex: 1;
    padding-left: 5%;
    max-width: 33.1%;
  }

  @media only screen and (min-width: 480px) and (max-width: 896px) and (min-height: 320px) and (max-height: 414px) and (orientation: landscape) {
    width: 50%;
    padding-left: 5%;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 150px;
`;

export const ClickHere = styled.img`
  width: 120px;
  height: 72px;
  position: absolute;
  top: -52px;
  right: -13px;

  @media (min-width: 750px) {
    width: 220px;
    height: 131px;
    top: -106px;
    right: -120px;
  }
`;
