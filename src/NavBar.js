import {Menu} from "antd";
import {useNavigate} from "react-router";
import React from "react";

export const NavBar =()=>{
    const navigate = useNavigate()

    return(
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"  onClick={() => navigate("/sign-in")}>Sign In</Menu.Item>
            <Menu.Item key="2"onClick={() => navigate("/random")}>Random meme</Menu.Item>
            <Menu.Item key="3" onClick={() => navigate("/main")}>Zalogowany</Menu.Item>
        </Menu>
    )
}