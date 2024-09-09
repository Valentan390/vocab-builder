import styled from "styled-components";

export const StyledAddWordCategoriesSelectWrapper = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 204px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledAddWordCategoriesSelectError = styled.p`
  position: absolute;
  left: 0;
  bottom: -18px;
  font-size: 12px;
  // font-style: normal;
  font-weight: var(--regular);
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: var(--red);
`;
