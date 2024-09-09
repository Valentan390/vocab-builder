import styled from "styled-components";

export const StyledUserBarWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  width: max-content;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 10px;
  }
`;

export const StyledUserBarUserName = styled.p`
  color: var(--black);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    color: var(--black);
  }
`;

interface IStyledUserBarUserIcon {
  $color?: boolean;
}

export const StyledUserBarUserIcon = styled.p<IStyledUserBarUserIcon>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 30px;
  background: ${({ $color }) => ($color ? "var(--white)" : "var(--greyGreen)")};

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 6px;
  }
`;

export const StyledUserBarIconNav = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledUserBarLogOut = styled.button`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 16px;
    font-weight: var(--medium);
    line-height: 1.5;
    position: relative;

    &:hover::before {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 2px;
      background-color: var(--black);
      border-radius: 2px;
      animation: expandLine 0.3s linear forwards;
    }

    @keyframes expandLine {
      from {
        width: 2px;
      }
      to {
        width: 100%;
      }
    }
  }
`;
