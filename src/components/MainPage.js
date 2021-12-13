import Layout from "antd/es/layout/layout";
import Sider from "./Sider";
import Footer from "../info/Footer";
import {useState} from "react";
import Prices from "./Prices";
import Test2 from "./Test2";
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

    const [render, updateRender] = useState(1);


    const handleMenuClick = menu => {
        updateRender(menu.key);

    };

    const components = {
        'Account Info': <Prices/>,
        'Update password': <Test2/>,
        'Dashboard': <Dashboard/>,

    };

    return (

        <Layout style={{minHeight: "100vh"}}>
            <Sider handleClick={handleMenuClick}/>
            <Layout>
                <Content>{components[render]}</Content>
                <Footer/>
            </Layout>
        </Layout>
    )
}
export default MainPage;