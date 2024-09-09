import { FC } from "react";
import Select, { SingleValue } from "react-select";
import { selectCustomStyles } from "./SelectCustomStyles";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { selectCategories } from "../../redux/filters/filterSelectors";
import { StyledSelectWrapper } from "./CategoriesSelect.styled";

interface CategoriesSelectProps {
  onCategoryChange: (category: string | null) => void;
  value: string | null;
}

export interface IOptionsSelect {
  value: string;
  label: string;
}

const CategoriesSelect: FC<CategoriesSelectProps> = ({
  onCategoryChange,
  value,
}) => {
  const handleSelectChange = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue?.value === "") {
      onCategoryChange(null);
    } else {
      onCategoryChange(newValue ? newValue.value : null);
    }
  };

  const categories = useAppSelector(selectCategories);

  const options = [
    { value: "", label: "Cancel selection" },
    ...(categories && Array.isArray(categories)
      ? categories.map((category) => ({
          value: category,
          label: category,
        }))
      : []),
  ];

  const selectedOption = options.find((option) => option.value === value);

  return (
    <StyledSelectWrapper>
      <Select
        value={selectedOption || null}
        styles={selectCustomStyles()}
        options={options}
        placeholder="Categories"
        onChange={handleSelectChange}
        isMulti={false}
      />
    </StyledSelectWrapper>
  );
};

export default CategoriesSelect;
