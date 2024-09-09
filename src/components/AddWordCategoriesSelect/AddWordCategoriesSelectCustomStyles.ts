import { StylesConfig } from "react-select";
import { IOptionsSelect } from "../CategoriesSelect/CategoriesSelect";

export const categoriesSelectCustomStyles = (
  $error: boolean
): StylesConfig<IOptionsSelect> => ({
  container: (provided) => ({
    ...provided,
    width: "100%",
    position: "relative",
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: "15px",
    border: `1px solid ${$error ? "var(--red)" : "#D1D5DB"}`,
    padding: "12px 24px",
    boxShadow: "none",
    backgroundColor: "inherit",

    svg: {
      width: "20px",
      height: "20px",
      fill: `${$error ? "var(--red)" : "var(--white)"}`,
    },

    "&:hover": {
      boxShadow: "none",
      border: `1px solid #D1D5DB`,
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: "0",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),

  placeholder: (provided) => ({
    ...provided,
    marginLeft: "0",
    marginRight: "0",
    color: `${$error ? "var(--red)" : "var(--white)"}`,
    fontFamily: "var(--font-family)",
    fontSize: "16px",
    fontWeight: "var(--medium)",
    lineHeight: "1.5",
  }),

  input: (provided) => ({
    ...provided,
    margin: "0",
    paddingBottom: "0",
    paddingTop: "0",
  }),

  singleValue: (provided) => ({
    ...provided,
    marginLeft: "0",
    marginRight: "0",
    color: "var(--white)",
    fontFamily: "var(--font-family)",
    fontSize: "16px",
    fontWeight: "var(--medium)",
    lineHeight: "1.5",
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "15px",
    padding: "12px 24px",
    background: "#FFF",
    boxShadow: "0px 4px 47px 0px rgba(18, 20, 23, 0.08)",
  }),

  menuList: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "column",
    // gap: "8px",
  }),

  option: (provided, state) => ({
    ...provided,
    padding: "0",
    backgroundColor: "none",
    color: state.isSelected ? "var(--black)" : "rgba(17, 16, 28, 0.30)",
    fontFamily: "var(--font-family)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "var(--medium)",
    lineHeight: "1.5",

    "&:hover": {
      color: "var(--black)",
    },
  }),
});
