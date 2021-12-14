import Layout from "antd/es/layout/layout";
import Sider from "./Sider";
import Footer from "../info/Footer";
import {useState} from "react";
import Prices from "./Prices";
import Process from "./Process";
import Dashboard from "./Dashboard";

const {Content} = Layout;

const style = {
    fontSize: "30px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};


const MainPage = ({children}) => {

    const [render, updateRender] = useState('Dashboard');


    const handleMenuClick = menu => {
        updateRender(menu.key);

    };

    const components = {
        'Prices': <Prices/>,
        'Start process': <Process/>,
        'Dashboard': <Dashboard/>,

    };

    return (

        <Layout style={{minHeight: "100vh"}}>
            <Sider handleClick={handleMenuClick}/>
            <Layout>
                <Content>{components[render]}</Content>
            </Layout>
        </Layout>
    )
}
export default MainPage;