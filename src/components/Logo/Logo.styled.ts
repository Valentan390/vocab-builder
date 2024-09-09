import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogoLink = styled(Link)`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;
  color: var(--black);
  font-family: var(--font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: var(--semiBold);
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
  }
`;
