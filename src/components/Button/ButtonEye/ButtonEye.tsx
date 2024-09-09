import { FC } from "react";
import Icon from "../../Icon/Icon";
import { StyledButtonEyeButton } from "./ButtonEye.styled";

interface ButtonEyeProps {
  passwordVisible: boolean;
  setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonEye: FC<ButtonEyeProps> = ({
  passwordVisible,
  setPasswordVisible,
}) => {
  return (
    <StyledButtonEyeButton
      type="button"
      onClick={() => setPasswordVisible(!passwordVisible)}
    >
      <Icon
        iconName={passwordVisible ? "icon-eye" : "icon-eye-off"}
        width="20"
        height="20"
        fill="none"
        stroke="var(--black)"
      />
    </StyledButtonEyeButton>
  );
};

export default ButtonEye;
