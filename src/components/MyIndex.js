import {Button, Menu, Typography} from "antd";
import Layout, {Content, Header} from "antd/es/layout/layout";
import Footer from "../info/Footer";
import {useNavigate} from "react-router";
import React from "react";

const {Title} = Typography;


const MyIndex = () => {
    const navigate = useNavigate()


    return (


        <Layout style={{minHeight: "100vh"}}>
            <Header className="header">
                <Button onClick={() => navigate("/sign-in")}>Loguj</Button>
            </Header>
            <Layout>
                <Content>
                </Content>
                <Footer/>
            </Layout>

        </Layout>


    )
}
export default MyIndex