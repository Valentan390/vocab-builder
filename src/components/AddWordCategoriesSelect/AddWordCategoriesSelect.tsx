import { forwardRef } from "react";
import Select, { SingleValue } from "react-select";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { selectCategories } from "../../redux/filters/filterSelectors";
import { IOptionsSelect } from "../CategoriesSelect/CategoriesSelect";
import { categoriesSelectCustomStyles } from "./AddWordCategoriesSelectCustomStyles";
import { FieldErrors } from "react-hook-form";
import { INewWord } from "../../helpers/interfeceData";
import {
  StyledAddWordCategoriesSelectError,
  StyledAddWordCategoriesSelectWrapper,
} from "./AddWordCategoriesSelect.styled";

interface AddWordCategoriesSelectProps {
  onChange: (value: string) => void;
  errors: FieldErrors<INewWord>;
}

const AddWordCategoriesSelect = forwardRef<
  HTMLDivElement,
  AddWordCategoriesSelectProps
>(({ onChange, errors }, ref) => {
  const categories = useAppSelector(selectCategories);

  const options = categories.map((categorie) => ({
    value: categorie,
    label: categorie,
  }));

  const handeleSelectChange = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue !== null) {
      onChange(newValue.value);
    }
  };

  return (
    <StyledAddWordCategoriesSelectWrapper ref={ref}>
      <Select
        styles={categoriesSelectCustomStyles(!!errors.category)}
        options={options}
        placeholder="Categories"
        onChange={handeleSelectChange}
        isMulti={false}
      />
      <StyledAddWordCategoriesSelectError>
        {errors.category?.message}
      </StyledAddWordCategoriesSelectError>
    </StyledAddWordCategoriesSelectWrapper>
  );
});

export default AddWordCategoriesSelect;
