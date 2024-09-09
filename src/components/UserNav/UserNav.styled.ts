import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledUserNavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: start;
  align-items: start;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 28px;
    justify-content: start;
    align-items: center;
    width: max-content;
  }
`;

export const StyledUserNavLink = styled(NavLink)`
  color: var(--white);
  font-family: var(--font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: normal;

  &.active {
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    color: var(--black);
    border-radius: 15px;
    background: var(--white);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    color: #121417;
    font-size: 14px;
    font-weight: var(--medium);
    line-height: normal;

    &.active {
      display: flex;
      padding: 12px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 15px;
      background: var(--greyGreen);
    }
  }
`;

export const StyledUserNavLogOut = styled.button`
  display: flex;
  gap: 6px;
  justify-content: start;
  align-items: center;
  width: max-content;
  color: var(--white);
  // font-family: "MacPaw Fixel Display";
  font-size: 14px;
  // font-style: normal;
  font-weight: var(--medium);
  line-height: normal;
`;
