import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function FeaturedPost(props) {
  const { post } = props;
  return (
    <Grid item xs={12} md={6} lg={3} style={{ display: "flex" }}>
      <Card>
        <CardMedia
          sx={{ backgroundSize: "100% 100%", minHeight: "150px" }}
          image={post.image}
          title={post.imageLabel}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
