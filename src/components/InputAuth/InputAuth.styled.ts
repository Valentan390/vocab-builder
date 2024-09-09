import styled from "styled-components";

export const StyledInputAuthLabel = styled.label`
  width: 100%;
  position: relative;
`;

interface IStyledInputAuthInput {
  $error: boolean;
  $isValid: boolean;
}

export const StyledInputAuthInput = styled.input<IStyledInputAuthInput>`
  display: flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 15px;
  border: 1px solid ${({ $error, $isValid }) =>
    $error
      ? "var(--red)"
      : $isValid
      ? "var(--green)"
      : "rgba(18, 20, 23, 0.1)"};
  width: 100%;
  color: var(--black);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--regular);
  line-height: 1.5;

  &::placeholder {
    color: var(--black);
    font-family: var(--font-family);
    font-size: 16px;
    font-style: normal;
    font-weight: var(--regular);
    line-height: 1.5;
  }

  &:hover {
    outline: none;
    border-color: ${(props) =>
      props.$error ? "var(--red)" : "var(--greyGreen)"};
  }

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.$error ? "var(--red)" : "var(--greyGreen)"};
  
`;

interface IErrorAndSuccess {
  $isValid: boolean;
}

export const StyledInputAuthErrorAndSuccess = styled.p<IErrorAndSuccess>`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: -18px;
  color: ${({ $isValid }) => ($isValid ? "var(--green)" : "var(--red)")};
  font-feature-settings: "clig" off, "liga" off;
  // font-family: "MacPaw Fixel Display";
  font-size: 12px;
  // font-style: normal;
  font-weight: var(--regular);
  line-height: 1.5;
  letter-spacing: 0.12px;
`;
