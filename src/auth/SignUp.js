import React, {useRef, useState} from 'react';

import {useHistory, Link} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import Avatar from "antd/es/avatar/avatar";

const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();



    // wait for a signup to finish
    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfRef.current.value)
            return setError("Passwords do not match!");

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            // go to dashboard
            history.push("/");
        } catch {
            setError("Failed to create an account!")
        }

        setLoading(false);

    }

    return (
        <Container component="main" maxWidth="xs">

            <CssBaseline/>
            <div>
                <Avatar>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    {error && <Alert severity="error">{error}</Alert>}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                inputRef={emailRef}
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
                                inputRef={passwordRef}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                inputRef={passwordConfRef}
                                variant="outlined"
                                required
                                fullWidth
                                name="password-confirm"
                                label="Confirm password"
                                type="password"
                                id="password-confirm"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/signin">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;