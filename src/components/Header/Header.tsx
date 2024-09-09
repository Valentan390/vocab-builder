import { FC } from "react";
import Logo from "../Logo/Logo";
import UserNav from "../UserNav/UserNav";
import UserBar from "../UserBar/UserBar";
import { StyledHeaderHeader, StyledHeaderSection } from "./Header.styled";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import useAuthUser from "../../hooks/useAuthUser";

const Header: FC = () => {
  const { pathname } = useLocation();
  const { isAuthUser } = useAuthUser();
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <StyledHeaderSection
      $background={
        pathname === "/login" || pathname === "/register" ? true : false
      }
    >
      <StyledHeaderHeader className="container">
        <Logo />
        {isAuthUser && isDesktop && <UserNav />}
        {isAuthUser && <UserBar />}
      </StyledHeaderHeader>
    </StyledHeaderSection>
  );
};

export default Header;
