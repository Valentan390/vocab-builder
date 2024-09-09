import styled from "styled-components";

export const StyledAddWordModalWrapper = styled.div`
  width: 343px;
  padding: 48px 16px;
  border-radius: 15px;
  background: var(--greyGreen);
  position: relative;

  @media screen and (min-width: 768px) {
    width: 628px;
    border-radius: 30px;
    padding: 48px 64px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModalAddWord = styled.h3`
  color: var(--white);
  font-size: 24px;
  font-weight: var(--semiBold);
  line-height: 1.16;
  letter-spacing: -0.48px;
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

interface IDescription {
  $format: boolean;
}

export const StyledAddWordModalDescription = styled.p<IDescription>`
  color: var(--white);
  font-size: ${({ $format }) => ($format ? "10px" : "16px")};
  font-weight: var(--regular);
  line-height: ${({ $format }) => ($format ? "1.2" : "1.5")};
  margin-bottom: ${({ $format }) => ($format ? "none" : "16px")};

  @media screen and (min-width: 768px) {
    color: rgba(252, 252, 252, 0.8);

    font-size: ${({ $format }) => ($format ? "12px" : "20px")};
    margin-bottom: ${({ $format }) => ($format ? "none" : "32px")};
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModal_form = styled.form`
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModalController_div = styled.div`
  width: 100%;
  display: flex;
  gap: 3px;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModalInputWrapper = styled.div`
  // margin-top: 32px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModalIconWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  // margin-bottom: 12.5px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModalСountry = styled.p`
  color: var(--white);
  font-size: 14px;
  font-weight: var(--medium);
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModalLabel = styled.label`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  // margin-bottom: 20.5px;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row-reverse;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
  }
`;

interface IInput {
  $error: boolean;
}

export const StyledAddWordModalInput = styled.input<IInput>`
  display: inline-flex;
  padding: 12px 24px;
  align-items: center;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid ${({ $error }) => ($error ? "var(--red)" : "#d1d5db")};
  color: var(--white);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.5;
  width: 100%;
  background-color: inherit;

  &:hover {
    outline: none;
    border-color: ${({ $error }) => ($error ? "var(--red)" : "var(--white)")};
  }

  &:focus {
    outline: none;
    border-color: ${({ $error }) => ($error ? "var(--red)" : "var(--white)")};
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: var(--white);
    -webkit-box-shadow: 0 0 0px 1000px inherit inset;
    background-color: inherit;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    padding: 16px 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModalButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModalButtonAdd = styled.button`
  width: calc((100% - 8px) / 2);
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: var(--white);
  color: var(--black);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--bold);
  line-height: 1.5;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--greyGreen);
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 10px) / 2);
    padding: 14px;
    font-size: 18px;
    line-height: 1.55;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModalButtonCancel = styled.button`
  width: calc((100% - 8px) / 2);
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid rgba(252, 252, 252, 0.4);
  color: var(--white);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--bold);
  line-height: 1.5;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--black);
    border: 1px solid rgba(252, 252, 252, 0.4);
    background: var(--white);
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 10px) / 2);
    padding: 14px;
    font-size: 18px;
    line-height: 1.55;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordModalError = styled.p`
  position: absolute;
  left: 0;
  bottom: -18px;
  font-size: 12px;
  // font-style: normal;
  font-weight: var(--regular);
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: var(--red);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
