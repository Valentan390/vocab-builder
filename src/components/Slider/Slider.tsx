import React from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0°C",
  },

  {
    value: 100,
    label: "100°C",
  },
];

const valuetext = (value: number) => {
  return `${value}°CCCCCC`;
};

const SliderBar = ({ num = 38 }) => {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={num}
        aria-label="Always visible"
        defaultValue={38}
        // getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        // readOnly
        // disabled
      />
    </Box>
  );
};

export default SliderBar;
