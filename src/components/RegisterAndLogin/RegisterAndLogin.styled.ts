import { Link } from "react-router-dom";
import styled from "styled-components";

interface RegisterAndLoginWrapper {
  $gap: boolean;
}

export const StyledRegisterAndLoginWrapper = styled.div<RegisterAndLoginWrapper>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => ($gap ? "43px" : "8px")};
  justify-content: start;
  align-items: center;
  width: 100%;
  // height: 93vh;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 106px;
    flex-direction: column-reverse;
    gap: ${({ $gap }) => ($gap ? "172px" : "98px")};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 80px;
    padding-top: 80px;
    padding-bottom: 64px;
    // width: 1440px;
  }
`;

export const StyledRegisterAndLoginContainerImg = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledRegisterAndLoginImg = styled.img`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledRegisterAndLoginWord = styled.p`
  color: rgba(18, 20, 23, 0.8);
  text-align: center;
  font-size: 14px;
  font-weight: var(--regular);
  line-height: normal;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 16px;
  }
`;

export const StyledRegisterAndLoginWrapperForm = styled.div`
  max-width: 375px;
  flex-shrink: 0;
  border-radius: 25px 25px 0px 0px;
  background: rgba(133, 170, 159, 0.1);
  padding: 32px 16px 57px 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 628px;
    padding: 48px 64px;
    border-radius: 30px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledRegisterAndLoginForm = styled.form`
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const StyledRegisterAndLoginTitle = styled.h3`
  font-size: 30px;
  font-weight: var(--semiBold);
  line-height: 1.06;
  letter-spacing: -0.6px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.8px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

interface Services {
  $marginBottom: boolean;
}

export const StyledRegisterAndLoginServices = styled.p<Services>`
  color: rgba(18, 20, 23, 0.8);
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.5;
  margin-bottom: ${({ $marginBottom }) => ($marginBottom ? "40px" : "16px")};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledRegisterAndLoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledRegisterAndLoginRegister = styled.button`
  display: inline-flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: var(--greyGreen);
  color: var(--white);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--bold);
  line-height: 1.5;
  width: 100%;
  margin-bottom: 16px;

  &:hover,
  &:focus {
    background: var(--greenGray);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.55;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledRegisterAndLoginLink = styled(Link)`
  color: rgba(18, 20, 23, 0.5);
  font-family: "MacPaw Fixel Display";
  font-size: 16px;
  font-style: normal;
  font-weight: var(--bold);
  line-height: 1.5;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  position: relative;
  transition: var(--transition);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(18, 20, 23, 0.5);
  }

  &:hover,
  &:focus {
    color: var(--black);
  }

  &:hover::before {
    background-color: var(--black);
    transition: var(--transition);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
