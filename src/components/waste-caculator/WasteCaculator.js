import { useState, useEffect } from "react";

import Slider from "@mui/material/Slider";
import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";

import yard4 from "../../images/4-Yard.jpg";
import yard6 from "../../images/6-yard.jpg";
import yard8 from "../../images/8-yard.jpg";
import yard12 from "../../images/12-yard.jpg";

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

const skips = {
  noSkip: {
    title: "No Recommendation yet",
    bagCapacity: "",
    wheelBarrowCapacity: "",
    image: yard4,
    imageLabel: "Skip Lorry",
  },
  "4yard": {
    title: "4 Yard Skip",
    bagCapacity: "30-50 bags",
    wheelBarrowCapacity: "9 Wheelbarrow loads",
    image: yard4,
    imageLabel: "4 Yard Skip",
  },
  "6yard": {
    title: "6 Yard Skip",
    bagCapacity: "50-60 bags",
    wheelBarrowCapacity: "19 Wheelbarrow loads",
    image: yard6,
    imageLabel: "6 Yard Skip",
  },
  "8yard": {
    title: "8 Yard Skip",
    bagCapacity: "60-80 bags",
    wheelBarrowCapacity: "30 Wheelbarrow loads",
    image: yard8,
    imageLabel: "8 Yard Skip",
  },
  "12yard": {
    title: "12 Yard Skip",
    bagCapacity: "80-120 bags",
    wheelBarrowCapacity: "70 Wheelbarrow loads",
    image: yard12,
    imageLabel: "12 Yard Skip",
  },
};

function WasteCalculator() {
  const [value, setValue] = useState(0);
  const [recommendation, setRecommendation] = useState(skips.noSkip);

  const valueChange = (e, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    if (value < 30) {
      setRecommendation(skips.noSkip);
    } else if (value >= 30 && value < 50) {
      setRecommendation(skips["4yard"]);
    } else if (value >= 50 && value < 60) {
      setRecommendation(skips["6yard"]);
    } else if (value >= 60 && value < 80) {
      setRecommendation(skips["8yard"]);
    } else if (value >= 80 && value < 120) {
      setRecommendation(skips["12yard"]);
    }
  }, [value]);

  return (
    <Grid container spacing={4}>
      <Grid item md={6}>
        <Typography variant="subtitle1" color="inherit" align="center">
          {"Slide the to the number of bages of waste and we will recommend a skip"}
        </Typography>
        <Slider
          defaultValue={0}
          onChange={valueChange}
          getAriaValueText={valuetext}
          step={10}
          marks={marks}
          valueLabelDisplay="on"
        />
      </Grid>
      <Grid item md={6}>
        <Card>
          <CardHeader>
            <Typography gutterBottom variant="h5">
              {"Our Recommendation"}
            </Typography>
          </CardHeader>
          <CardMedia
            sx={{ backgroundSize: "100% 100%", minHeight: "150px" }}
            image={recommendation.image}
            title={recommendation.imageLabel}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recommendation.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {recommendation.bagCapacity}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {recommendation.wheelBarrowCapacity}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default WasteCalculator;
