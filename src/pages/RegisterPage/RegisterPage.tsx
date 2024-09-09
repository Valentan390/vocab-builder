import { FC } from "react";
import MainSectionAuth from "../../components/MainSectionAuth/MainSectionAuth";
import RegisterAndLogin from "../../components/RegisterAndLogin/RegisterAndLogin";

const RegisterPage: FC = () => {
  return (
    <MainSectionAuth>
      <RegisterAndLogin />
    </MainSectionAuth>
  );
};

export default RegisterPage;
