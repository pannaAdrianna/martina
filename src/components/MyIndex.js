import {Button, Menu, Typography} from "antd";
import {Link} from "react-router-dom";
import Layout, {Content, Header} from "antd/es/layout/layout";
import Sider from "./Sider";
import Footer from "../info/Footer";
import {useNavigate} from "react-router";


const {Title} = Typography;


const MyIndex = () => {

    const navigate = useNavigate()


    return (


        <Layout style={{minHeight: "100vh"}}>
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"  onClick={() => navigate("/sign-in")}>Sign In</Menu.Item>
                    <Menu.Item key="2"onClick={() => navigate("/random")}>Random meme</Menu.Item>
                    <Menu.Item key="3" onClick={() => navigate("/index")}>Zalogowany</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Content>
                    <Title level={2}>Zaloguj się tu kiedyś</Title>
                    <Button onClick={() => navigate("/index")}>Loguj</Button>
                </Content>
                <Footer/>
            </Layout>
        </Layout>


    )
}
export default MyIndex