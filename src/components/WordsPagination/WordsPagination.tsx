import { Dispatch, FC, SetStateAction } from "react";

import Stack from "@mui/material/Stack";
import { useAppSelector } from "../../hooks/useReduxHooks";
import {
  selectTotalPages,
  selectTotalPagesAllWords,
} from "../../redux/word/wordSelectors";

import Icon from "../Icon/Icon";
import {
  CustomPagination,
  CustomPaginationItem,
} from "./CustomWordsPagination";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const FirstIcon: FC = () => (
  <Icon iconName="icon-First" width="20" height="20" />
);

const LastIcon: FC = () => <Icon iconName="icon-Last" width="20" height="20" />;

interface WordsPaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const WordsPagination: FC<WordsPaginationProps> = ({ page, setPage }) => {
  const { pathname } = useLocation();
  const isMobaile = useMediaQuery({ query: "(max-width: 767px)" });

  const totalPages = useAppSelector(
    pathname === "/dictionary" ? selectTotalPages : selectTotalPagesAllWords
  );

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} sx={{ alignItems: "center" }}>
      <CustomPagination
        page={page}
        count={totalPages}
        showFirstButton
        showLastButton
        boundaryCount={1}
        siblingCount={isMobaile ? -1 : 0}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        renderItem={(item) => (
          <CustomPaginationItem
            slots={{
              first: FirstIcon,
              last: LastIcon,
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};

export default WordsPagination;
