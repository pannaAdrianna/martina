import Layout from "antd/es/layout/layout";
import Sider from "./Sider";
import Footer from "../info/Footer";
import {useState} from "react";
import Test from "./Test";
import {UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";

const {Content} = Layout;

const style = {
    fontSize: "30px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};


const MainPage = ({children}) => {

    const navigate = useNavigate()


    const menuItemsAccount = [
        {
            text: 'Account Info',
            icon: <UserOutlined color="secondary"/>,
            path: '/test',
        },
        {
            text: 'Update password',
            icon: <UserOutlined color="secondary"/>,
            path: '/test2'
        },
    ];




    return(
       /* <>
            <h1>main</h1>
        </>*/

        <Layout style={{minHeight: "100vh"}}>
            <Sider />
            <Layout>
                <Content> {children}</Content>
                <Footer/>
            </Layout>
        </Layout>
    )
}
export default MainPage;