import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Services from "../../Services/service";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import "./login.css"
import { withRouter } from 'react-router';
import Snackbar from "@material-ui/core/Snackbar";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      emailFlag: false,
      passwordError: "",
      passwordFlag: false,
      showPassword: false,
      snackbarOpen: false,
      snackbarMessage: "",
    };
  }

  nextPath(path) {
    this.props.history.push(path);
  }



  clickShowPass = () => {
    this.setState({
      ...this.state,
      showPassword: !this.state.showPassword,
    });
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      emailFlag: false,
      passwordError: "",
      passwordFlag: false,
    };

    if (this.state.email.length == 0) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Enter your Email ";
    }
    if (!/[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/.test(this.state.email)) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Please Enter Correct Email";
    }
    if (this.state.password.length == 0) {
      errors.passwordFlag = true;
      isError = true;
      errors.passwordError = "Enter Password";
    }

    this.setState({
      ...errors,
    });

    return isError;
  };
  SnackbarClose = (e) => {
    this.setState({ snackbarOpen: false });
  };

  handleCloseSnackbar = () => {
    this.setState({ snackbarOpen: false });
  };

// submitting data on token and localstorage 
  onSubmit = (event) => {
    event.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        email: "",
        emailFlag: false,
        emailError: "",
        password: "",
        passwordFlag: false,
        passwordError: "",
      });
      let loginData = {
        email: this.state.email,
        password: this.state.password,
      };
      Services
        .login(loginData)
        .then((response) => {
          if (response.status === 200) {
            this.setState({
              snackbarOpen: true,
              snackbarMessage: "Login Succesfully.",
            });
            localStorage.setItem("token", response.data.id);
            localStorage.setItem("firstName", response.data.firstName);
            localStorage.setItem("lastName", response.data.lastName);
            localStorage.setItem("email", response.data.email);
            setTimeout(() => {
              this.props.history.push("/dashboard");
            }, 2000);
          } else {
            this.setState({
              snackbarOpen: true,
              snackbarMessage: "Enter correct credentials",
            });
          }
        })
        .catch();
    }
  };

// render the html page for login form
  render() {
    return (
      <div className="wrapper-tool">
        <Card id='form'>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
              {/* <Avatar className="Avtar">
                            <LockOutlinedIcon />
                        </Avatar> */}
              <Typography component="h1" variant="h5" className="head">
                Sign In
                         </Typography>
              <form className="form">
                <Grid container spacing={4}>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      helperText={this.state.emailError}
                      error={this.state.emailFlag}
                      onChange={(e) => this.change(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="password"
                      label="password"
                      name="password"
                      autoComplete="current-password"
                      value={this.state.password}
                      onChange={(e) => this.change(e)}
                      error={this.state.passwordFlag}
                      helperText={this.state.passwordError}
                    />
                  </Grid>
                </Grid >


                <Grid style={{ marginTop: 8, marginBottom: 10 }} >
                  <Grid style={{ padding: 5 }} container justify="flex-end" >
                    <Button
                      type="submit"

                      variant="contained"
                      color="secondary"
                      background-color="deepskyblue"
                      onClick={(e) => this.onSubmit(e)}

                    >
                      Sign In
                            </Button>
                  </Grid>
                </Grid>
                <Grid className="extra-tool"  >
                  <Grid container justify="flex-start">

                    <Grid item >

                      <Link href="http://localhost:4200/register" color="textPrimary" >

                        create account
                                        </Link>


                    </Grid >
                  </Grid>
                </Grid>
                <Grid container justify="flex-end" justify style={{ marginTop: 8, marginBottom: 10 }} className="link" style={{ padding: -1 }}>

                  <Link href="http://localhost:4200/forgetPassword" color="textPrimary" >

                    forget password
                                        </Link>

                </Grid>
              </form>
            </div>
            <Box mt={5}>

            </Box>
          </Container>
        </Card >
      </div>
    );
  }
}
export default withRouter(Login);