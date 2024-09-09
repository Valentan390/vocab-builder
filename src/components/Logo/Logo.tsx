import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { StyledLogoLink } from "./Logo.styled";
import Icon from "../Icon/Icon";

const Logo: FC = () => {
  const userAuth = false;
  const isMobail = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <StyledLogoLink to={userAuth ? "/" : "/register"}>
      <Icon
        iconName="icon-Craftwork"
        width={isMobail ? "36" : "40"}
        height={isMobail ? "36" : "40"}
      />
      VocabBuilder
    </StyledLogoLink>
  );
};

export default Logo;
