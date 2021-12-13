import React, {useEffect, useRef, useState} from 'react';
import {useAuth} from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";

import Box from '@material-ui/core/Box';

import Footer from "../Footer";
import {Alert, Form, Input, Layout} from "antd";
import {Content} from "antd/es/layout/layout";


const SignIn = () => {


    useEffect(() => {
        document.title = `Sign In`

    })

    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    // wait for a signup to finish
    async function handleSubmit(e) {
        e.preventDefault();


        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            // go to dashboard
            history.push("/dashboard");

        } catch {
            setError("Failed to log in!")
        }

        setLoading(false);

    }


    return (

        <Layout>
            <Content>

                {error && <Alert variant="error">{error}</Alert>}
                <Form noValidate onSubmit={handleSubmit}>
                    <Input
                        inputRef={emailRef}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <Input
                        inputRef={passwordRef}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        disabled={loading}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/forgot-password">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup">
                                Need an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Form>

            </Content>

        </Layout>

    );
};

export default SignIn;