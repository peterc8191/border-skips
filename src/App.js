import "./App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/header/Header";
import MainFeaturedPost from "./components/feature-post/MainFeaturedPost";
import FeaturedPost from "./components/feature-post/FeaturedPost";
import Footer from "./components/footer/Footer";

import yard4 from "./images/4-Yard.jpg";
import yard6 from "./images/6-yard.jpg";
import yard8 from "./images/8-yard.jpg";
import yard12 from "./images/12-yard.jpg";
import pageHeader from "./images/Site-Page-Header.png";
import { Divider, Typography } from "@mui/material";
import Services from "./components/services/services";
import WasteCalculator from "./components/waste-caculator/WasteCaculator";

const mainFeaturedPost = {
  description:
    "Welcome to Border Skip Hire, your trusted waste management partner operating in Newry, Dundalk, Carlingford, and South Armagh. We specialize in providing efficient and reliable skip hire services for residential, commercial, and industrial needs. ",
  image: pageHeader,
};

const featuredPosts = [
  {
    title: "4 Yard Skip",
    description:
      "4 yard skips, which are also known as mini skips, are a popular choice for residential waste disposal with the capacity to hold the equivalent of 40 bin bags of waste.",
    image: yard4,
    imageLabel: "4 Yard Skip",
  },
  {
    title: "6 Yard Skip",
    description:
      "6 yard skips are more commonly known as small builders skips. As the name suggests, they are great for small building projects holding the equivalent of 60 bin bags of waste.",
    image: yard6,
    imageLabel: "6 Yard Skip",
  },
  {
    title: "8 Yard Skip",
    description:
      "8 yard skips are the most popular skip in the UK due to its wide range of uses. While it is called a builders skip, there are many other uses. An 8 yard skip is ideal for builders waste, household clearances, industrial waste and commercial waste management.",
    image: yard8,
    imageLabel: "8 Yard Skip",
  },
  {
    title: "12 Yard Skip",
    description:
      "Like most large skips, 12 yard skips are best suited for trade or commercial waste removal. Large skips are ideal for larger projects like shop fittings, green waste, and light construction waste including wood, metal and plastics.",
    image: yard12,
    imageLabel: "12 Yard Skip",
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Header title="Border Skip Hire" />
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Container maxWidth="lg">
          <Divider>
            <Typography variant="h5">Skips available</Typography>
          </Divider>
          <Grid container spacing={4} alignItems="stretch">
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </Container>
        <Services />
        <Container maxWidth="lg">
          <Divider>
            <Typography variant="h5">Waste Calculator</Typography>
          </Divider>
          <WasteCalculator />
        </Container>
      </main>

      <Footer title="Contact Us" description="Some contact details here" />
    </ThemeProvider>
  );
}
