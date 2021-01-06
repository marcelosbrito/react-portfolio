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
import project2 from "../images/javascript-fullstack.jpg"
import project3 from "../images/react-redux.jpg"
import project4 from "../images/html-css-javascript-lg.jpg"
import project5 from "../images/sass_.png"
import project6 from "../images/html-css.jpg"

const useStyles = makeStyles ({
  mainContainer: {
    background: '#233',
    height: '100%'
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto" 
  }
});

const Portfolio = () => {
  const classes = useStyles ();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">

      <Grid item xs={12} sm={8} md={6}>
          {/* Project 1 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 1" height="140" image={project1} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Exercise Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                This is a exercise tracker APP. Created with: MongoDB, Expresss, React and Node.js, Firebase deploy, POSTMAN and CI/CD pipeline with Gitlab.
                </Typography>
              </CardContent>
            </CardActionArea>  
              <CardActions>
                <Button href="https://github.com/marcelosbrito/mern-exercise-traker" target="_blank" rel="noopener" size="small" color="primary">
                  Github
                </Button>
                <Button href="https://mern-exercise-tracker.firebaseapp.com/" target="_blank" rel="noopener" size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions> 
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          {/* Project 2 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 2" height="140" image={project2} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo illum est excepturi, tempora tenetur.
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button href="#" target="_blank" rel="noopener" size="small" color="primary">
                  Github
                </Button>
                <Button href="#" target="_blank" rel="noopener" size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>  
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          {/* Project 3 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 3" height="140" image={project3} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo illum est excepturi, tempora tenetur.
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button href="#" target="_blank" rel="noopener" size="small" color="primary">
                  Github
                </Button>
                <Button href="#" target="_blank" rel="noopener" size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>  
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          {/* Project 4 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="To Do List" height="140" image={project4} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  To Do List
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a ToDo List created with HTML, CSS and JavaScript, using Document Object Model, Events and Functions.
                </Typography>
              </CardContent>
            </CardActionArea>  
              <CardActions>
                <Button href="https://github.com/marcelosbrito/todo-list" target="_blank" rel="noopener" size="small" color="primary">
                  Github
                </Button>
                <Button href="https://marcelosbrito.github.io/todo-list/" target="_blank" rel="noopener" size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          {/* Project 5 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Sass" height="140" image={project5} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Sass Portfolio
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Responsive Portfolio Web Site created with SASS & JS.
                </Typography>
              </CardContent>
            </CardActionArea>  
              <CardActions>
                <Button href="https://github.com/marcelosbrito/marcelobrito-portfolio" target="_blank" rel="noopener" size="small" color="primary">
                  Github
                </Button>
                <Button href="https://marcelosbrito.github.io/marcelobrito-portfolio/" target="_blank" rel="noopener" size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions> 
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          {/* Project 6 */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="HTML-CSS" height="140" image={project6} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Business Front-End
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a reponsive Business Front-End Web Site created with HTML & CSS-Grids.
                </Typography>
              </CardContent>
            </CardActionArea>  
              <CardActions>
                <Button href="#https://github.com/marcelosbrito/css-grid" target="_blank" rel="noopener" size="small" color="primary">
                  Github
                </Button>
                <Button href="https://marcelosbrito.github.io/css-grid/" target="_blank" rel="noopener" size="small" color="primary">
                  Live Demo
                </Button>
                <Button href="https://marcelosbrito.github.io/landing-page/" target="_blank" rel="noopener" size="small" color="primary">
                  Live Demo 2
                </Button>
              </CardActions> 
          </Card>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Portfolio;
