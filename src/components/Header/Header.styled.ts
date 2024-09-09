import styled from "styled-components";

interface IStyledHeaderSection {
  $background: boolean;
}

export const StyledHeaderSection = styled.section<IStyledHeaderSection>`
  padding: 20px 0;
  background: ${({ $background }) => ($background ? "var(--white-1)" : "#fff")};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledHeaderHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

// export const StyledHeader = styled.``
// export const StyledHeader = styled.``
