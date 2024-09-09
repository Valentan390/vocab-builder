import { FC } from "react";
import { Oval } from "react-loader-spinner";
import { StyledLoaderOval } from "./Loader.styled";

const Loader: FC = () => {
  return (
    <StyledLoaderOval>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </StyledLoaderOval>
  );
};

export default Loader;
