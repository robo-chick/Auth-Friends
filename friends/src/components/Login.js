import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    loginButton: {
        ...theme.typography.button,
        "&:hover": {
            backgroundColor: theme.palette.primary.light
        }
    }
}));

export default function Login(props) {
    const classes = useStyles();
    const theme = useTheme();


    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const login = e => {
        e.preventDefault();
        // make a POST request and send credentials object
        axiosWithAuth()
            .post("/login", credentials)
            .then(res => {
                console.log(res)
                window.localStorage.setItem("token", res.data.payload);
                props.history.push("/friends")
            })
            .catch(err => {
                console.log("Error logging in", err);
            });
    };

    return (
        <Grid item container direction="row">
            <Grid item container direction="row">
                <Grid item>
                        <TextField
                            type="text"
                            name="username"
                            label="Username"
                            value={credentials.username}
                            onChange={handleChange}
                        />
                        <TextField
                            type="password"
                            name="password"
                            label="Password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    <Grid item>
                        <Button 
                        variant="contained"
                        onClick={login}
                        className={classes.loginButton}>Login</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};


