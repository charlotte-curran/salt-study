import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 1500px;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 114.6vh;
    min-height: 866px;
  }

  @media (max-width: 520px) {
    height: 1650px;
  }

  @media (max-width: 356px) {
    height: 1750px;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    height: 137vh;
  }
`;

export const VideoBG = styled.video`
  height: 1500px;
  width: 100vw;
  position: absolute;
  object-fit: cover;
  z-index: -1;

  @media (min-width: 1000px) {
    height: 114.6vh;
    min-height: 866px;
  }

  @media (max-width: 520px) {
    height: 1650px;
  }
  
  @media (max-width: 356px) {
    height: 1750px;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    height: 137vh;
  }
`;

export const CircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 75%;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    flex-direction: column;
  }
`;

export const Circle = styled.div`
  width: 300px;
  height: 300px;
  background: white;
  border-radius: 50%;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 1000px) {
    min-width: 370px;
    height: 370px;
  }
`;

export const CircleHeader = styled.div`
  color: ${({ theme }) => theme.color.blue};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;

  @media (min-width: 1000px) {
    font-size: 20px;
  }
`;

export const CircleFooter = styled.div`
  color: ${({ theme }) => theme.color.dark};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  font-size: 13px;

  @media (min-width: 1000px) {
    font-size: 14px;
  }
`;

export const Line = styled.hr`
  color: ${({ theme }) => theme.color.dark};
  width: 50%;
`;

export const CircleInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 70%;
  margin: 60px;
`;

export const HowItWorksWrapper = styled.div`
  @media (min-width: 1000px) {
    width: 75%;
  }

  @media (max-width: 520px) {
    padding: 0 8vw;
  }

  /* iphone 5/SE */
  @media (width: 320px) and (height: 568px) {
    padding: 0px 3vw;
  }

  /* iphone 6/7/8 plus*/
  @media (width: 414px) and (height: 736px) {
    padding: 0 10px;
  }
`;

export const Header = styled.div`
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.4));
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  font-weight: 800;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;

  @media (min-width: 1000px) {
    font-size: 48px;
  }
`;

export const BulletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.futuraPt};
  font-size: 13px;

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    margin: 0 18vw;
  }
`;

export const BulletWrapper = styled.div`
  display: flex;
  width: 80px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 1000px) {
    font-size: 14px;
  }
`;

export const BulletImg = styled.img`
  width: 40px;
  height: 40px;
  padding-bottom: 10px;
`;

export const BulletText = styled.div`
  text-shadow: 1px 1px ${({ theme }) => theme.color.dark};

  @media (min-width: 1000px) {
    width: 150%;
  }
  @media (min-width: 1400px) {
    width: 230%;
  }

  /* ipad pro portrait*/
  @media (width: 1024px) and (height: 1366px) {
    width: auto;
  }
`;
