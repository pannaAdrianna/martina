import React, {useState} from "react";
import {Menu, Layout, Icon, Button, Image} from "antd";
import {
    LogoutOutlined,
    MailFilled,
    MedicineBoxFilled,
    PlusCircleOutlined,
    PoundCircleOutlined,
    UserOutlined
} from "@ant-design/icons";


import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const {SubMenu} = Menu;

export default function Sider(props) {
    const [collapsed, setCollapsed] = useState(true)


    const navigate = useNavigate()
    const {handleClick} = props;


    const menuItemsAccount = [

        {
            text: 'Dashboard',
            icon: <UserOutlined color="secondary"/>,
            path: '/dashboard'
        },
        {
            text: 'Start process',
            icon: <PlusCircleOutlined color="secondary"/>,
            // path: '/test2'
        },
        {
            text: 'Prices',
            icon: <PoundCircleOutlined color="secondary"/>,
            // path: '/pri'
        },

    ];


    return (
        <Layout.Sider
            collapsible
                      collapsed={collapsed}
                      onCollapse={() => setCollapsed(!collapsed)}
                      style={{
                          overflow: "auto",
                          position: "sticky",
                          top: 0,
                          left: 0
                      }}>
            <Menu theme="dark" mode="inline" openKeys={"sub1"}>
                    {menuItemsAccount.map((item) => (

                        <Menu.Item
                            button
                            key={item.text}
                            onClick={handleClick}

                        >
                            {item.icon}
                            <span className="nav-text">{item.text}</span>
                        </Menu.Item>

                    ))}

            </Menu>



        </Layout.Sider>
    );
}
