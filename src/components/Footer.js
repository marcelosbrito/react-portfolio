import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

//STYLES
const useStyles = makeStyles ({
  root: {
    "& .MuiBottomNavigationAction-root":{
      minWidth: 0,
      maxWidth: 250
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem"
      }
    }
  }
})

//BUTTONS LINKS
const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation width="auto" style={{background: "#222"}}>

      <BottomNavigationAction  
        href="https://www.linkedin.com/in/marcelo-brito-23096733/"
        target="_blank" 
        rel="noopener"
        style={{padding: 0}} 
        icon={<LinkedInIcon/>} 
        className={classes.root} />

      <BottomNavigationAction
        href="https://github.com/marcelosbrito"
        target="_blank" 
        rel="noopener"
        style={{padding: 0}} 
        icon={<GitHubIcon/>} 
        className={classes.root} />

      <BottomNavigationAction 
        href="https://twitter.com/86_msb"
        target="_blank" 
        rel="noopener"
        style={{padding: 0}} 
        icon={<TwitterIcon/>} 
        className={classes.root} />
      
    </BottomNavigation>
  )
}

export default Footer
