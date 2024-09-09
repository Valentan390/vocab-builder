import { FC } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledRegisterAndLoginContainerImg,
  StyledRegisterAndLoginForm,
  StyledRegisterAndLoginImg,
  StyledRegisterAndLoginInputContainer,
  StyledRegisterAndLoginLink,
  StyledRegisterAndLoginRegister,
  StyledRegisterAndLoginServices,
  StyledRegisterAndLoginTitle,
  StyledRegisterAndLoginWord,
  StyledRegisterAndLoginWrapper,
  StyledRegisterAndLoginWrapperForm,
} from "./RegisterAndLogin.styled";
import InputAuth from "../InputAuth/InputAuth";
import {
  imgRegistersAndLogins,
  inputSignIn,
  inputSignUp,
} from "../../helpers/componentsData";
import { IFormData } from "../../helpers/interfeceData";
import { schemaSignIn, schemaSignUp } from "../../helpers/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import {
  userLogin,
  userRegister,
} from "../../redux/userAuth/operationsUserAuth";

const RegisterAndLogin: FC = () => {
  const { pathname } = useLocation();
  const isTabletAndDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const inputAuthRender = pathname === "/register" ? inputSignUp : inputSignIn;
  const schema = pathname === "/register" ? schemaSignUp : schemaSignIn;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormData>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (pathname === "/register") {
        await dispatch(userRegister(data)).unwrap();
        navigate("/dictionary");
        reset();
      } else {
        await dispatch(userLogin(data)).unwrap();
        navigate("/dictionary");
        reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    }
  });

  const renderWord = () => {
    if (isMobile && pathname === "/login") {
      return (
        <StyledRegisterAndLoginWord>
          Word · Translation · Grammar · Progress
        </StyledRegisterAndLoginWord>
      );
    } else if (isTabletAndDesktop) {
      return (
        <StyledRegisterAndLoginWord>
          Word · Translation · Grammar · Progress
        </StyledRegisterAndLoginWord>
      );
    }
    return null;
  };

  return (
    <StyledRegisterAndLoginWrapper $gap={pathname === "/login" ? true : false}>
      <StyledRegisterAndLoginContainerImg>
        {imgRegistersAndLogins.map(({ query, imgData }) => (
          <MediaQuery key={query} query={query}>
            <StyledRegisterAndLoginImg {...imgData} />
          </MediaQuery>
        ))}

        {renderWord()}
      </StyledRegisterAndLoginContainerImg>

      <StyledRegisterAndLoginWrapperForm>
        <StyledRegisterAndLoginForm action="" onSubmit={onSubmit}>
          <StyledRegisterAndLoginTitle>
            {pathname === "/register" ? "Register" : "Login"}
          </StyledRegisterAndLoginTitle>
          <StyledRegisterAndLoginServices
            $marginBottom={pathname === "/login" ? true : false}
          >
            {pathname === "/register"
              ? "To start using our services, please fill out the registration form below. All fields are mandatory:"
              : "Please enter your login details to continue using our service:"}
          </StyledRegisterAndLoginServices>

          <StyledRegisterAndLoginInputContainer>
            {inputAuthRender.map(({ name, placeholder }) => (
              <InputAuth
                key={name}
                name={name}
                placeholder={placeholder}
                register={register}
                errors={errors}
                isValid={isValid}
              />
            ))}
          </StyledRegisterAndLoginInputContainer>

          <StyledRegisterAndLoginRegister type="submit">
            {pathname === "/register" ? "Register" : "Login"}
          </StyledRegisterAndLoginRegister>
        </StyledRegisterAndLoginForm>

        <StyledRegisterAndLoginLink
          to={pathname === "/register" ? "/login" : "/register"}
        >
          {pathname === "/register" ? "Login" : "Register"}
        </StyledRegisterAndLoginLink>
      </StyledRegisterAndLoginWrapperForm>
    </StyledRegisterAndLoginWrapper>
  );
};

export default RegisterAndLogin;
