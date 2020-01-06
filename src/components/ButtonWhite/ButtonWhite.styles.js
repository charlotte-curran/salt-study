import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
  box-shadow: ${({ theme }) => `0px 1px 4px ${theme.color.shadow}`};
  transition: all 300ms ease;
  font-family: ${({ theme }) => theme.fonts.raleway};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  padding-left: 15px;
  padding-right: 15px;
  border: ${({ theme }) => `outset 2px ${theme.color.white}`};
  height: 35px;
  letter-spacing: 3px;

  :hover {
    box-shadow: ${({ theme, isFooter }) =>
      !isFooter
        ? `0px 1px 10px ${theme.color.shadow}`
        : `0px 1px 10px ${theme.color.white}`};
  }

  @media (min-width: 1000px) {
    font-size: 15px;
    height: 42px;
    padding-left: 28px;
    padding-right: 28px;
  }
`;
