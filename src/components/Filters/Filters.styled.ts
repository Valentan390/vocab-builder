import styled from "styled-components";

export const StyledFiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 28px;
    width: max-content;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledFiltersLabel = styled.label`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 274px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledFiltersInput = styled.input`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  color: var(--black);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.5;
  width: 100%;

  &::placeholder {
    color: var(--black);
    font-family: var(--font-family);
    font-size: 16px;
    font-style: normal;
    font-weight: var(--medium);
    line-height: 1.5;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledFiltersRadioWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: start;
  width: max-content;
`;

export const StyledFiltersRadioLabel = styled.label`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  color: var(--black);
  text-align: center;
  font-family: var(--font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: var(--regular);
  line-height: normal;
`;

// export const StyledFilters = styled.``
// export const StyledFilters = styled.``
