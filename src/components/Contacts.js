import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Box, Button, Grid } from "@material-ui/core";
import { ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import SendIcon from "@material-ui/icons/Send";
import Axios from "axios";
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
  },
  success: {
    color: "#57A773",
    padding: "10px 15px"
  },
  err: {
    color: "#EE6352",
    padding: "10px 15px"
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

const InputValidator = withStyles ({
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
})(TextValidator);

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailsent: null
    }
  }

  onNameChange(event) {
      this.setState({name: event.target.value})
  }
  onEmailChange(event) {
      this.setState({email: event.target.value})
  }
  onMsgChange(event) {
      this.setState({message: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true
    });

    Axios.post('http://localhost:3030/send', this.state)
      .then(res => {
        console.log(res.data);
        if(res.data.err) {
          this.setState({
            disabled: false,
            emailsent: false
          }); 
        } else {
          this.setState({
            disabled: false,
            emailsent: true 
          });
        }
      })  
      .catch(err => {
        console.log(err);
        this.setState({
          disabled: false,
          emailsent: false 
        });
      })
  }

  render(){
    const { classes } = this.props;
    return (
      
      <Box component="div" style={{ background: "#233", height:"100vh" }}>
        <Navbar />
        <Grid container justify="center">
          <ValidatorForm component="form" className={classes.form} onSubmit={this.handleSubmit} onError={errors => console.log(errors)}>
            <Typography variant="h5" style={{color: "tomato", textAlign:"center", textTransform: "uppercase"}}>
              hire or contact me...
            </Typography>
              <InputField fullWidth={true} label="Name" name="name" variant="outlined" inputProps={{ style: { color: "white" } }} margin="dense" size="medium" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              <br />
              <InputValidator fullWidth={true} label="E-mail" name="email" variant="outlined"  inputProps={{ style: { color: "white" } }} margin="dense" size="medium" value={this.state.email} onChange={this.onEmailChange.bind(this)} validators={["required", "isEmail"]} errorMessages={["this field is required", "email is not valid"]} />
              <br />
              <InputField fullWidth={true} label="Message" name="message" multiline rows={4} variant="outlined"  inputProps={{ style: { color: "white" } }} margin="dense" size="medium" value={this.state.message} onChange={this.onMsgChange.bind(this)} />
              <br />
              <Button variant="outlined" type="submit" fullWidth={true} endIcon={<SendIcon/>} className={classes.button} disabled={this.state.disabled}>
                contact me
              </Button>
              <br />
              {this.state.emailsent === true && <p className={classes.success}>E-mail Sent</p>}
              {this.state.emailsent === false && <p className={classes.err}>E-mail Not Sent</p>}
          </ValidatorForm>
        </Grid>      
      </Box>
    );
  };
};
export default withStyles(useStyles, { withTheme: true })(Contacts)
