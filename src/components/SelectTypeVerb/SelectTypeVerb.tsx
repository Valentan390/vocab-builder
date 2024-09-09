import { ChangeEvent, FC, forwardRef, useEffect, useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { FieldErrors } from "react-hook-form";
import { INewWord } from "../../helpers/interfeceData";
import { StyledSelectTypeVerbError } from "./SelectTypeVerb.styled";

interface SelectTypeVerbProps {
  onChange: (value: boolean) => void;
  errors: FieldErrors<INewWord>;
}

const SelectTypeVerb: FC<SelectTypeVerbProps> = forwardRef(
  ({ onChange, errors }, ref) => {
    const [selectedValue, setSelectedValue] = useState<string>("false");

    useEffect(() => {
      onChange(selectedValue === "true");
    }, [selectedValue, onChange]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      // const value = event.target.value === "false";
      setSelectedValue(event.target.value);
      // onChange(value);
    };

    const sxStyle = {
      color: `${errors.isIrregular ? "var(--red)" : "var(--white)"}`,

      "&.Mui-checked": {
        color: "var(--white)",
      },

      "& .MuiSvgIcon-root": {
        fontSize: "18px",

        "@media screen and (min-width: 768px)": {
          fontSize: "20px",
        },
      },

      "& .MuiFormControlLabel-label": { fontSize: "30px" },
    };

    return (
      <FormControl sx={{ position: "relative" }}>
        <RadioGroup
          row
          ref={ref}
          name="controlled-radio-buttons-group"
          value={selectedValue}
          onChange={handleChange}
          sx={{
            color: `${errors.isIrregular ? "var(--red)" : "var(--white)"}`,
            "& .MuiFormControlLabel-label": {
              color: "var(--white)",
              fontFamily: "var(--font-family)",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "var(--regular)",
              lineHeight: "normal",

              "@media screen and (min-width: 768px)": {
                fontSize: "16px",
              },
            },
          }}
        >
          <FormControlLabel
            value="false"
            control={<Radio sx={sxStyle} />}
            label="Regular"
          />
          <FormControlLabel
            value="true"
            control={<Radio sx={sxStyle} />}
            label="Irregular"
          />
        </RadioGroup>
        <StyledSelectTypeVerbError>
          {errors.isIrregular?.message}
        </StyledSelectTypeVerbError>
      </FormControl>
    );
  }
);

export default SelectTypeVerb;
