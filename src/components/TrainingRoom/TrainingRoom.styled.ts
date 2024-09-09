import styled from "styled-components";

export const StyledTrainingRoom = styled.form`
  width: 100%;
  display: flex;
  gap: 116px;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledTrainingRoom_div = styled.div`
  display: flex;
  // gap: 8px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 18px;
    border-radius: 15px;
    background: #fff;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const StyledTrainingRoom_Label = styled.label`
  width: 100%;
  position: relative;
`;

interface IInput {
  $borderBottom: boolean;
}

export const StyledTrainingRoom_Input = styled.input<IInput>`
  width: 100%;
  display: flex;
  padding: 22px 22px 149px 22px;
  align-items: center;
  gap: 10px;
  border-radius: ${({ $borderBottom }) =>
    $borderBottom ? "8px 8px 0px 0px" : "0px 0px 8px 8px"};
  border: none;
  border-bottom: ${({ $borderBottom }) =>
    $borderBottom ? "1px solid #dbdbdb" : null};
  background: var(--white);
  color: var(--black);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.5;
  outline: none;
  box-shadow: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::placeholder {
    color: var(--black);
    font-family: var(--font-family);
    font-size: 16px;
    font-style: normal;
    font-weight: var(--medium);
    line-height: 1.5;
  }

  @media screen and (min-width: 768px) {
    padding: 22px 220px 230px 22px;
    font-size: 20px;

    &::placeholder {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    border-bottom: none;
    border-radius: ${({ $borderBottom }) =>
      $borderBottom ? "8px 0px 0px 0px" : "0px 8px 8px 0px"};
    border-right: ${({ $borderBottom }) =>
      $borderBottom ? "1px solid #dbdbdb" : null};
  }
`;

interface Container {
  $button: boolean;
}

export const StyledTrainingRoomContainer = styled.div<Container>`
  display: flex;
  gap: 8px;
  justify-content: ${({ $button }) => ($button ? "start" : null)};
  align-items: center;
  flex-direction: ${({ $button }) => ($button ? "column" : null)};
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 10px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledTrainingRoomNext_Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: absolute;
  left: 22px;
  bottom: 19px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.5;
`;

export const StyledTrainingRoom_p = styled.p`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  font-size: 14px;
  font-weight: var(--medium);
  line-height: normal;
  position: absolute;
  right: 22px;
  bottom: 18px;

  @media screen and (min-width: 768px) {
    top: 22px;
    bottom: auto;
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
  }
`;

interface IButton {
  $buttonSave: boolean;
}

export const StyledTrainingRoom_Button = styled.button<IButton>`
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${({ $buttonSave }) =>
    $buttonSave ? "var(--greyGreen)" : "inherit"};
  color: ${({ $buttonSave }) =>
    $buttonSave ? "var(--white)" : "rgba(18, 20, 23, 0.50)"};
  font-family: var(font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--bold);
  line-height: 1.5;
  transition: var(--transition);

  &:hover,
  &:focus {
    background: ${({ $buttonSave }) =>
      $buttonSave ? "var(--greenGray)" : "var(--greenGray)"};
    color: ${({ $buttonSave }) =>
      $buttonSave ? "var(--black)" : "var(--white)"};
  }

  @media screen and (min-width: 768px) {
    width: 203px;
    padding: 14px;
    border: ${({ $buttonSave }) =>
      $buttonSave ? null : "1px solid var(--greyGreen)"};
    color: ${({ $buttonSave }) =>
      $buttonSave ? "var(--white)" : "var(--greyGreen)"};
    font-size: 18px;
    line-height: 1.55;
  }

  @media screen and (min-width: 1440px) {
  }
`;
