import { FC, useEffect, useState } from "react";
import MainSectionAuth from "../../components/MainSectionAuth/MainSectionAuth";
import Dashboard from "../../components/Dashboard/Dashboard";
import WordsTable from "../../components/WordsTable/WordsTable";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { getAllWordsThunk } from "../../redux/word/operationsWord";
import {
  selectIsLoading,
  selectPageAllWords,
} from "../../redux/word/wordSelectors";
import WordsPagination from "../../components/WordsPagination/WordsPagination";
import { selectFiltersRecommend } from "../../redux/filters/filterSelectors";
import Loader from "../../components/Loader/Loader";

const RecommendPage: FC = () => {
  const { searchTerm, selectedCategory, typeVerb } = useAppSelector(
    selectFiltersRecommend
  );
  const [page, setPage] = useState(useAppSelector(selectPageAllWords));
  const [limit] = useState(7);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(
      getAllWordsThunk({
        page,
        limit,
        keyword: searchTerm,
        isIrregular: typeVerb,
        category: selectedCategory,
      })
    );
  }, [page, searchTerm, selectedCategory, typeVerb, dispatch, limit]);

  return (
    <MainSectionAuth>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Dashboard />
          <WordsTable />
          <WordsPagination page={page} setPage={setPage} />
        </>
      )}
    </MainSectionAuth>
  );
};

export default RecommendPage;
