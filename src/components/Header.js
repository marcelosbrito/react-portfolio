import React from 'react'
import {
  Avatar,
  Grid,
  Typography,
  Box
} from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";
import { makeStyles } from "@material-ui/core/styles";

// CSS STYLES
const useStyles = makeStyles (theme=>({
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(15),
    height: theme.spacing(15)
  },
  title: {
    color: "tomato"
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
})
)

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Marcelo Brito" />
      </Grid>
      <Typography	className={classes.title} variant="h4">
        <Typed strings={['Marcelo Brito']} typeSpeed={30} />
      </Typography>
      <br/>
      <Typography	className={classes.subtitle} variant="h5">
        <Typed 
          strings={[
            'Web Development',
            'MERN Stack',
            'SEO'
            ]} 
            typeSpeed={60}
            backSpeed={80}
            loop  />
      </Typography>
    </Box>
  )
}

export default Header
