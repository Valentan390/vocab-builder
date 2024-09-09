import { FC, useState } from "react";
import Icon from "../Icon/Icon";
import { useMediaQuery } from "react-responsive";
import {
  StyledUserBarIconNav,
  StyledUserBarLogOut,
  StyledUserBarUserIcon,
  StyledUserBarUserName,
  StyledUserBarWrapper,
} from "./UserBar.styled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import useModalHandler from "../../hooks/useModalHandler";
import useAuthUser from "../../hooks/useAuthUser";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { userLogOut } from "../../redux/userAuth/operationsUserAuth";

interface UserBarProps {
  callerComponent?: string;
}

const UserBar: FC<UserBarProps> = ({ callerComponent }) => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const { user } = useAuthUser();
  const isMobileAndTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isMobail = useMediaQuery({ query: "(max-width: 767px)" });
  const { handleOpenModal } = useModalHandler();
  const dispatch = useAppDispatch();
  return (
    <StyledUserBarWrapper>
      <StyledUserBarUserName>{user.name}</StyledUserBarUserName>
      <StyledUserBarUserIcon
        $color={callerComponent === "BurgerMenu" ? true : undefined}
      >
        <Icon
          iconName="icon-gridicons_user"
          width={isMobail ? "20" : "24"}
          height={isMobail ? "20" : "24"}
          fill={
            callerComponent === "BurgerMenu"
              ? "var(--greyGreen)"
              : "rgba(252, 252, 252, 0.7)"
          }
        />
      </StyledUserBarUserIcon>

      {isMobileAndTablet && callerComponent !== "BurgerMenu" && (
        <StyledUserBarIconNav
          type="button"
          onClick={() => handleOpenModal("BurgerMenuModal")}
        >
          <Icon
            iconName="icon-Nav"
            width={isMobail ? "32" : "40"}
            height={isMobail ? "22" : "28"}
            stroke="var(--black)"
          />
        </StyledUserBarIconNav>
      )}

      {isDesktop && (
        <StyledUserBarLogOut
          type="button"
          onClick={() => dispatch(userLogOut())}
        >
          Log out
          <Icon
            iconName="icon-switch-horizontal"
            width="16"
            height="16"
            stroke="var(--black)"
          />
        </StyledUserBarLogOut>
      )}

      {isBurgerMenu && isMobileAndTablet && (
        <BurgerMenu
          isBurgerMenu={isBurgerMenu}
          setIsBurgerMenu={setIsBurgerMenu}
        />
      )}
    </StyledUserBarWrapper>
  );
};

export default UserBar;
