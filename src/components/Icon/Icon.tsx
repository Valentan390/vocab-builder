import { FC } from "react";
import sprite from "../../images/svg/sprite.svg";

interface IconProps {
  iconName: string;
  width: string;
  height: string;
  stroke?: string;
  fill?: string;
  style?: React.CSSProperties;
}

const Icon: FC<IconProps> = ({
  iconName,
  width,
  height,
  stroke,
  fill,
  style,
}) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      width={width}
      height={height}
      style={style}
    >
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};

export default Icon;
