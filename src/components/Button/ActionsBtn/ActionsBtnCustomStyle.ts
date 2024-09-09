import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

export const PopperButton = styled(Button)({
  color: "var(--black)",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: "8px",
  padding: 0,
  textTransform: "none",
  fontFamily: "var(--font-family)",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "var(--medium)",
  lineHeight: "normal",

  "&:hover": {
    // backgroundColor: "#D4F8D3",
    // borderColor: "#0062cc",
    // boxShadow: "none",
  },
  "&:active": {
    // boxShadow: "none",
    // backgroundColor: "#0062cc",
    // borderColor: "#005cbf",
  },
  "&:focus": {
    // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },

  "@media screen and (min-width: 768px)": {
    fontSize: "16px",
    lineHeight: 1.5,
  },

  "@media screen and (min-width: 1440px)": {},
});

export const CustomPaper = styled(Paper)({
  padding: "12px 24px",
  borderRadius: "15px",
  boxShadow: "0px 4px 47px 0px rgba(18, 20, 23, 0.08)",
  display: "flex",
  gap: "8px",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",

  "@media screen and (min-width: 768px)": {},

  "@media screen and (min-width: 1440px)": {},
});

export const CustomIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: "#D4F8D3",
  },
});
