import { styled } from "@mui/material/styles";
import { PaginationItem } from "@mui/material";
import Pagination from "@mui/material/Pagination";

export const CustomPagination = styled(Pagination)({
  "& .MuiPagination-ul": { gap: "10px" },

  "@media screen and (min-width: 768px)": {
    // "& .MuiPagination-ul": { gap: "30px" },
  },

  "@media screen and (min-width: 1440px)": {},
});

export const CustomPaginationItem = styled(PaginationItem)({
  width: "32px",
  height: "32px",
  borderRadius: "8px",
  border: "1px solid rgba(18, 20, 23, 0.10)",
  padding: 0,
  margin: 0,
  fontSize: "13px",
  fontWeight: "var(--semiBold)",
  stroke: "var(--greyGreen)",
  "&:hover": { background: "#D4F8D3" },
  "&.Mui-selected": {
    background: "var(--greyGreen)",
    color: "#FFFFFF",
    border: "none",
    "&:hover": { background: "var(--greyGreen)" },
  },

  "@media screen and (min-width: 768px)": {},

  "@media screen and (min-width: 1440px)": {},
});
