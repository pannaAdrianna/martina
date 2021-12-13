import React from "react";
import {Menu, Layout, Icon, Button, Image} from "antd";
import {LogoutOutlined, MailFilled, MedicineBoxFilled, UserOutlined} from "@ant-design/icons";


import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const {SubMenu} = Menu;

export default function Sider(props) {

    const navigate = useNavigate()
    const { handleClick } = props;


    const menuItemsAccount = [

        {
            text: 'Dashboard',
            icon: <UserOutlined color="secondary"/>,
            path: '/dashboard'
        },
        {
            text: 'Update password',
            icon: <UserOutlined color="secondary"/>,
            path: '/test2'
        },
        {
            text: 'Account Info',
            icon: <UserOutlined color="secondary"/>,
            path: '/test'
        },

    ];


    return (
        <Layout.Sider>
            <Menu theme="dark" mode="inline" openKeys={"sub1"}>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
              <UserOutlined/>
              <span>Account</span>
            </span>
                    }
                >
                    {menuItemsAccount.map((item) => (

                        <Menu.Item
                            button
                            key={item.text}
                            onClick={handleClick}
                            // onClick={() => navigate(item.path)}
                        >{item.icon} {item.text}

                        </Menu.Item>
                    ))}
                </SubMenu>

                <Link to="#"><Button>Log out</Button></Link>

            </Menu>
            {/*<Menu theme="dark" mode="inline" openKeys={"sub2"}>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
              <UserOutlined/>
              <span>Prices</span>
            </span>
                    }
                >
                    <Menu.Item key="1" onClick={handleClick}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" onClick={handleClick}>
                        Option 2
                    </Menu.Item>
                </SubMenu>

            </Menu>*/}


        </Layout.Sider>
    );
}