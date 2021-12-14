import React, {useRef, useState} from 'react';
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {Alert, Button, Form, Input, Space} from "antd";
import Layout, {Content} from "antd/es/layout/layout";
import Avatar from "antd/es/avatar/avatar";
import Title from "antd/es/typography/Title";
import Grid from "antd/es/card/Grid";


const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    // wait for a signup to finish
    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current !== passwordConfRef.current)
            return setError("Passwords do not match!");

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current, passwordRef.current);
            // go to dashboard
            navigate("/");
        } catch (e) {
            setError("Failed to create an account!")
            console.log("Sign Up error: ", e)
        }

        setLoading(false);

    }

    return (
        <Layout>
            <Content style={{span: 10}}>
                <Space direction="vertical">
                    <Avatar>
                    </Avatar>

                    <Title level={1}>
                        Sign up
                    </Title>
                    <Form noValidate onSubmit={handleSubmit}>
                        {error && <Alert severity="error">{error}</Alert>}

                        <Form.Item>
                            <Input inputref={emailRef}
                                   variant="outlined"
                                   required
                                   id="email"
                                   label="Email Address"
                                   name="email"
                                   autoComplete="email"/>
                        </Form.Item>
                        <Form.Item>
                            <Input inputref={passwordRef}
                                   variant="outlined"
                                   required
                                   name="password"
                                   label="Password"
                                   type="password"
                                   id="password"
                                   autoComplete="current-password"/>
                        </Form.Item>

                        <Form.Item>
                            <Input inputref={passwordConfRef}
                                   variant="outlined"
                                   required
                                   name="password-confirm"
                                   label="Confirm password"
                                   type="password"
                                   id="password-confirm"/>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={loading}
                            >
                                Sign Up
                            </Button>

                        </Form.Item>

                        <Link to="/sign-in">
                            Already have an account? Sign in
                        </Link>

                    </Form>
                </Space>
            </Content>
        </Layout>
    );
}

export default SignUp;