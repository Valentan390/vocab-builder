import { FC } from "react";
import MainSectionAuth from "../../components/MainSectionAuth/MainSectionAuth";
import RegisterAndLogin from "../../components/RegisterAndLogin/RegisterAndLogin";

const LoginPage: FC = () => {
  return (
    <MainSectionAuth>
      <RegisterAndLogin />
    </MainSectionAuth>
  );
};

export default LoginPage;
