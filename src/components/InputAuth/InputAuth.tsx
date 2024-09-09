import { FC, useState } from "react";
import {
  StyledInputAuthErrorAndSuccess,
  StyledInputAuthInput,
  StyledInputAuthLabel,
} from "./InputAuth.styled";
import { IFormData, Name } from "../../helpers/interfeceData";
import ButtonEye from "../Button/ButtonEye/ButtonEye";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Icon from "../Icon/Icon";

interface InputAuthProps {
  name: Name;
  placeholder: string;
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
  isValid: boolean;
}

const InputAuth: FC<InputAuthProps> = ({
  name,
  placeholder,
  register,
  errors,
  isValid,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const getInputType = () => {
    if (name === "password") {
      return passwordVisible ? "text" : "password";
    } else {
      return name === "email" ? "email" : "text";
    }
  };

  return (
    <StyledInputAuthLabel>
      <StyledInputAuthInput
        type={getInputType()}
        placeholder={placeholder}
        autoComplete={name === "password" ? "off" : "on"}
        {...register(name)}
        $error={!!errors[name]}
        $isValid={isValid}
      />

      {(errors[name] || isValid) && (
        <StyledInputAuthErrorAndSuccess $isValid={isValid}>
          <Icon
            iconName={
              errors[name]
                ? "icon-error-warning-fill"
                : "icon-checkbox-circle-fill"
            }
            width="16"
            height="16"
            fill={errors[name] ? "var(--red)" : "var(--green)"}
          />
          {errors[name] ? `${errors[name]?.message}` : `Success ${name}`}
        </StyledInputAuthErrorAndSuccess>
      )}

      {name === "password" && (
        <ButtonEye
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
        />
      )}
    </StyledInputAuthLabel>
  );
};

export default InputAuth;
