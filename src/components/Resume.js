import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles (theme =>  ({
  mainContainer: {
    background: "#233"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after":{
      content: "''",
      position: "absolute"
    },
    "&:before":{
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float:"right",
        margin:"1rem",
        borderColor: "tan"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.575rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.1rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
          float:"none",
          margin:"0 auto"
      },
      "&:nth-of-type(2n):before": {
        display:"none"
      }
    }
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase"
  }

}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>

        <Box component="div" className={classes.timeLine}>

        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2014 - Current</Typography>
          
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Self-Employed
            </Typography>
            <Typography variant="body1" align="center" style={{color: "tomato"}}>
              Web Developer and SEO
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
              Full Stack E-commerce Development with modern technologies like MERN (MongoDB, Express, React & Node). Digital marketing strategies involving SEO, Landing-Page Optimisation, Link-Building.
            </Typography>
          </Box>

          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2012 - 2014</Typography>
          
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              SQL Developer
            </Typography>
            <Typography variant="body1" align="center" style={{color: "tomato"}}>
              I4 PRO
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
              Responsible for the PL/SQL development, implementation and maintenance of accounting and capitalization system in insurance companies.
            </Typography>
          </Box>



          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2010 - 2012</Typography>

          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              C# Developer
            </Typography>
            <Typography variant="body1" align="center" style={{color: "tomato"}}>
              R2Tech
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
              Assisted senior developer with testing and development of new reconciliation and accounting of receivables product for airlines companies. Working with Genexus framework application.
            </Typography>
          </Box>

          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2009 - 2010</Typography>

          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Support Internship
            </Typography>
            <Typography variant="body1" align="center" style={{color: "tomato"}}>
              GXS Brasil S/A
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
              Analysis, diagnosis, customer support and problem solving, sending electronic corrections, conducting connection checklists in a b2b integration service.
            </Typography>
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default Resume;
