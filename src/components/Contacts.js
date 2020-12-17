import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Box, Button, Grid } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = theme => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato"
  }
});

const InputField = withStyles ({
  root: {
    "& label.Mui-focused": {
      color:"tomato"
    },
    "& label": {
      color: "tan"
    },
    "& .MuiOutlinedInput-root":{
      "& fieldset": {
      borderColor: "tan"
      },
    "&:hover fieldset": {
      borderColor: "tan"
      },
    "&.Mui-focused fieldset": {
      borderColor: "tan"
      } 
    }
  }
})(TextField);

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disable: false,
      emailsent: null
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value =  target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    })
  }
  
  render(){
    const { classes } = this.props;
    return (
      
      <Box component="div" style={{ background: "#233", height:"100vh" }}>
        <Navbar />
        <Grid container justify="center">
          <Box component="form" className={classes.form} onSubmit={this.handleSubmit}>
            <Typography variant="h5" style={{color: "tomato", textAlign:"center", textTransform: "uppercase"}}>
              hire or contact me...
            </Typography>
              <InputField fullWidth={true} label="Name" name="name" variant="outlined" inputProps={{ style: { color: "white" } }} margin="dense" size="medium" value={this.state.name} onChange={this.handleChange} />
              <br />
              <InputField fullWidth={true} label="E-mail" name="email" variant="outlined"  inputProps={{ style: { color: "white" } }} margin="dense" size="medium" value={this.state.email} onChange={this.handleChange} />
              <br />
              <InputField fullWidth={true} label="Message" name="message" multiline rows={4} variant="outlined"  inputProps={{ style: { color: "white" } }} margin="dense" size="medium" value={this.state.message} onChange={this.handleChange} />
              <br />
              <Button variant="outlined" type="submit" fullWidth={true} endIcon={<SendIcon/>} className={classes.button} disabled={this.state.disable}>
                contact me
              </Button>

              {this.state.emailsent === true && <p className="d-inline success-msg">Email Sent</p>}
              {this.state.emailsent === false && <p className="d-inline err-msg">Email Not Sent</p>}
          </Box>
        </Grid>      
      </Box>
    );
  };
};
export default withStyles(useStyles, { withTheme: true })(Contacts)
