import { Dispatch, FC, SetStateAction } from "react";
import UserBar from "../UserBar/UserBar";
import UserNav from "../UserNav/UserNav";
import {
  StyledBurgerBackdrop,
  StyledBurgerMenu,
  StyledBurgerMenuClose,
  StyledBurgerMenuUser,
} from "./BurgerMenu.styled";
import Icon from "../Icon/Icon";
import { useMediaQuery } from "react-responsive";

interface BurgerMenuProps {
  isBurgerMenu: boolean;
  setIsBurgerMenu: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isBurgerMenu, setIsBurgerMenu }) => {
  const isMobail = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <StyledBurgerBackdrop>
      <StyledBurgerMenu
        style={{
          right: isBurgerMenu ? "0" : "-300px",
          //   width: isMobail ? "185px" : "300px",
          padding: isMobail ? "16px" : "20px 32px",
        }}
      >
        <StyledBurgerMenuUser>
          <UserBar callerComponent="BurgerMenu" />
          <StyledBurgerMenuClose
            type="button"
            onClick={() => setIsBurgerMenu(!isBurgerMenu)}
          >
            <Icon
              iconName="icon-x"
              width={isMobail ? "32" : "40"}
              height={isMobail ? "32" : "40"}
              stroke="var(--white)"
            />
          </StyledBurgerMenuClose>
        </StyledBurgerMenuUser>
        <UserNav
          isBurgerMenu={isBurgerMenu}
          setIsBurgerMenu={setIsBurgerMenu}
        />
        {/* <p>HELLO</p> */}
      </StyledBurgerMenu>
    </StyledBurgerBackdrop>
  );
};

export default BurgerMenu;
