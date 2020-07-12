import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Login = (props) => {
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
        <div>
            <form onSubmit={login}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <label htmlFor="password:">Password:</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    )
};

export default Login;
