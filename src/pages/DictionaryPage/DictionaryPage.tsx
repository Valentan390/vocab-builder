import { FC, useEffect, useState } from "react";
import MainSectionAuth from "../../components/MainSectionAuth/MainSectionAuth";
import Dashboard from "../../components/Dashboard/Dashboard";
import WordsTable from "../../components/WordsTable/WordsTable";
import WordsPagination from "../../components/WordsPagination/WordsPagination";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { selectIsLoading, selectPages } from "../../redux/word/wordSelectors";
import { selectFilters } from "../../redux/filters/filterSelectors";
import { getAllUserWordsThunk } from "../../redux/word/operationsWord";
import Loader from "../../components/Loader/Loader";

const DictionaryPage: FC = () => {
  const [page, setPage] = useState(useAppSelector(selectPages));
  const [limit] = useState(7);
  const { searchTerm, selectedCategory, typeVerb } =
    useAppSelector(selectFilters);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getAllUserWordsThunk({
        page,
        limit,
        category: selectedCategory,
        keyword: searchTerm,
        isIrregular: typeVerb,
      })
    );
  }, [dispatch, page, searchTerm, selectedCategory, typeVerb, limit]);

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

export default DictionaryPage;
