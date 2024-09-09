import { FC } from "react";
import { RotatingLines } from "react-loader-spinner";
import { StyledLoaderRotatingLines_div } from "./LoaderRotatingLines.styled";

const LoaderRotatingLines: FC = () => {
  return (
    <StyledLoaderRotatingLines_div>
      <RotatingLines
        visible={true}
        // height={"96"} // Числовое значение
        width={"96"}
        // color="grey"
        strokeWidth={"5"} // Числовое значение
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </StyledLoaderRotatingLines_div>
  );
};

export default LoaderRotatingLines;
