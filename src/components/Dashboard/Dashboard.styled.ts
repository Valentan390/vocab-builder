import styled from "styled-components";

export const StyledDasnboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //   gap: 8px;
  justify-content: start;
  align-items: start;
  width: 100;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledDasnboard_div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    flex-direction: row;
    align-items: center;
    width: max-content;
  }

  @media screen and (min-width: 1440px) {
  }
`;
