import React from "react";
import "./forgetpassword.css";
import userServices from "../Services/service";
import { TextField, Card, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
//import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";

const regexValidateEmail = new RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$/
);

class ForgetPassword extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    email:"",
    forgetMsg:"",

    errorValid:{
      email:false,

    },
    errors:{
      email:"",
    },
  };
    
  }
  handleEmailInput = (event) => {
     event.preventDefault();
    this.setState({
      email: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexValidateEmail.test(this.state.email)) {
      errors.email = "email is not valid";
      validate = true;
    } else {
      errors.email = "";
    }
    this.setState({
      errorValid: { email: validate },
      errors: { email: errors.email },
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    let errs = {};
    let formIsValid = true;
    // let errors = this.state.errors
    this.setState({
      email: "",
    })
    formIsValid = "msg has been send"
    const errors = this.state.errors;
    if ( errors.email || this.state.email === "") {
      this.setState({
        forgetMsg: true,
        forgetMsg: "Enter proper email-ID.   ",
        
      });
      formIsValid = false;
      errs["email"] = "* required  valid mail id";
     } 
     // else{
    //   this.state.email;
    // }
    // } else {
    //   let sendData = {
    //     "email": this.state.email,
    //   };
    let sendData = {
           "email": this.state.email,
         };
         console.log(sendData)

      userServices.forgetpassword(sendData)
        .then((response) => {
          if (response === 200) {
            this.setState({
              forgetOpen: true,

            });
            this.forgetMsg = "mail has sent";
            this.props.history.push("/login");
          } else {
            this.setState({
              forgetOpen: true,

            });
            this.forgetOpen = "msg not sent";
          }
        })
        .catch();


    }
  
  render() {
    return (
      
      <div className="wrapper-forget">
        <Card className="form-card">
          <div className="forget_Form">

            <Typography className="app_name" variant="h5" color="textSecondary" style={{ marginTop: 30 }}>
              <span style={{ color: "#0606f8" }}>F</span>
              <span style={{ color: "#d10303" }}>u</span>
              <span style={{ color: "#f0b000" }}>n</span>
              <span style={{ color: "#0606f8" }}>d</span>
              <span style={{ color: "green" }}>o</span>
              <span style={{ color: "#d10303" }}>o</span>
            </Typography>

            <Grid item xs={12} >
              <Grid style={{ marginTop: 8, marginBottom: 10 }} container justify="center">
                <div className="firstName">
                  <TextField
                    required
                    variant="outlined"
                    label="Email"
                    type="text"
                    id="emailForg"
                    value={this.state.email}

                    error={this.state.errorValid.email}
                    
                    onChange={this.handleEmailInput}
                    helperText={this.state.errors["email"]}
                  />
                </div>
              </Grid>
            </Grid>
            <div className="createAccount">
              <Grid container justify="center">
                <Button
                  type="submit"

                  variant="contained"
                  color="secondary"
                  // background-color="deepskyblue"
                  onClick={this.onSubmit}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid >

                <p align="left" className="forgotPassword ">
                  <a href="/">log in</a>
                </p>

              </Grid>
            </div>

          </div>
        </Card>
      </div>
    );
  }
}

export default ForgetPassword;