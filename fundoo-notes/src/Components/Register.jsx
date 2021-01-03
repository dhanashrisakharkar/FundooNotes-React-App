import React, { Component } from 'react';
import "./signup.css"
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import signUp from "../Services/service";
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card , Checkbox} from '@material-ui/core';
import { withRouter } from "react-router-dom";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';


const regexValidateEmail = new RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$/
);
const regexvalidatePassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);
const regexvalidateName = new RegExp(/^[A-Z]{1}[a-z]{3,}$/);

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Rpassword: "",
      errorValid: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        Rpassword: false,
        showPassword : false,
      },
      enable: true,
      service: "advance",
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        Rpassword: "",
      },
    };
  }
  clickShowPass= () => {
    this.setState({
      ...this.state,
      showPassword:!this.state.showPassword,
    });
  };

  handleFirstNameInput = (event) => {
    event.preventDefault();
    this.setState({
      firstName: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexvalidateName.test(this.state.firstName)) {
      errors.firstName = "firstName is not valid";
      validate = true;
    } else {
      errors.firstName = "";
    }
    this.setState({
      errorValid: { firstName: validate },
      errors: { firstName: errors.firstName },
    });
  };
  handleLastNameInput = (event) => {
    event.preventDefault();
    this.setState({
      lastName: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexvalidateName.test(event.target.value)) {
      errors.lastName = "lastName is not valid";
      validate = true;
    } else {
      errors.lastName = "";
    }
    this.setState({
      errorValid: { lastName: validate },
      errors: { lastName: errors.lastName },
    });
  };

  handleEmailInput = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexValidateEmail.test(event.target.value)) {
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
  handlePasswordInput = (event) => {
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    if (!regexvalidatePassword.test(event.target.value)) {
      errors.password =
        "password is not valid";
      validate = true;
    } else {
      errors.password = "";
    }
    this.setState({
      errorValid: { password: validate },
      errors: { password: errors.password },
    });
  };
  handleReapetPasswordInput = (event) => {
    event.preventDefault();
    this.setState({
      hidePassword: true,
      Rpassword: event.target.value,
      icEye: 'visibility-off',
    });
    let errors = this.state.errors;
    let validate = false;
    if (this.state.password !== this.state.Rpassword) {

      errors.Rpassword =
        "password did not match";
      validate = true;

    } else if (this.state.password === this.state.Rpassword) {
      errors.Rpassword = true;
    }
    this.setState({

      errorValid: { Rpassword: validate },
      errors: { Rpassword: errors.Rpassword },
    });
   
  };


  handleSubmit = (event) => {
    if (
      this.state.email === "" &&
      this.state.password === "" &&
      this.state.firstName === "" &&
      this.state.lastName === ""
    ) {
      this.setState({
        errorValid: {
          email: true,
          password: true,
          firstName: true,
          lastName: true,
        },
        errors: {
          email: "email not be empty",
          password:
            "password not be empty",
          firstName: "firstname not be empty",
          lastName: "lastname not be empty",
        },
      });
    }

    if (this.validateForm() && this.state.email !== "" && this.state.password !== "" && this.state.lastName !== "" && this.state.firstName !== "") {
      console.log("valid form");
      let signUpData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        service: this.state.service,
        email: this.state.email,
        password: this.state.password,
      };
      signUp(signUpData).then((response) => {
        console.log(response);
      });
      { String(this.props.history.push("/login")) };

      // this.setState({
      //   email: "",
      //   firstName: "",
      //   lastName: "",
      //   password: "",
      // });
    } else {
      console.log("invalid form");
    }

  };

  validateForm() {
    let valids = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (valids = false)
    );
    return valids;
  }
  handleBackSubmit() {
    this.props.history.push("/login");
  }
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
};

handleMouseDownPassword = (event) => {
    event.preventDefault();
};

  render() {
    return (
      <div className="wrapper">
        <Card id='formcard'>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
              {/* <Avatar className="Avtar">
                            <LockOutlinedIcon />
                        </Avatar> */}
                        <Typography className="app_name" variant="h5" color="textSecondary">
          <span style={{ color: "#0606f8" }}>F</span>
              <span style={{ color: "#d10303" }}>u</span>
              <span style={{ color: "#f0b000" }}>n</span>
              <span style={{ color: "#0606f8" }}>d</span>
              <span style={{ color: "green" }}>o</span>
              <span style={{ color: "#d10303" }}>o</span>
          </Typography>
          
              <Typography component="h1" variant="h5" className="header">
              <div className="header-content">
                Sign up
                </div>
                    </Typography>
              <form className="form">
                <div className="address">
                  <Grid container spacing={2}>

                    <Grid item xs={12} sm={6} style={{ marginTop: 3, marginBottom: 3 , marginRight:-20 , marginLeft: -5}}>
                      <div  className="name">
                        <div className="first-Name">
                        <TextField
                         height="100"
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus="fname"
                          value={this.state.firstName}
                          error={this.state.errorValid.firstName}
                          onChange={this.handleFirstNameInput}
                          helperText={this.state.errors["firstName"]}
                        />
                        </div>
                      </div>
                    </Grid>
                    <Grid  item xs={12} sm={6} style={{ marginTop: 2, marginBottom: 3 ,marginLeft:20 , marginRight:-30}}>
                      <div  className="last-name">
                      <div  className="first-Name">
                        <TextField
                         height="8"
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="lname"
                          value={this.state.lastName}
                          error={this.state.errorValid.lastName}
                          onChange={this.handleLastNameInput}
                          helperText={this.state.errors["lastName"]}
                        />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}  >
                      <Grid style={{ marginTop: 25, marginBottom: 3 ,marginLeft:-3}} >
                        <div className="email-address">
                          <div className="first-Name" >
                          <TextField
                           height="8"
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={this.state.email}
                            error={this.state.errorValid.email}
                            onChange={this.handleEmailInput}
                            helperText={this.state.errors["email"]}
                          />
                          </div>
                        </div>
                      </Grid>
                    </Grid>


                    <Grid item xs={12} >
                      <Grid  style={{ marginTop: 25, marginBottom: 3 ,marginLeft:-3 ,height:5}}>
                        <div  className="passwrord-Id">
                          <div className="first-Name">
                          <TextField
                            height="8"
                            variant="outlined"
                            required
                            fullWidth
                            id="password"
                            label="password"
                            name="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            error={this.state.errorValid.password}
                            onChange={this.handlePasswordInput}
                            helperText={this.state.errors["password"]}
                            type={this.state.showPassword ? 'text' : 'password'}
                            InputProps={{
                              endAdornment: <InputAdornment position="end">  <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={this.handleClickShowPassword}
                                  onMouseDown={this.handleMouseDownPassword}
                                  edge="end"
                              >
                                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton> </InputAdornment>,
                          }}
                          />
                          </div>

                        </div>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}  >
                      <Grid style={{ marginTop: 55, marginBottom: 3 , marginLeft:-6 }}>
                        <div  className="first-Name">
                          <div >
                          <TextField
                          className="repeat-password"
                           height="8"
                            variant="outlined"
                            required
                            fullWidth
                            name="rpassword"
                            label="confirm Password"
                            type="rpassword"
                            id="rpassword"
                            autoComplete="current-password"
                            // value={this.state.Rpassword}
                            error={this.state.errorValid.Rpassword}
                            onChange={this.handleReapetPasswordInput}
                            helperText={this.state.errors["Rpassword"]}
                            type="text"
                            type={this.state.showPassword ? 'text' : 'password'}
                          />
                          </div>
                          
                        </div>
                      </Grid>
                    </Grid>

                  </Grid >
                   
                  <div className="createAccount">
                  <Grid  style={{ marginTop: 45, marginLeft: -1  }}>
                    <div className="Button">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                    // background-color="deepskyblue"
                    >
                      Sign Up
                </Button>
                </div>
                </Grid>

                    <div className="forgot-password ">
                      <p align="left">
                        Already registered ? <a href="http://localhost:4200/">log in</a>
                      </p>
                    </div>

                  </div>
                </div>
              </form>
            </div>
            <Box mt={2}>

            </Box>
          </Container>
        </Card >
      </div>
    );
  }
}
export default withRouter(Register);  