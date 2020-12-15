import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography, 
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button } from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/mern-stack.jpg"

const Portfolio = () => {
  return (
    <Box component="div">
      <Navbar />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          {/* Project 1 */}
          <Card>
            <CardActionArea>
              <CardMedia component="img" alt="Project 1" height="140" image={project1} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo illum est excepturi, tempora tenetur.
                </Typography>
              </CardContent>

            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio;
