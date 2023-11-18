import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Avatar, Box, Container } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function Services(props) {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#03C03C",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        padding: "30px",
        marginTop: "20px",
      }}
    >
      <Container>
        <Typography variant="h4" textAlign={"center"} sx={{ paddingBottom: "10px" }}>
          Why Use Border Skip Hire?
        </Typography>
        <Grid container>
          <Grid item container md={4} sm={12} sx={{ marginBottom: "10px" }}>
            <Grid container item xs={3} direction="column" justifyContent="center">
              <Avatar sx={{ width: 56, height: 56, justifyContent: "center" }}>
                <EmojiEventsIcon />
              </Avatar>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">Top Quality, Best Value Skip Hire Services.</Typography>
              <Typography variant="subtitle1">
                We provide a first-in-class service for skip hire and all at the best prices in your area.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md={4} sm={12} sx={{ marginBottom: "10px" }}>
            <Grid container item xs={3} direction="column" justifyContent="center">
              <Avatar sx={{ width: 56, height: 56 }}>
                <PeopleIcon />
              </Avatar>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">You Get 15+ Years Of Recycling Experience.</Typography>
              <Typography variant="subtitle1">
                Established in 2002, we have accumulated unrivalled knowledge of the waste industry.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md={4} sm={12} sx={{ marginBottom: "10px" }}>
            <Grid container item xs={3} direction="column" justifyContent="center">
              <Avatar sx={{ width: 56, height: 56 }}>
                <ThumbUpIcon />
              </Avatar>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">We Make Waste Management, Easy.</Typography>
              <Typography variant="subtitle1">Book a skip and we handle the rest! </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
