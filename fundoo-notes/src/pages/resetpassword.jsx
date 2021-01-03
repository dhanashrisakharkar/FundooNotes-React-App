import React, { Component } from "react";
import { Card, Typography, Button, CardContent ,TextField } from '@material-ui/core/';
import "./resetPassword.css";
import axios from "axios";
//import Input from "../components/Input";
import UserService from "../Services/service";

//var userservice = new UserService();
export default class EmailVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            status: false,
            message: '',
            password: '',
            rpassword: ''
        }
        //this.getDataFromInput = this.getDataFromInput.bind(this);
    }


    // getDataFromInput(event, data) {
    //     // console.log('register', data);
    //     this.setState({
    //         [event.target.name]: data
    //     })
    // }

    // componentDidMount() {
    //     let ptoken = (window.location.pathname).substring(15);
    //     //    / console.log(eemail);
    //     this.setState({ token: ptoken });
    //     //    / debugger;
    //     UserService.resetpassword({ token: ptoken })
    //         .then((response) => {
    //             if (response.status === 200) {
    //                 this.setState(
    //                     {
    //                         status: true,
    //                         message: response.data.message,
    //                     });
    //             }
    //             else {
    //                 this.setState(
    //                     {
    //                         message: response.data.message,
    //                     });
    //             }
    //             console.log('emaiasasasal', this.state);
    //         }
    //         ).catch((error) => {
    //             // /console.log('rereerrors',error);
    //         });
    //     // this.setState(
    //     //   {
    //     //     email: eemail,
    //     //   });
    //     //   this.forceUpdate();
    //     // console.log(this.state);

    // }

    // handleClick() {


    //     axios.post('/api/forgotpassword/reset',
    //         {
    //             token: this.state.token,
    //             password: this.state.password,
    //             rpassword: this.state.rpassword
    //         })
    //         .then((response) => {
    //             this.setState(
    //                 {
    //                     status: true,
    //                     message: response.data.message,
    //                 });
    //             console.log('emaiasasasal', this.state);
    //         }
    //         ).catch((error) => {
    //             // /console.log('rereerrors',error);
    //         });
    // }

    // handleLogin() {
    //     this.props.history.push('/login');
    // }

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
                            <Typography className='label-text' component='p' ></Typography>
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
                            id="password"
                            label="password"
                            name="password"
                            autoComplete="current-password"
                            onChange={this.getDataFromInput}
                            marginTop={3}
                            />
                            </div>
                            <div className="repeat-password">
                                <TextField
                           height="8"
                            variant="outlined"
                            required
                            fullWidth
                            name="rpassword"
                            label="Confirm Password"
                            type="password"
                            id="rpassword"
                            onChange={this.getDataFromInput}
                            
                          />
                          </div>
                                <div className='form-btn'>
                                    <Button fullWidth variant="contained" color="secondary" type='submit' >Reset</Button></div></div>
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