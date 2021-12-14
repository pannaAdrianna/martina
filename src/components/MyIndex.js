import {Button, Menu, Typography} from "antd";
import Layout, {Content, Header} from "antd/es/layout/layout";
import Footer from "../info/Footer";
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import SignIn from "../auth/SignIn";
import {AuthProvider} from "../contexts/AuthContext";
import {NavBar} from "../NavBar";

const {Title} = Typography;


const MyIndex = () => {
    const navigate = useNavigate()

    const [render, setRender] = useState()

    useEffect(() => {
        document.title = `My Index`
        setRender('Sign In')

    }, [])

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header className="header">
                <NavBar/>
            </Header>

            <Layout>
                <Content>
                    <Title level={1}>Wybierz coś z Menu wyżej</Title>
                    <Footer/>
                </Content>

            </Layout>

        </Layout>


    )
}
export default MyIndex