//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import FormRow from "@material-ui/core/FormRow";
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import "./login.css"
import { withRouter } from 'react-router';



class Login extends Component {


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
                            <Grid container justify="flex-end" justify  style={{ marginTop: 8, marginBottom: 10 }} className="link" style={{ padding: -1 }}>
                                
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