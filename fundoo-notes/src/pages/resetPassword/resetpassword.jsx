import React, { Component } from "react";
import { Card, Typography, Button, CardContent, TextField } from '@material-ui/core/';
import "./resetPassword.css";
//import axios from "axios";
//import Input from "../components/Input";
import UserService from "../../Services/service";

//var userservice = new UserService();

// Reset password page using class component
export default class EmailVerification extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordError: "",
            passwordFlag: false,
            conformPassword: "",
            conformPasswordError: "",
            conformPasswordFlag: false,
            setOpen: false,
            open: false,

        };
    }
    token = this.props.match.params.token;

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            passwordError: "",
            passwordFlag: false,
            conformPasswordError: "",
            conformPasswordFlag: false,
        };

        if (this.state.password.length == 0) {
            errors.passwordFlag = true;
            errors.conformPasswordFlag = true;
            isError = true;
            errors.passwordError = "Enter Password";
        }

        if (this.state.conformPassword != this.state.password) {
            errors.conformPasswordFlag = true;
            isError = true;
            errors.conformPasswordError = "Passwords didn't match.";
        }

        this.setState({
            ...errors,
        });

        return isError;
    };

    // to reset password the password data will be send on token and set on localStorage 
    onSubmit = (e) => {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
            this.setState({
                conformPasswordFlag: false,
                conformPasswordError: "",
                passwordFlag: false,
                passwordError: "",
                password: "",
                conformPassword: "",
            });
            let resetPasswordData = {
                newPassword: this.state.password,

            };
            UserService
                .resetpassword(resetPasswordData, this.token).then((result) => {
                    let obj = JSON.stringify(result);
                    console.log("Password reset successful" + obj);
                    this.setState({ snackType: "success", snackMessage: "Password reset successful", open: true, setOpen: true })
                    this.nextPath("../login");
                })
                .catch((error) => {
                    console.log("Password reset Failed" + error);
                    this.setState({ snackType: "error", snackMessage: "Password reset Failed", open: true, setOpen: true })
                });
        } else {
            console.log("Reset Failed");
        }
    };



    render() {
        // console.log(this.state.email);


        return (
            <div className="wrapper-repeat">

                <Card id='verify-card'>

                    <div className='label-page' >
                        <Typography className="appName" variant="h5" color="textSecondary" style={{ marginTop: 30 }}>
                            <span style={{ color: "#0606f8" }}>F</span>
                            <span style={{ color: "#d10303" }}>u</span>
                            <span style={{ color: "#f0b000" }}>n</span>
                            <span style={{ color: "#0606f8" }}>d</span>
                            <span style={{ color: "green" }}>o</span>
                            <span style={{ color: "#d10303" }}>o</span>
                        </Typography>
                        <div>
                            <Typography className='label-text' align='center' variant='h5' component='h4' >Password Reset</Typography>
                            <Typography className='label-text' component='p' value={this.state.password}
                            ></Typography>
                        </div>
                    </div>
                    <CardContent>{this.state.status ?
                        (
                            <div><Typography align='center' variant='h5' component='h4' >{this.state.message}</Typography>
                                <Typography align='center' component='p' >Click On the Button to go to Login page</Typography>
                                <Button fullWidth variant="contained" color="primary" type='submit'  >Login Page</Button>
                            </div>
                        )
                        :
                        (
                            <div> <Typography align='center' variant='h5' component='h4' >Enter New Password</Typography>
                                <div className=" password-type">
                                    <TextField
                                        height="8"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        className="input"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        name="password"
                                        onChange={this.getDataFromInput}
                                        marginTop={3}
                                        onChange={(e) => this.change(e)}
                                        error={this.state.passwordFlag}
                                        helperText={this.state.passwordError}
                                    />
                                </div>
                                <div className="repeat-password">
                                    <TextField
                                        height="8"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        className="input"
                                        label="Conform"
                                        variant="outlined"
                                        type="password"
                                        name="conformPassword"
                                        onChange={this.getDataFromInput}
                                        value={this.state.conformPassword}
                                        helperText={this.state.conformPasswordError}
                                        error={this.state.conformPasswordFlag}
                                        onChange={(e) => this.change(e)}

                                    />
                                </div>
                                <div className='form-btn'>
                                    <Button fullWidth variant="contained" color="secondary" type='submit' onClick={(e) => this.onSubmit(e)}>Reset</Button></div></div>
                        )}
                        <div className="forgot-password ">
                            <p align="center">
                                <a href="/">log in</a>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

        );
    }
}