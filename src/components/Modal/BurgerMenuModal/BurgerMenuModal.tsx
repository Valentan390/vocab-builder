import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import {
  StyledBurgerMenu,
  StyledBurgerMenuClose,
  StyledBurgerMenuUser,
} from "./BurgerMenuModal.styled";
import UserBar from "../../UserBar/UserBar";
import Icon from "../../Icon/Icon";
import UserNav from "../../UserNav/UserNav";
import useModalHandler from "../../../hooks/useModalHandler";

const BurgerMenuModal: FC = () => {
  const isMobail = useMediaQuery({ query: "(max-width: 767px)" });
  const { handleCloseModal } = useModalHandler();
  return (
    <StyledBurgerMenu $padding={isMobail ? true : false}>
      <StyledBurgerMenuUser>
        <UserBar callerComponent="BurgerMenu" />
        <StyledBurgerMenuClose type="button" onClick={handleCloseModal}>
          <Icon
            iconName="icon-x"
            width={isMobail ? "32" : "40"}
            height={isMobail ? "32" : "40"}
            stroke="var(--white)"
          />
        </StyledBurgerMenuClose>
      </StyledBurgerMenuUser>
      <UserNav />
    </StyledBurgerMenu>
  );
};

export default BurgerMenuModal;
