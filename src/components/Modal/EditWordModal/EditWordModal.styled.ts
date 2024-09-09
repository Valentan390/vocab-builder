import styled from "styled-components";

export const StyledEditWordModalWrapper = styled.div`
  width: 343px;
  padding: 48px 16px;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--greyGreen);
  position: relative;

  @media screen and (min-width: 768px) {
    width: 628px;
    border-radius: 30px;
    padding: 64px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledEditWordModalForm = styled.form`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledEditWordModalLabel = styled.label`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 32px;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 1440px) {
  }
`;

interface InputProps {
  $error?: boolean;
}

export const StyledEditWordModalInput = styled.input<InputProps>`
  width: 100%;
  display: inline-flex;
  padding: 12px 24px;
  align-items: center;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid #d1d5db;
  background: inherit;
  color: var(--white);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.5;

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

export const StyledEditWordModalIconContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  width: max-content;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledEditWordModal_p = styled.p`
  color: var(--white);
  font-family: "MacPaw Fixel Display";
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

export const StyledEditWordModalContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
    margin-top: 14px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledEditWordButtonSave = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  width: calc((100% - 8px) / 2);
  border-radius: 30px;
  background: var(--white);
  color: var(--black);
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
    padding: 14px;
    font-size: 18px;
    line-height: 1.55;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledEditWordButtonCancel = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  width: calc((100% - 8px) / 2);
  border-radius: 30px;
  border: 1px solid rgba(252, 252, 252, 0.4);
  color: var(--white);
  background: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: var(--bold);
  line-height: 1.5;
  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--white);
    color: var(--black);
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    font-size: 18px;
    line-height: 1.55;
  }

  @media screen and (min-width: 1440px) {
  }
`;
