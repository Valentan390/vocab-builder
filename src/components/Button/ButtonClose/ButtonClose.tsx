import { FC } from "react";
import Icon from "../../Icon/Icon";
import useModalHandler from "../../../hooks/useModalHandler";
import { StyledButtonClose } from "./ButtonClose.styled";
import { useNavigate } from "react-router-dom";

const ButtonClose: FC = () => {
  const { handleCloseModal, contentModal } = useModalHandler();
  const navigate = useNavigate();

  const closeModalWindow = () => {
    if (contentModal === "WellDoneModal") {
      navigate("/dictionary");
    }
    handleCloseModal();
  };
  return (
    <StyledButtonClose type="button" onClick={closeModalWindow}>
      <Icon
        iconName="icon-x"
        width="24px"
        height="24px"
        stroke="var(--white)"
      />
    </StyledButtonClose>
  );
};

export default ButtonClose;
