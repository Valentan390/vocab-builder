import { FC } from "react";

import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

interface IProgressBar {
  value: number;
}

const ProgressBar: FC<IProgressBar> = ({ value }) => {
  const { pathname } = useLocation();
  function FacebookCircularProgress(props: CircularProgressProps) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: "#D4F8D3",
          }}
          size={pathname === "/training" ? 50 : 26}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="determinate"
          sx={{
            margin: "auto",
            color: "#2BD627",
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={pathname === "/training" ? 50 : 26}
          value={value}
          thickness={4}
          {...props}
        />
        {pathname === "/training" && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="p"
              sx={{
                color: "var(--black)",
                fontFamily: "var(--font-family)",
                fontSize: "16px",
                fontWeight: "var(--medium)",
                lineHeight: 1.5,
              }}
            >{`${Math.round(value)}%`}</Typography>
          </Box>
        )}
      </Box>
    );
  }
  return <FacebookCircularProgress />;
};

export default ProgressBar;
