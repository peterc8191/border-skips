import { useState } from "react";

import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0 Bags",
  },
  {
    value: 30,
    label: "30 Bags",
  },
  {
    value: 50,
    label: "50 Bags",
  },
  {
    value: 60,
    label: "60 Bags",
  },
  {
    value: 80,
    label: "80 Bags",
  },
];

function valuetext(value) {
  return `${value} Bags`;
}

function WasteCalculator() {
  const [value, setValue] = useState(0);
  const valueChange = (e) => {
    setValue(e.value);
  };

  return (
    <Slider
      defaultValue={value}
      onChange={valueChange}
      getAriaValueText={valuetext}
      step={10}
      marks={marks}
      valueLabelDisplay="on"
    />
  );
}

export default WasteCalculator;
