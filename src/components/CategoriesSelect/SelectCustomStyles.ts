import { StylesConfig } from "react-select";
import { IOptionsSelect } from "./CategoriesSelect";

export const selectCustomStyles = (): StylesConfig<IOptionsSelect> => ({
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: "15px",
    border: `1px solid rgba(18, 20, 23, 0.10)`,
    padding: "12px 24px",
    boxShadow: "none",

    svg: {
      width: "20px",
      height: "20px",
      fill: "var(--black)",
    },

    "&:hover": {
      boxShadow: "none",
      border: `1px solid rgba(18, 20, 23, 0.10)`,
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
    color: "var(--black)",
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
    color: "var(--black)",
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
    width: "max-content",
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
