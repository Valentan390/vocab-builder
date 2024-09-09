import { FC, ReactNode } from "react";
import {
  StyledMainSectionAuth_div,
  StyledMainSectionAuth_main,
  StyledMainSectionAuth_section,
} from "./MainSectionAuth.styled";
import { useMediaQuery } from "react-responsive";
import useAuthUser from "../../hooks/useAuthUser";

interface MainSectionAuthProps {
  children: ReactNode;
}

const MainSectionAuth: FC<MainSectionAuthProps> = ({ children }) => {
  const isMobail = useMediaQuery({ query: "(max-width: 767px)" });
  const { isAuthUser } = useAuthUser();

  return (
    <StyledMainSectionAuth_main>
      <StyledMainSectionAuth_section $padding={isAuthUser ? true : false}>
        <StyledMainSectionAuth_div
          className={isMobail && !isAuthUser ? undefined : "container"}
        >
          {children}
        </StyledMainSectionAuth_div>
      </StyledMainSectionAuth_section>
    </StyledMainSectionAuth_main>
  );
};

export default MainSectionAuth;
