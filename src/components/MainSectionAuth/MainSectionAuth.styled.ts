import styled from "styled-components";

export const StyledMainSectionAuth_main = styled.main``;

interface ISection {
  $padding: boolean;
}

export const StyledMainSectionAuth_section = styled.section<ISection>`
  padding-top: ${({ $padding }) => (!$padding ? "0" : "28px")};
  padding-bottom: ${({ $padding }) => (!$padding ? "0" : "28px")};
  background: var(--white-1);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    padding-top: ${({ $padding }) => (!$padding ? "0" : "80px")};
    padding-bottom: ${({ $padding }) => (!$padding ? "0" : "48px")};
  }
`;

export const StyledMainSectionAuth_div = styled.div``;
