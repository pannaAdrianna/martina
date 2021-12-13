import {useEffect, useRef, useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router";
import {Alert, Button, Form, Input, Space} from "antd";
import Grid from "antd/es/card/Grid";
import Layout, {Content} from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import React from "react";
import {Link} from "react-router-dom";

const SignIn = () => {


    useEffect(() => {
        document.title = `Sign In`

    }, [])

    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    // wait for a signup to finish
    async function handleSubmit(e) {
        e.preventDefault();


        try {
            setError("");
            setLoading(true);
            await login(emailRef.current, passwordRef.current);
            // go to dashboard
            navigate("/index");

        } catch {
            setError("Failed to log in!")
        }

        setLoading(false);

    }


    return (
        <Layout>
            <Content style={{span: 10}}>
                <Space direction="vertical">

                    <Title level={1}>
                        Sign in
                    </Title>
                    {error && <Alert variant="error">{error}</Alert>}
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Item>
                            <Input addonBefore="Email" inputRef={emailRef} id="email"
                                   label="Email Address"
                                   name="email"
                                   autoComplete="email"
                                   autoFocus required/>
                        </Form.Item>
                        <Form.Item>
                            <Input addonBefore="Password" inputRef={passwordRef}
                                   name="password"
                                   label="Password"
                                   type="password"
                                   id="password"
                                   autoComplete="current-password"
                                   autoFocus required/>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                disabled={loading}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                        </Form.Item>

                    </Form>
                </Space>
            </Content>
        </Layout>
    )
};

export default SignIn;