import { Dispatch, FC, SetStateAction } from "react";
import {
  StyledUserNavLink,
  StyledUserNavLogOut,
  StyledUserNavWrapper,
} from "./UserNav.styled";
import { useMediaQuery } from "react-responsive";
import Icon from "../Icon/Icon";
import useModalHandler from "../../hooks/useModalHandler";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { userLogOut } from "../../redux/userAuth/operationsUserAuth";

interface UserNavProps {
  isBurgerMenu?: boolean;
  setIsBurgerMenu?: Dispatch<SetStateAction<boolean>>;
}

const UserNav: FC<UserNavProps> = () => {
  const isMobileAndTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const { handleCloseModal } = useModalHandler();
  const dispatch = useAppDispatch();
  const userNav = [
    { to: "/dictionary", text: "Dictionary" },
    { to: "/recommend", text: "Recommend" },
    { to: "/training", text: "Training" },
  ];

  const toggleBurgerMenu = () => {
    if (isMobileAndTablet) {
      handleCloseModal();
    }
    return;
  };
  return (
    <StyledUserNavWrapper>
      {userNav.map(({ to, text }) => (
        <StyledUserNavLink key={to} to={to} onClick={toggleBurgerMenu}>
          {text}
        </StyledUserNavLink>
      ))}
      {isMobileAndTablet && (
        <StyledUserNavLogOut
          type="button"
          onClick={() => dispatch(userLogOut())}
        >
          Log out{" "}
          <Icon
            iconName="icon-switch-horizontal"
            width="16"
            height="16"
            stroke="var(--white)"
          />
        </StyledUserNavLogOut>
      )}
    </StyledUserNavWrapper>
  );
};

export default UserNav;
