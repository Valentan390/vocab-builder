import { FC, useCallback, useEffect, useState } from "react";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";
import {
  StyledFiltersInput,
  StyledFiltersLabel,
  StyledFiltersRadioLabel,
  StyledFiltersRadioWrapper,
  StyledFiltersWrapper,
} from "./Filters.styled";
import Icon from "../Icon/Icon";

import Radio from "@mui/material/Radio";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";

import {
  setFilters,
  setFiltersRecommend,
} from "../../redux/filters/filterSlice";
import { useLocation } from "react-router-dom";
import {
  selectFilters,
  selectFiltersRecommend,
} from "../../redux/filters/filterSelectors";
import useDebouncedValue from "../../hooks/useDebouncedValue";

const Filters: FC = () => {
  const { pathname } = useLocation();
  const { searchTerm, selectedCategory, typeVerb } = useAppSelector(
    pathname === "/dictionary" ? selectFilters : selectFiltersRecommend
  );
  const [searchTermComponent, setSearchTermComponent] = useState(searchTerm);

  const [selectedCategoryComponent, setSelectedCategoryComponent] = useState<
    string | null
  >(selectedCategory);
  const [typeVerbComponent, setTypeVerbComponent] = useState<boolean | null>(
    typeVerb
  );

  const dispatch = useAppDispatch();

  const debouncedSearchTerm = useDebouncedValue(searchTermComponent, 300);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTermComponent(event.target.value.trim());
    },
    []
  );

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategoryComponent(category);
    if (category === null) {
      setTypeVerbComponent(null);
    }
  }, []);

  const handleRadioChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTypeVerbComponent(event.target.value === "true");
    },
    []
  );

  const controlProps = (item: boolean) => ({
    checked: typeVerbComponent === item,
    onChange: handleRadioChange,
    value: item.toString(),
    name: "verb-type",
    // inputProps: { "aria-label": item },
    sx: {
      color: "rgba(18, 20, 23, 0.20)",
      "&.Mui-checked": {
        color: "var(--greyGreen)",
        padding: 0,
      },
      "& .MuiSvgIcon-root": {
        fontSize: "20px",
      },
      "&.MuiButtonBase-root": {
        padding: 0,
      },
    },
  });

  useEffect(() => {
    const filters = {
      searchTerm: debouncedSearchTerm,
      selectedCategory: selectedCategoryComponent,
      typeVerb: typeVerbComponent,
    };

    dispatch(
      pathname === "/dictionary"
        ? setFilters(filters)
        : setFiltersRecommend(filters)
    );
  }, [
    dispatch,
    selectedCategoryComponent,
    debouncedSearchTerm,
    typeVerbComponent,
    pathname,
  ]);

  return (
    <StyledFiltersWrapper>
      <StyledFiltersLabel>
        <StyledFiltersInput
          type="text"
          placeholder="Find the word"
          name="findTheWord"
          value={searchTermComponent}
          onChange={handleInputChange}
        />
        <Icon
          iconName="icon-search"
          width="20"
          height="20"
          fill="none"
          stroke="var(--black)"
          style={{ position: "absolute", top: "15px", right: "24px" }}
        />
      </StyledFiltersLabel>
      <CategoriesSelect
        onCategoryChange={handleCategoryChange}
        value={selectedCategoryComponent}
      />
      {selectedCategory === "verb" && (
        <StyledFiltersRadioWrapper>
          <StyledFiltersRadioLabel>
            <Radio {...controlProps(true)} />
            Regular
          </StyledFiltersRadioLabel>

          <StyledFiltersRadioLabel>
            <Radio {...controlProps(false)} />
            Irregular
          </StyledFiltersRadioLabel>
        </StyledFiltersRadioWrapper>
      )}
    </StyledFiltersWrapper>
  );
};

export default Filters;
